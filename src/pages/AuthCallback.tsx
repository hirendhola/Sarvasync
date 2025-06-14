import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const { loginWithToken } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = searchParams.get("token");
    if (accessToken) {
      loginWithToken(accessToken);
    } else {
      setError("Login failed: No access token provided by the server.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      {error ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">
            Authentication Error
          </h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      ) : (
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <h1 className="text-2xl font-bold">Finalizing your login...</h1>
          <p className="text-muted-foreground">Please wait a moment.</p>
        </div>
      )}
    </div>
  );
};

export default AuthCallback;