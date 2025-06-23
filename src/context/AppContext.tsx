/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import api from "@/api";
import { useAuth } from "./AuthContext"; 
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import connectGoogle from "@/utils/connect/google"; 

export interface ConnectedAccount {
  id: string; 
  platform: string; 
  username: string;
  followers: string;
  status: "connected" | "error";
  icon: React.ElementType;
  color: string;
}

export interface AvailablePlatform {
  name: string;
  icon: React.ElementType;
  color: string;
  action: () => void;
}

export const PLATFORM_DETAILS: { [key: string]: any } = {
  GOOGLE: {
    platformName: "YouTube",
    icon: Youtube,
    color: "text-red-600",
    connectAction: connectGoogle,
  },
  FACEBOOK: {
    platformName: "Facebook",
    icon: Facebook,
    color: "text-blue-600",
    connectAction: () => alert("Connect Facebook not implemented"),
  },
  TWITTER: {
    platformName: "Twitter",
    icon: Twitter,
    color: "text-blue-500",
    connectAction: () => alert("Connect Twitter not implemented"),
  },
  INSTAGRAM: {
    platformName: "Instagram",
    icon: Instagram,
    color: "text-pink-600",
    connectAction: () => alert("Connect Instagram not implemented"),
  },
  LINKEDIN: {
    platformName: "LinkedIn",
    icon: Linkedin,
    color: "text-blue-700",
    connectAction: () => alert("Connect LinkedIn not implemented"),
  },
};

interface AppContextType {
  connectedAccounts: ConnectedAccount[];
  availablePlatforms: AvailablePlatform[];
  isLoading: boolean;
  error: string | null;
  refreshAccounts: () => void; 
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth(); // Depend on the authentication context

  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchConnectedAccounts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await api.get("/user/connected-accounts");
      const linkedAccountsFromApi = res.data.user.linkedAccounts;

      const transformedAccounts = linkedAccountsFromApi
        .map((account: any) => {
          const details = PLATFORM_DETAILS[account.provider];
          if (!details) {
            console.warn(`Unknown provider found: ${account.provider}`);
            return null;
          }
          return {
            id: account.provider,
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
    } catch (err) {
      console.error("Failed to fetch connected accounts:", err);
      setError("Failed to load your accounts. Please try again later.");
      setConnectedAccounts([]); 
    } finally {
      setIsLoading(false);
    }
  }, []);


  useEffect(() => {
    if (isAuthenticated) {
      fetchConnectedAccounts();
    } else {
      setConnectedAccounts([]);
      setIsLoading(false); 
      setError(null);
    }
  }, [isAuthenticated, fetchConnectedAccounts]);


  const availablePlatforms = useMemo<AvailablePlatform[]>(() => {
    const connectedPlatformNames = connectedAccounts.map(acc => acc.platform);
    return Object.values(PLATFORM_DETAILS)
      .filter(details => !connectedPlatformNames.includes(details.platformName))
      .map(details => ({
        name: details.platformName,
        icon: details.icon,
        color: details.color,
        action: details.connectAction,
      }));
  }, [connectedAccounts]);

  const value = {
    connectedAccounts,
    availablePlatforms,
    isLoading,
    error,
    refreshAccounts: fetchConnectedAccounts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};