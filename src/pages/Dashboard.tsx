import Accounts from "@/components/dashboard/tabs/Accounts";
import { AnalyticsTab } from "@/components/dashboard/tabs/Analytics";
import { useState } from "react";
import {
  DashboardSidebar,
  type DashboardTab,
} from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { OverviewTab } from "@/components/dashboard/tabs/OverviewTab";
// import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
// import { OverviewTab } from "@/components/dashboard/tabs/OverviewTab";
// import { ContentTab } from "@/components/dashboard/tabs/ContentTab";
// import { ScheduleTab } from "@/components/dashboard/tabs/ScheduleTab";
// import { AnalyticsTab } from "@/components/dashboard/tabs/AnalyticsTab";
// import { AccountsTab } from "@/components/dashboard/tabs/AccountsTab";
// import { SettingsTab } from "@/components/dashboard/tabs/SettingsTab";
// import { CreatePostModal } from "@/components/forms/CreatePostModal";
// import { AccountConnectionModal } from "@/components/forms/AccountConnectionModal";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [, setCreatePostOpen] = useState(false);
  const [, setAccountModalOpen] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab onCreatePost={() => setCreatePostOpen(true)} />;
      // case "content":
      //   return <ContentTab />;
      // case "schedule":
      //   return <ScheduleTab />;
      case "analytics":
        return <AnalyticsTab />;
      case "accounts":
        return <Accounts onConnectAccount={() => setAccountModalOpen(true)} />;
      // case "settings":
      //   return <SettingsTab />;
      default:
        return <OverviewTab onCreatePost={() => setCreatePostOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex w-full overflow-hidden">
      <DashboardSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 flex flex-col min-h-screen w-full lg:ml-64 xl:ml-72">
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onCreatePost={() => setCreatePostOpen(true)}
        />

        <main className="flex-1 overflow-auto bg-gradient-to-br from-background via-muted/30 to-background">
          {/* Reduced padding layers and optimized for mobile to desktop */}
          <div className="p-2 sm:p-3 md:p-4 lg:p-6 max-w-full">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl  p-3 sm:p-2 md:p-3 lg:p-4 min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8rem)] overflow-hidden">
              {renderTabContent()}
            </div>
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 lg:hidden transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* 
      <CreatePostModal 
        isOpen={createPostOpen} 
        onClose={() => setCreatePostOpen(false)}
      /> */}

      {/* <AccountConnectionModal 
        isOpen={accountModalOpen} 
        onClose={() => setAccountModalOpen(false)}
      /> */}
    </div>
  );
}
