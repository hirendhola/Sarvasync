/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  Users,
  Clock
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const analyticsData = {
  overview: {
    totalReach: { value: 47200, change: 12.5, trend: "up" },
    engagement: { value: 3.8, change: 0.7, trend: "up" },
    followers: { value: 12400, change: 8.2, trend: "up" },
    avgEngagement: { value: 2.4, change: -0.3, trend: "down" },
  },
  topPosts: [
    {
      id: 1,
      content: "AI-powered content creation is revolutionizing social media...",
      platform: "Instagram",
      metrics: { likes: 234, comments: 18, shares: 12, reach: 3400 },
      publishedAt: "2 days ago",
    },
    {
      id: 2,
      content: "The future of business communications is here! 🚀",
      platform: "LinkedIn",
      metrics: { likes: 189, comments: 24, shares: 31, reach: 2800 },
      publishedAt: "3 days ago",
    },
    {
      id: 3,
      content: "How to leverage AI for better engagement rates...",
      platform: "Twitter",
      metrics: { likes: 156, comments: 8, shares: 15, reach: 2100 },
      publishedAt: "5 days ago",
    },
  ],
  platformPerformance: [
    { platform: "Instagram", posts: 12, reach: 18500, engagement: 4.2 },
    { platform: "LinkedIn", posts: 8, reach: 15200, engagement: 3.8 },
    { platform: "Twitter", posts: 15, reach: 9800, engagement: 3.1 },
    { platform: "Facebook", posts: 6, reach: 3700, engagement: 2.9 },
  ],
};

const engagementData = [
  { name: "Mon", engagement: 2.4, reach: 1200 },
  { name: "Tue", engagement: 3.1, reach: 1800 },
  { name: "Wed", engagement: 2.8, reach: 1600 },
  { name: "Thu", engagement: 4.2, reach: 2400 },
  { name: "Fri", engagement: 3.8, reach: 2100 },
  { name: "Sat", engagement: 3.2, reach: 1900 },
  { name: "Sun", engagement: 2.9, reach: 1700 },
];

const followerGrowthData = [
  { month: "Jan", followers: 8200 },
  { month: "Feb", followers: 9100 },
  { month: "Mar", followers: 9800 },
  { month: "Apr", followers: 10500 },
  { month: "May", followers: 11200 },
  { month: "Jun", followers: 12400 },
];

// const platformData = [
//   { platform: "Instagram", value: 18500, fill: "hsl(var(--primary))" },
//   { platform: "LinkedIn", value: 15200, fill: "hsl(220 70% 50%)" },
//   { platform: "Twitter", value: 9800, fill: "hsl(262 70% 50%)" },
//   { platform: "Facebook", value: 3700, fill: "hsl(295 70% 50%)" },
// ];

const pieData = [
  { name: "Instagram", value: 18500, fill: "hsl(var(--primary))" },
  { name: "LinkedIn", value: 15200, fill: "hsl(220 70% 50%)" },
  { name: "Twitter", value: 9800, fill: "hsl(262 70% 50%)" },
  { name: "Facebook", value: 3700, fill: "hsl(295 70% 50%)" },
];

export function AnalyticsTab() {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="space-y-4 max-w-full overflow-hidden">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight gradient-text">Analytics</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Track your social media performance and insights.
        </p>
      </div>

      {/* Overview Metrics - Optimized responsive grid */}
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        <Card className="glass-subtle hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Total Reach</CardTitle>
            <Eye className="h-3 w-3 md:h-4 md:w-4 text-primary" />
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-lg md:text-2xl font-bold">
              {formatNumber(analyticsData.overview.totalReach.value)}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-green-600">
                <TrendingUp className="w-2 h-2 md:w-3 md:h-3" />
                +{analyticsData.overview.totalReach.change}%
              </span>
              {" "}vs last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-subtle hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Engagement</CardTitle>
            <Heart className="h-3 w-3 md:h-4 md:w-4 text-primary" />
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-lg md:text-2xl font-bold">
              {analyticsData.overview.engagement.value}%
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-green-600">
                <TrendingUp className="w-2 h-2 md:w-3 md:h-3" />
                +{analyticsData.overview.engagement.change}%
              </span>
              {" "}vs last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-subtle hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Followers</CardTitle>
            <Users className="h-3 w-3 md:h-4 md:w-4 text-primary" />
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-lg md:text-2xl font-bold">
              {formatNumber(analyticsData.overview.followers.value)}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-green-600">
                <TrendingUp className="w-2 h-2 md:w-3 md:h-3" />
                +{analyticsData.overview.followers.change}%
              </span>
              {" "}vs last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-subtle hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Avg. Engagement</CardTitle>
            <MessageSquare className="h-3 w-3 md:h-4 md:w-4 text-primary" />
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-lg md:text-2xl font-bold">
              {analyticsData.overview.avgEngagement.value}%
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-red-600">
                <TrendingDown className="w-2 h-2 md:w-3 md:h-3" />
                {analyticsData.overview.avgEngagement.change}%
              </span>
              {" "}vs last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section - Improved responsive layout */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Engagement Trends */}
        <Card className="glass-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg">Weekly Engagement Trends</CardTitle>
            <CardDescription className="text-xs md:text-sm">
              Engagement rate and reach over the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[200px] md:h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagementData}>
                  <defs>
                    <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="engagement" 
                    stroke="hsl(var(--primary))" 
                    fillOpacity={1}
                    fill="url(#engagementGradient)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Follower Growth */}
        <Card className="glass-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg">Follower Growth</CardTitle>
            <CardDescription className="text-xs md:text-sm">
              Total followers over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[200px] md:h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={followerGrowthData}>
                  <defs>
                    <linearGradient id="followerGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(295 70% 50%)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="followers" 
                    stroke="url(#followerGradient)"
                    strokeWidth={4}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 3, r: 6 }}
                    activeDot={{ r: 8, stroke: "hsl(var(--primary))", strokeWidth: 2, fill: "white" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section - Better stacking on tablets */}
      <div className="grid gap-4 xl:grid-cols-2">
        {/* Platform Performance */}
        <Card className="glass-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg">Platform Performance</CardTitle>
            <CardDescription className="text-xs md:text-sm">
              Reach distribution across platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[200px] md:h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {pieData.map((entry, _index) => (
                <div key={entry.name} className="flex items-center gap-2 text-xs">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.fill }}
                  />
                  <span className="text-muted-foreground">{entry.name}</span>
                  <span className="font-medium ml-auto">{formatNumber(entry.value)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Posts */}
        <Card className="glass-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-base md:text-lg">Top Performing Posts</CardTitle>
            <CardDescription className="text-xs md:text-sm">
              Your best content from the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-3">
              {analyticsData.topPosts.map((post) => (
                <div key={post.id} className="border rounded-lg p-3 space-y-2 hover-lift">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                      {post.platform}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.publishedAt}
                    </span>
                  </div>
                  
                  <p className="text-xs line-clamp-2">{post.content}</p>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                        <Heart className="w-3 h-3" />
                      </div>
                      <div className="font-medium">{post.metrics.likes}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                        <MessageSquare className="w-3 h-3" />
                      </div>
                      <div className="font-medium">{post.metrics.comments}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                        <Share2 className="w-3 h-3" />
                      </div>
                      <div className="font-medium">{post.metrics.shares}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                        <Eye className="w-3 h-3" />
                      </div>
                      <div className="font-medium">{formatNumber(post.metrics.reach)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
