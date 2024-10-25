import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface HomeCardProps {
  current: number;
  goal: number;
}

const HomeCard: FC<HomeCardProps> = ({ current, goal }) => {
  const progressPercentage = (current / goal) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-[16px] text-gray-500 font-bold mb-0">
            Income
          </CardTitle>
          <p className="text-[36px] font-bold mt-0">$ 50,000</p>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-[16px] text-gray-500 font-bold mb-0">
            Active Clients
          </CardTitle>
          <p className="text-[36px] font-bold mt-0">{current}</p>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-[16px] text-gray-500 font-bold mb-0">
            Agency Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-gray-500">
            <span>Current: {current}</span>
            <span>Goal: {goal}</span>
          </div>
          <Progress value={progressPercentage} />
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeCard;
