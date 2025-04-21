import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="border-l-4 border-primary">
      <CardContent className="pt-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ValueCard;