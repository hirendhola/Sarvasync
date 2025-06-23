/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Loader } from "@/components/ui/loader";
import React from "react";

export default function Accounts() {
  const {
    connectedAccounts,
    availablePlatforms,
    isLoading,
    error,
    refreshAccounts,
  } = useApp();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600 bg-red-50 rounded-lg">
        <h3 className="font-bold">An Error Occurred</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      <div className="flex w-full justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Connected Accounts
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your social media accounts to power your content creation.
          </p>
        </div>
        <Button size={"lg"} onClick={refreshAccounts}>
          Refresh
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {connectedAccounts.length > 0 ? (
          connectedAccounts.map((account: any) => {
            const IconComponent = account.icon;
            return (
              <Card
                key={account.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg bg-gray-100 ${account.color}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {account.platform}
                        </CardTitle>
                        <CardDescription>{account.username}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant={
                        account.status === "connected"
                          ? "default"
                          : "destructive"
                      }
                      className="capitalize"
                    >
                      {account.status === "connected" ? (
                        <CheckCircle className="w-3 h-3 mr-1.5" />
                      ) : (
                        <AlertCircle className="w-3 h-3 mr-1.5" />
                      )}
                      {account.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-600">
                      Followers:{" "}
                      <span className="font-medium text-gray-800">
                        {account.followers}
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <div className="col-span-full text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">
              No accounts connected yet. Connect one below!
            </p>
          </div>
        )}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Available Platforms
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availablePlatforms.map((platform: any) => {
            const IconComponent = platform.icon;
            return (
              <Card
                key={platform.name}
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={platform.action} // Use the specific action from the context
              >
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-lg bg-gray-100 ${platform.color}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-gray-800">
                      {platform.name}
                    </span>
                  </div>
                  <Button variant="default" size="sm">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
