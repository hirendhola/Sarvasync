import { AuthModal } from "@/components/auth/AuthModal";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import api, { setAccessToken } from "@/api";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithToken: (token: string) => void;
  logout: () => void;
  requestLogin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  const initialCheck = useRef(false);

  useEffect(() => {
    if (initialCheck.current) return;
    initialCheck.current = true;

    axios
      .post(
        `http://localhost:3000/auth/refresh`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("✅ Session restored on initial load.");
        setAccessToken(response.data.accessToken);
        setIsAuthenticated(true);
      })
      .catch(() => {
        console.log("ⓘ No active session found.");
        setIsAuthenticated(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const loginWithToken = useCallback(
    (token: string) => {
      setAccessToken(token);
      setIsAuthenticated(true);
      setIsAuthModalOpen(false);
      navigate("/dashboard");
    },
    [navigate]
  );

  const logout = useCallback(async () => {
    try {
      await api.post("/auth/logout");
      console.log("✅ Successfully logged out on server.");
    } catch (error) {
      console.error(
        "Logout failed on server, but clearing client state anyway:",
        error
      );
    } finally {
      setAccessToken(null);
      setIsAuthenticated(false);
      navigate("/");
    }
  }, [navigate]);

  const requestLogin = () => {
    setIsAuthModalOpen(true);
  };

  const value = {
    isAuthenticated,
    isLoading,
    loginWithToken,
    logout,
    requestLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      <AuthModal isOpen={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
