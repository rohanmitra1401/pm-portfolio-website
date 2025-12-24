"use client";

import { Card, Metric, Text, BadgeDelta, Flex, DeltaType } from "@tremor/react";

interface MetricCardProps {
    title: string;
    metric: string;
    delta?: string;
    deltaType?: DeltaType;
    subtext?: string;
}

export default function MetricCard({
    title,
    metric,
    delta,
    deltaType = "moderateIncrease",
    subtext,
}: MetricCardProps) {
    return (
        <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
            <Flex justifyContent="between" alignItems="center">
                <Text>{title}</Text>
                {delta && <BadgeDelta deltaType={deltaType}>{delta}</BadgeDelta>}
            </Flex>
            <Metric>{metric}</Metric>
            {subtext && <Text className="mt-2">{subtext}</Text>}
        </Card>
    );
}
