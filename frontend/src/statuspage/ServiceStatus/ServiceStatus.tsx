import React from "react";
import { StatusIndicator } from "./ServiceStatusIdicator"
import { StatusCategories } from "./StatusCategories/StatusCategories";
import { generateDemoData } from "@/dev/mock";

export const ServiceStatus = () => {
    const [categories] = React.useState(generateDemoData);
    const [currentStatus, setCurrentStatus] = React.useState("operational");
    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold ">Status nach Service</h1>
                    <StatusIndicator status={currentStatus} />
                </div>
                <StatusCategories categories={categories} />
            </div>
        </div>
    )
}
