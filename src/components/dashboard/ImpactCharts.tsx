"use client";

import { Card, Title, LineChart, DonutChart, Text } from "@tremor/react";

const growthData = [
    {
        year: "2019",
        "Active Users (M)": 1.2,
        role: "Airtel Business",
    },
    {
        year: "2020",
        "Active Users (M)": 2.5,
        role: "Airtel Business",
    },
    {
        year: "2021",
        "Active Users (M)": 15,
        role: "PhonePe (Indus)",
    },
    {
        year: "2022",
        "Active Users (M)": 45,
        role: "PhonePe (Indus)",
    },
    {
        year: "2023",
        "Active Users (M)": 230,
        role: "PhonePe (Pincode)",
    },
];

const sectorData = [
    {
        name: "B2C (Consumer Apps)",
        value: 70,
    },
    {
        name: "B2B (Enterprise)",
        value: 30,
    },
];

const valueFormatter = (number: number) =>
    `${new Intl.NumberFormat("us").format(number).toString()}M`;

export function CareerGrowthChart() {
    return (
        <Card>
            <Title>Users Managed Over Time</Title>
            <Text>Exponential growth from B2B to high-scale B2C products.</Text>
            <LineChart
                className="mt-6"
                data={growthData}
                index="year"
                categories={["Active Users (M)"]}
                colors={["blue"]}
                valueFormatter={valueFormatter}
                yAxisWidth={40}
                showAnimation={true}
            />
        </Card>
    );
}

export function SectorSplitChart() {
    return (
        <Card className="max-w-lg">
            <Title>Experience by Sector</Title>
            <DonutChart
                className="mt-6"
                data={sectorData}
                category="value"
                index="name"
                valueFormatter={(number) => `${number}%`}
                colors={["blue", "cyan"]}
                showAnimation={true}
            />
        </Card>
    );
}
