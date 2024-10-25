import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive line chart";

const chartData = [
  { date: "2024-04-01", totalRevenue: 222, netProfit: 150 },
  { date: "2024-04-02", totalRevenue: 97, netProfit: 180 },
  { date: "2024-04-03", totalRevenue: 167, netProfit: 120 },
  { date: "2024-04-04", totalRevenue: 242, netProfit: 260 },
  { date: "2024-04-05", totalRevenue: 373, netProfit: 290 },
  { date: "2024-04-06", totalRevenue: 301, netProfit: 340 },
  { date: "2024-04-07", totalRevenue: 245, netProfit: 180 },
  { date: "2024-04-08", totalRevenue: 409, netProfit: 320 },
  { date: "2024-04-09", totalRevenue: 59, netProfit: 110 },
  { date: "2024-04-10", totalRevenue: 261, netProfit: 190 },
  { date: "2024-04-11", totalRevenue: 327, netProfit: 350 },
  { date: "2024-04-12", totalRevenue: 292, netProfit: 210 },
  { date: "2024-04-13", totalRevenue: 342, netProfit: 380 },
  { date: "2024-04-14", totalRevenue: 137, netProfit: 220 },
  { date: "2024-04-15", totalRevenue: 120, netProfit: 170 },
  { date: "2024-04-16", totalRevenue: 138, netProfit: 190 },
  { date: "2024-04-17", totalRevenue: 446, netProfit: 360 },
  { date: "2024-04-18", totalRevenue: 364, netProfit: 410 },
  { date: "2024-04-19", totalRevenue: 243, netProfit: 180 },
  { date: "2024-04-20", totalRevenue: 89, netProfit: 150 },
  { date: "2024-04-21", totalRevenue: 137, netProfit: 200 },
  { date: "2024-04-22", totalRevenue: 224, netProfit: 170 },
  { date: "2024-04-23", totalRevenue: 138, netProfit: 230 },
  { date: "2024-04-24", totalRevenue: 387, netProfit: 290 },
  { date: "2024-04-25", totalRevenue: 215, netProfit: 250 },
  { date: "2024-04-26", totalRevenue: 75, netProfit: 130 },
  { date: "2024-04-27", totalRevenue: 383, netProfit: 420 },
  { date: "2024-04-28", totalRevenue: 122, netProfit: 180 },
  { date: "2024-04-29", totalRevenue: 315, netProfit: 240 },
  { date: "2024-04-30", totalRevenue: 454, netProfit: 380 },
  { date: "2024-05-01", totalRevenue: 165, netProfit: 220 },
  { date: "2024-05-02", totalRevenue: 293, netProfit: 310 },
  { date: "2024-05-03", totalRevenue: 247, netProfit: 190 },
  { date: "2024-05-04", totalRevenue: 385, netProfit: 420 },
  { date: "2024-05-05", totalRevenue: 481, netProfit: 390 },
  { date: "2024-05-06", totalRevenue: 498, netProfit: 520 },
  { date: "2024-05-07", totalRevenue: 388, netProfit: 300 },
  { date: "2024-05-08", totalRevenue: 149, netProfit: 210 },
  { date: "2024-05-09", totalRevenue: 227, netProfit: 180 },
  { date: "2024-05-10", totalRevenue: 293, netProfit: 330 },
  { date: "2024-05-11", totalRevenue: 335, netProfit: 270 },
  { date: "2024-05-12", totalRevenue: 197, netProfit: 240 },
  { date: "2024-05-13", totalRevenue: 197, netProfit: 160 },
  { date: "2024-05-14", totalRevenue: 448, netProfit: 490 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  totalRevenue: {
    label: "Total Revenue",
    color: "hsl(var(--chart-1))",
  },
  netProfit: {
    label: "Net Profit",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const SaleProfitChart = () => {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("totalRevenue");

  const total = React.useMemo(
    () => ({
      totalRevenue: chartData.reduce((acc, curr) => acc + curr.totalRevenue, 0),
      netProfit: chartData.reduce((acc, curr) => acc + curr.netProfit, 0),
    }),
    []
  );

  const maxValue = React.useMemo(() => {
    const maxRevenue = Math.max(...chartData.map((data) => data.totalRevenue));
    const maxProfit = Math.max(...chartData.map((data) => data.netProfit));
    return Math.max(maxRevenue, maxProfit);
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Sales and Profit Overview</CardTitle>
          <CardDescription>
            Analyzing revenue and profit trends over recent days
          </CardDescription>
        </div>
        <div className="flex">
          {["totalRevenue", "netProfit"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="date"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis domain={[0, maxValue]} tickLine={true} axisLine={true} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SaleProfitChart;
