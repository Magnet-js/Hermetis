import { Suspense } from "react";
import { StatusIndicator } from "./ServiceStatusIdicator";
import { StatusCategories } from "./StatusCategories/StatusCategories";
import { fetchStatus } from "@/lib/api/queries/accessQuery";

export const ServiceStatus = () => {
  const { data, error, isLoading } = fetchStatus();
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <Suspense fallback={<div>Loading...</div>}>
        {data && (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold ">Status nach Service</h1>
              <StatusIndicator status={data.status} />
            </div>
            <StatusCategories categories={data.categories} />
          </div>
        )}
      </Suspense>
    </div>
  );
};
