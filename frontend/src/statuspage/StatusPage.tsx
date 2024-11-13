import * as React from "react";
import {
  Check,
  AlertTriangle,
  XCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface StatusData {
  timestamp: Date;
  status: "operational" | "degraded" | "down";
}

interface Incident {
  id: string;
  title: string;
  description: string;
  status: "resolved" | "ongoing" | "scheduled";
  date: Date;
}

interface ServiceStatus {
  name: string;
  uptime: number;
  statusHistory: StatusData[];
  incidents: Incident[];
}

interface Category {
  name: string;
  services: ServiceStatus[];
}

// Beispieldaten für die letzten 90 Tage und Vorfälle
const generateDemoData = (): Category[] => {
  const now = new Date();
  const days90 = Array.from({ length: 90 }, (_, i) => {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    return {
      timestamp: date,
      status:
        Math.random() > 0.95
          ? Math.random() > 0.5
            ? "degraded"
            : "down"
          : "operational",
    } as StatusData;
  }).reverse();

  return [
    {
      name: "Core Services",
      services: [
        {
          name: "API Server",
          uptime: 99.98,
          statusHistory: days90,
          incidents: [
            {
              id: "1",
              title: "API Latency Increase",
              description: "We're experiencing higher than normal API latency.",
              status: "ongoing",
              date: new Date(now.getTime() - 2 * 60 * 60 * 1000), // 2 hours ago
            },
          ],
        },
        {
          name: "Datenbank",
          uptime: 99.95,
          statusHistory: days90.map((day) => ({
            ...day,
            status:
              Math.random() > 0.97
                ? Math.random() > 0.5
                  ? "degraded"
                  : "down"
                : "operational",
          })),
          incidents: [
            {
              id: "2",
              title: "Geplante Wartung",
              description:
                "Wir führen eine geplante Wartung unserer Datenbank durch.",
              status: "scheduled",
              date: new Date(now.getTime() + 24 * 60 * 60 * 1000), // In 24 hours
            },
          ],
        },
        {
          name: "Datenbank",
          uptime: 99.95,
          statusHistory: days90.map((day) => ({
            ...day,
            status:
              Math.random() > 0.97
                ? Math.random() > 0.5
                  ? "degraded"
                  : "down"
                : "operational",
          })),
          incidents: [
            {
              id: "2",
              title: "Geplante Wartung",
              description:
                "Wir führen eine geplante Wartung unserer Datenbank durch.",
              status: "scheduled",
              date: new Date(now.getTime() + 24 * 60 * 60 * 1000), // In 24 hours
            },
          ],
        },
        {
          name: "Datenbank",
          uptime: 99.95,
          statusHistory: days90.map((day) => ({
            ...day,
            status:
              Math.random() > 0.97
                ? Math.random() > 0.5
                  ? "degraded"
                  : "down"
                : "operational",
          })),
          incidents: [
            {
              id: "2",
              title: "Geplante Wartung",
              description:
                "Wir führen eine geplante Wartung unserer Datenbank durch.",
              status: "scheduled",
              date: new Date(now.getTime() + 24 * 60 * 60 * 1000), // In 24 hours
            },
          ],
        },
        {
          name: "Datenbank",
          uptime: 99.95,
          statusHistory: days90.map((day) => ({
            ...day,
            status:
              Math.random() > 0.97
                ? Math.random() > 0.5
                  ? "degraded"
                  : "down"
                : "operational",
          })),
          incidents: [
            {
              id: "2",
              title: "Geplante Wartung",
              description:
                "Wir führen eine geplante Wartung unserer Datenbank durch.",
              status: "scheduled",
              date: new Date(now.getTime() + 24 * 60 * 60 * 1000), // In 24 hours
            },
          ],
        },
      ],
    },
    {
      name: "Web Services",
      services: [
        {
          name: "Webseite",
          uptime: 99.99,
          statusHistory: days90.map((day) => ({
            ...day,
            status:
              Math.random() > 0.99
                ? Math.random() > 0.5
                  ? "degraded"
                  : "down"
                : "operational",
          })),
          incidents: [],
        },
        {
          name: "Content Delivery Network",
          uptime: 99.97,
          statusHistory: days90.map((day) => ({
            ...day,
            status:
              Math.random() > 0.98
                ? Math.random() > 0.5
                  ? "degraded"
                  : "down"
                : "operational",
          })),
          incidents: [
            {
              id: "3",
              title: "CDN Outage",
              description:
                "Our CDN provider experienced a brief outage. This issue has been resolved.",
              status: "resolved",
              date: new Date(now.getTime() - 12 * 60 * 60 * 1000), // 12 hours ago
            },
          ],
        },
      ],
    },
  ];
};

const StatusIndicator = ({ status }: { status: string }) => {
  return (
    <div className="flex items-center gap-2">
      {status === "operational" && (
        <>
          <Check className="w-5 h-5 text-emerald-500" />
          <span className="text-emerald-500">Operational</span>
        </>
      )}
      {status === "degraded" && (
        <>
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <span className="text-amber-500">Degraded</span>
        </>
      )}
      {status === "down" && (
        <>
          <XCircle className="w-5 h-5 text-red-500" />
          <span className="text-red-500">Down</span>
        </>
      )}
    </div>
  );
};

const IncidentItem: React.FC<{ incident: Incident }> = ({ incident }) => {
  return (
    <div className="border-b border-gray-700 py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{incident.title}</h3>
        <span
          className={cn(
            "px-2 py-1 rounded text-sm",
            incident.status === "resolved" &&
              "bg-emerald-500/20 text-emerald-300",
            incident.status === "ongoing" && "bg-amber-500/20 text-amber-300",
            incident.status === "scheduled" && "bg-blue-500/20 text-blue-300"
          )}
        >
          {incident.status}
        </span>
      </div>
      <p className="text-sm text-gray-400 mt-1">{incident.description}</p>
      <p className="text-xs text-gray-500 mt-2">
        {incident.date.toLocaleString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
};

const ServiceStatusItem: React.FC<{ service: ServiceStatus }> = ({
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
              {service.statusHistory.map((data, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 h-8 rounded-sm transition-all duration-200",
                    data.status === "operational" && "bg-emerald-500",
                    data.status === "degraded" && "bg-amber-500",
                    data.status === "down" && "bg-red-500"
                  )}
                  title={`${data.timestamp.toLocaleDateString()} - ${
                    data.status
                  }`}
                />
              ))}
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

export const StatusPage = () => {
  const [categories] = React.useState(generateDemoData);
  const [currentStatus, setCurrentStatus] = React.useState("operational");

  // Aktualisiere den Status alle 30 Sekunden
  React.useEffect(() => {
    const interval = setInterval(() => {
      const newStatus =
        Math.random() > 0.95
          ? Math.random() > 0.5
            ? "degraded"
            : "down"
          : "operational";
      setCurrentStatus(newStatus);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <header className="flex justify-between items-center mb-8 bg-emerald-500 p-4">
          <h1 className="text-2xl font-bold">Hermetis</h1>
          <a href="" className="text-white">Dashboard</a>
        </header>
        <div className=" p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Status nach Service</h1>
              <StatusIndicator status={currentStatus} />
            </div>

            {categories.map((category, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
                {category.services.map((service, serviceIndex) => (
                  <ServiceStatusItem key={serviceIndex} service={service} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <footer className="text-center bottom-0 w-full border-t border-gray-700 py-4">
          Powered by Hermetis
        </footer>
      </div>
    </>
  );
};
