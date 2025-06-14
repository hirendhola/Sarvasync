"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, MailCheck, MailWarning } from "lucide-react";
import api from "@/api";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});
type EmailFormValues = z.infer<typeof emailSchema>;


interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const AuthModal = ({ isOpen, onOpenChange }: AuthModalProps) => {
  const [view, setView] = useState<"enter-email" | "check-email">("enter-email");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const resetToInitialState = () => {
    setView("enter-email");
    setSubmittedEmail("");
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setTimeout(resetToInitialState, 300); 
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-background/80 backdrop-blur-sm border-primary/20">
        {view === "enter-email" ? (
          <EnterEmailView
            onSuccess={(email) => {
              setSubmittedEmail(email);
              setView("check-email");
            }}
          />
        ) : (
          <CheckEmailView
            email={submittedEmail}
            onResend={resetToInitialState} //
          />
        )}
      </DialogContent>
    </Dialog>
  );
};


interface EnterEmailViewProps {
  onSuccess: (email: string) => void;
}

const EnterEmailView = ({ onSuccess }: EnterEmailViewProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: EmailFormValues) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.post("/auth/magiclink", { email: data.email });
      
      onSuccess(data.email);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Sign In or Sign Up
        </DialogTitle>
        <DialogDescription className="text-center">
          Enter your email below to receive a secure login link.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} autoFocus />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && (
            <p className="text-sm text-destructive flex items-center gap-2">
              <MailWarning className="h-4 w-4" />
              {error}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Continue with Email"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};


interface CheckEmailViewProps {
  email: string;
  onResend: () => void;
}

const CheckEmailView = ({ email, onResend }: CheckEmailViewProps) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Check Your Inbox
        </DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center justify-center space-y-4 py-8">
        <MailCheck className="h-16 w-16 text-primary" />
        <p className="text-muted-foreground text-center">
          We've sent a secure login link to <br />
          <strong className="text-foreground">{email}</strong>
        </p>
        <p className="text-sm text-muted-foreground text-center pt-4">
          Didn't get the email? Check your spam folder, or <br />
          <button
            onClick={onResend}
            className="text-primary hover:underline font-medium"
          >
            try a different email address.
          </button>
        </p>
      </div>
    </>
  );
};