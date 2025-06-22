import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  MessageSquare,
  Eye,
  Heart,
  Share2,
  Plus,
  ArrowUpRight,
  ArrowRight
} from "lucide-react";

const metrics = [
  {
    title: "Total Reach",
    value: "47.2K",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Eye,
    description: "Total impressions across all platforms"
  },
  {
    title: "Engagement Rate",
    value: "3.8%",
    change: "+0.7%",
    changeType: "positive" as const,
    icon: Heart,
    description: "Average engagement across posts"
  },
  {
    title: "Posts This Week",
    value: "24",
    change: "+4",
    changeType: "positive" as const,
    icon: MessageSquare,
    description: "Content published this week"
  },
];

const recentPosts = [
  {
    id: 1,
    platform: "Instagram",
    content: "AI-powered content creation is revolutionizing social media marketing. Here's how we're leveraging technology to create more engaging content...",
    status: "published",
    engagement: { likes: 234, comments: 18, shares: 12 },
    publishedAt: "2 hours ago",
    image: "📸"
  },
  {
    id: 2,
    platform: "Twitter",
    content: "The future of social media management is here! 🚀 #SocialMediaAI #ContentCreation",
    status: "scheduled",
    scheduledFor: "Today at 3:00 PM",
    image: "🐦"
  },
  {
    id: 3,
    platform: "LinkedIn",
    content: "How AI is transforming business communications and why your company should care about automated content creation...",
    status: "draft",
    lastEdited: "1 hour ago",
    image: "💼"
  },
];

const upcomingPosts = [
  {
    platform: "Instagram",
    title: "Product Launch Story",
    time: "Today at 2:00 PM",
    type: "Story"
  },
  {
    platform: "LinkedIn",
    title: "Industry Insights Article",
    time: "Tomorrow at 9:00 AM",
    type: "Article"
  },
  {
    platform: "Twitter",
    title: "Engagement Thread",
    time: "Dec 16 at 11:00 AM",
    type: "Thread"
  },
];

interface OverviewTabProps {
  onCreatePost: () => void;
}

export function OverviewTab({ onCreatePost }: OverviewTabProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your social media presence.
          </p>
        </div>
        <Button onClick={onCreatePost} className="bg-primary hover:bg-primary/90 shadow-md">
          <Plus className="w-4 h-4 mr-2" />
          Create New Post
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.title} className="hover-lift cursor-pointer border-border/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium">
                  <TrendingUp className="w-3 h-3" />
                  {metric.change}
                </span>
                <span className="text-xs text-muted-foreground">from last week</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Recent Posts</CardTitle>
                <CardDescription>
                  Your latest social media activity and performance
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-4 p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="text-2xl">{post.image}</div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{post.platform}</Badge>
                      <Badge 
                        variant={
                          post.status === 'published' ? 'default' : 
                          post.status === 'scheduled' ? 'secondary' : 'outline'
                        }
                        className="text-xs"
                      >
                        {post.status}
                      </Badge>
                    </div>
                    <p className="text-sm line-clamp-2 text-foreground">{post.content}</p>
                    {post.status === 'published' && post.engagement && (
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.engagement.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {post.engagement.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share2 className="w-3 h-3" />
                          {post.engagement.shares}
                        </span>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {post.publishedAt || post.scheduledFor || `Last edited ${post.lastEdited}`}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Upcoming Posts</CardTitle>
                <CardDescription>
                  Your scheduled content for the next 7 days
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                Schedule <Calendar className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingPosts.map((post, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border border-border/50 rounded-lg hover:bg-muted/30 transition-colors">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{post.title}</p>
                    <p className="text-xs text-muted-foreground">{post.platform} • {post.type}</p>
                    <p className="text-xs text-primary font-medium">{post.time}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>
            Frequently used tools and shortcuts for faster workflow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start gap-3 h-12" onClick={onCreatePost}>
              <Plus className="w-4 h-4" />
              Create Post
            </Button>
            <Button variant="outline" className="justify-start gap-3 h-12">
              <Calendar className="w-4 h-4" />
              Schedule Content
            </Button>
            <Button variant="outline" className="justify-start gap-3 h-12">
              <TrendingUp className="w-4 h-4" />
              View Analytics
            </Button>
            <Button variant="outline" className="justify-start gap-3 h-12">
              <Users className="w-4 h-4" />
              Manage Accounts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
