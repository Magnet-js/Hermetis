import { Check, AlertTriangle, XCircle } from "lucide-react";

export const StatusIndicator = ({ status }: { status: string }) => {
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
