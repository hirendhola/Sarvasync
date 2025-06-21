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
import {
  Plus,
  CheckCircle,
  AlertCircle,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import connectGoogle from "@/utils/connect/google";
// import { openOAuthPopup } from "@/utils/oauthPopup";

interface AccountsTabProps {
  onConnectAccount: () => void;
}

export default function Dashboard({ onConnectAccount }: AccountsTabProps) {
  const connectedAccounts = [
    {
      id: 1,
      platform: "Instagram",
      username: "@company",
      followers: "12.5K",
      status: "connected",
      icon: Instagram,
      color: "text-pink-600",
    },
    {
      id: 2,
      platform: "Twitter",
      username: "@company",
      followers: "8.2K",
      status: "connected",
      icon: Twitter,
      color: "text-blue-500",
    },
    {
      id: 3,
      platform: "LinkedIn",
      username: "Company Page",
      followers: "2.1K",
      status: "error",
      icon: Linkedin,
      color: "text-blue-700",
    },
  ];

  const availablePlatforms = [
    { name: "Facebook", icon: Facebook, color: "text-blue-600" },
    { name: "YouTube", icon: Youtube, color: "text-red-600" },
    { name: "TikTok", icon: Plus, color: "text-gray-600" },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Connected Accounts
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your social media accounts
          </p>
        </div>
        <Button
          onClick={onConnectAccount}
          className="bg-purple-600 hover:bg-purple-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Connect Account
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {connectedAccounts.map((account) => {
          const IconComponent = account.icon;
          return (
            <Card
              key={account.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-gray-50 ${account.color}`}
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
                      account.status === "connected" ? "default" : "destructive"
                    }
                  >
                    {account.status === "connected" ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <AlertCircle className="w-3 h-3 mr-1" />
                    )}
                    {account.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{account.followers}</span>{" "}
                    followers
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Available Platforms
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {availablePlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <Card
                key={platform.name}
                className="hover:shadow-md transition-shadow cursor-pointer"
                onClick={onConnectAccount}
              >
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-gray-50 ${platform.color}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-medium">{platform.name}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            );
          })}
          <Button onClick={connectGoogle}>connect to google</Button>
        </div>
      </div>
    </div>
  );
}
