import { Incident } from "@/lib/types/statuspage";
import { cn } from "@/lib/utils";

export const IncidentItem: React.FC<{ incident: Incident }> = ({ incident }) => {
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
