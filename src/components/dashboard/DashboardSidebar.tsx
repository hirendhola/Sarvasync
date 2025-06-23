import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import {
  HomeIcon,
  ContentIcon,
  ScheduleIcon,
  AnalyticsIcon,
  AccountsIcon,
  SettingsIcon,
} from "@/components/icons/PremiumIcons";

type DashboardTab =
  | "overview"
  | "content"
  | "schedule"
  | "analytics"
  | "accounts"
  | "settings";

interface DashboardSidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

const sidebarItems = [
  { id: "overview" as const, label: "Overview", icon: HomeIcon },
  { id: "content" as const, label: "Create", icon: ContentIcon },
  { id: "schedule" as const, label: "Schedule", icon: ScheduleIcon },
  { id: "analytics" as const, label: "Analytics", icon: AnalyticsIcon },
  { id: "accounts" as const, label: "Accounts", icon: AccountsIcon },
  { id: "settings" as const, label: "Settings", icon: SettingsIcon },
];

export function DashboardSidebar({
  activeTab,
  onTabChange,
  isOpen = false,
  onToggle,
}: DashboardSidebarProps) {
  const handleTabChange = (tab: DashboardTab) => {
    onTabChange(tab);
    if (window.innerWidth < 1024 && onToggle) {
      onToggle();
    }
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-20 h-screen w-64 sm:w-72 transform transition-all duration-300 ease-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "backdrop-blur-md bg-background/70 border-r border-border/20 flex flex-col"
      )}
    >
      <div className="flex justify-end p-3 sm:p-4 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8 rounded-lg hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 sm:p-6 sm:pl-3 border-b border-border/20">
        <div className="flex items-center gap-3 sm:gap-4">
          <img src="/hero-icon.png" alt="Hero Icon" width={170} height={50} />
        </div>
      </div>

      <ScrollArea className="flex-1 px-3 sm:px-4 py-4 sm:py-6">
        <nav className="space-y-1 sm:space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 sm:gap-3 h-10 sm:h-11 rounded-lg transition-all duration-200 font-medium text-left text-sm sm:text-base cursor-pointer",
                activeTab === item.id
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
              onClick={() => handleTabChange(item.id)}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-semibold truncate">{item.label}</span>
              {activeTab === item.id && (
                <div className="ml-auto w-2 h-2 bg-primary-foreground rounded-full flex-shrink-0" />
              )}
            </Button>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-3 sm:p-6 border-t border-border/20">
        <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-sm border border-primary/20 rounded-xl p-3 sm:p-4 text-center">
          <div className="text-sm font-semibold text-foreground mb-1">
            Upgrade to Pro
          </div>
          <div className="text-xs text-muted-foreground mb-2 sm:mb-3">
            Get unlimited posts and analytics
          </div>
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white border-0 text-xs sm:text-sm"
          >
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export type { DashboardTab };
