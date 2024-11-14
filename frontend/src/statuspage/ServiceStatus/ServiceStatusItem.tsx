import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronUp, ChevronDown } from "lucide-react";
import React from "react";
import { StatusIndicator } from "./ServiceStatusIdicator";
import { ServiceStatus } from "@/lib/types/statuspage";
import { IncidentItem } from "./IncidentItem";
import { StatusHistory } from "./StatusHistory/StatusHistory";

export const ServiceStatusItem: React.FC<{ service: ServiceStatus }> = ({
  service,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between p-4 bg-gray-800 hover:bg-gray-700"
        >
          <div className="flex items-center gap-4">
            <StatusIndicator
              status={
                service.statusHistory[service.statusHistory.length - 1].status
              }
            />
            <span className="text-lg font-semibold">{service.name}</span>
          </div>
          {isOpen ? (
            <ChevronUp className="h-6 w-6" />
          ) : (
            <ChevronDown className="h-6 w-6" />
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 bg-gray-800 rounded-b-lg">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-emerald-500">{service.uptime}% Uptime</span>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex gap-0.5">
              <StatusHistory statusHistory={service.statusHistory} />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>90 Tage</span>
              <span>Heute</span>
            </div>
          </div>
        </div>
        {service.incidents.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Vorfälle & Wartungen</h3>
            {service.incidents.map((incident) => (
              <IncidentItem key={incident.id} incident={incident} />
            ))}
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};
