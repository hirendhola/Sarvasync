/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
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
  CheckCircle,
  AlertCircle,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import connectGoogle from "@/utils/connect/google";
import api from "@/api";

interface ConnectedAccount {
  id: string;
  platform: string;
  username: string;
  followers: string;
  status: "connected" | "error";
  icon: React.ElementType;
  color: string;
}

const PLATFORM_DETAILS: { [key: string]: any } = {
  GOOGLE: {
    platformName: "YouTube",
    icon: Youtube,
    color: "text-red-600",
    connectAction: connectGoogle, // Link the connect function here
  },
  FACEBOOK: {
    platformName: "Facebook",
    icon: Facebook,
    color: "text-blue-600",
    // connectAction: connectFacebook,
  },
  TWITTER: {
    platformName: "Twitter",
    icon: Twitter,
    color: "text-blue-500",
    // connectAction: connectTwitter,
  },
  INSTAGRAM: {
    platformName: "Instagram",
    icon: Instagram,
    color: "text-pink-600",
    // connectAction: connectInstagram,
  },
  LINKEDIN: {
    platformName: "LinkedIn",
    icon: Linkedin,
    color: "text-blue-700",
    // connectAction: connectLinkedIn,
  },
  // Add other platforms here as you support them
  // TIKTOK: {
  //   platformName: "TikTok",
  //   icon: MessageCircle, // Example icon
  //   color: "text-black",
  // },
};

interface AccountsTabProps {
  onConnectAccount: () => void;
}

export default function Dashboard({ onConnectAccount }: AccountsTabProps) {
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([]);
  
  useEffect(() => {
    async function fetchConnectedAccounts() {
      try {
        const res = await api.get("/user/connected-accounts");
        const linkedAccountsFromApi = res.data.user.linkedAccounts;
        
        const transformedAccounts = linkedAccountsFromApi
          .map((account: any) => {
            const details = PLATFORM_DETAILS[account.provider];
            
            // If the provider is unknown, skip it
            if (!details) {
              console.warn(`Unknown provider found: ${account.provider}`);
              return null;
            }

            // Create the account object for the UI
            return {
              id: account.provider, // Use provider as a unique key
              platform: details.platformName,
              icon: details.icon,
              color: details.color,
              username: "Connected Account",
              followers: "N/A",
              status: "connected",
            };
          })
          .filter(Boolean) as ConnectedAccount[]; 

        setConnectedAccounts(transformedAccounts);
      } catch (error) {
        console.error("Failed to fetch connected accounts:", error);
      }
    }
    fetchConnectedAccounts();
  }, []);

  const connectedPlatformNames = connectedAccounts.map(acc => acc.platform);
  const availablePlatforms = Object.values(PLATFORM_DETAILS)
    .filter(details => !connectedPlatformNames.includes(details.platformName))
    .map(details => ({
        name: details.platformName,
        icon: details.icon,
        color: details.color,
        action: details.connectAction || onConnectAccount,
    }));


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
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {connectedAccounts.length > 0 ? (
          connectedAccounts.map((account) => {
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
                      <span className="font-medium">{account.followers}</span>
                      {account.followers !== "N/A" && " followers"}
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
          <p className="text-gray-500 col-span-full">No accounts connected yet. Connect one below!</p>
        )}
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
                onClick={platform.action} // Use the specific action for each platform
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
        </div>
      </div>
    </div>
  );
}