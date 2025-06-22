import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SearchIcon, BellIcon, MenuIcon, PlusIcon } from "@/components/icons/PremiumIcons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, User, LogOut } from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
  onCreatePost?: () => void;
}

export function DashboardHeader({ onMenuClick, onCreatePost }: DashboardHeaderProps) {

  return (
    <header className="sticky top-0 z-10 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 border-b border-border/10 backdrop-blur-md bg-background/70">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 min-w-0 flex-1">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl hover:bg-muted/80 transition-all duration-200 flex-shrink-0"
            onClick={onMenuClick}
          >
            <MenuIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>

          <div className="relative hidden sm:block flex-1 max-w-sm md:max-w-md lg:max-w-lg">
            <SearchIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts, analytics..."
              className="bg-muted/30 backdrop-blur-sm pl-10 sm:pl-14 pr-12 sm:pr-20 py-2 sm:py-3 md:py-4 rounded-xl border border-border/30 focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none text-xs sm:text-sm font-medium placeholder:text-muted-foreground w-full transition-all duration-200 focus:bg-background/50"
            />
            <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2">
              <kbd className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 text-xs font-semibold text-muted-foreground bg-background/50 border border-border/50 rounded-lg backdrop-blur-sm">⌘K</kbd>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
          <Button 
            className="hidden sm:flex bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold transition-all duration-200 px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 h-8 sm:h-10 md:h-12 rounded-xl text-xs sm:text-sm md:text-base"
            onClick={onCreatePost}
          >
            <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
            <span className="hidden md:inline">Create Post</span>
            <span className="md:hidden">Create</span>
          </Button>

          <Button 
            className="sm:hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold transition-all duration-200 h-8 w-8 rounded-xl p-0"
            onClick={onCreatePost}
          >
            <PlusIcon className="w-4 h-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl hover:bg-muted/80 transition-all duration-200 relative backdrop-blur-sm flex-shrink-0"
              >
                <BellIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-muted-foreground" />
                <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full text-xs font-bold flex items-center justify-center border-2 border-background">
                  3
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 sm:w-72 md:w-80 backdrop-blur-xl bg-background/90 border-border/30">
              <div className="p-3 sm:p-4 border-b border-border/50">
                <h4 className="font-semibold text-foreground text-sm">Notifications</h4>
                <p className="text-xs text-muted-foreground">You have 3 unread notifications</p>
              </div>
              <div className="p-2">
                <div className="p-2 sm:p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
                  <div className="text-xs sm:text-sm font-medium">New follower on Instagram</div>
                  <div className="text-xs text-muted-foreground">2 minutes ago</div>
                </div>
                <div className="p-2 sm:p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
                  <div className="text-xs sm:text-sm font-medium">Post reached 1K likes</div>
                  <div className="text-xs text-muted-foreground">1 hour ago</div>
                </div>
                <div className="p-2 sm:p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
                  <div className="text-xs sm:text-sm font-medium">Scheduled post published</div>
                  <div className="text-xs text-muted-foreground">3 hours ago</div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="bg-muted/30 backdrop-blur-sm rounded-xl p-2 sm:p-3 md:p-4 flex items-center gap-1 sm:gap-2 md:gap-3 hover:bg-muted/50 transition-all duration-200 h-8 sm:h-10 md:h-12 min-w-0">
                <Avatar className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 ring-2 ring-primary/20 flex-shrink-0">
                  {/* <AvatarImage src={user?.avatar} alt={user?.name} /> */}
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary font-bold text-xs">
                    {/* {user?.name?.split(' ').map(n => n[0]).join('')} */}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left min-w-0 flex-1">
                  {/* <div className="text-xs md:text-sm font-semibold text-foreground truncate">{user?.name}</div> */}
                  {/* <div className="text-xs text-muted-foreground truncate">{user?.email}</div> */}
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 sm:w-56 backdrop-blur-xl bg-background/90 border-border/30">
              <DropdownMenuItem className="flex items-center gap-2 hover:bg-muted/50 transition-colors text-sm">
                <User className="w-4 h-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 hover:bg-muted/50 transition-colors text-sm">
                <Settings className="w-4 h-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2 text-destructive hover:bg-destructive/10 transition-colors text-sm">
                <LogOut className="w-4 h-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
