import { StatusData } from "@/lib/types/statuspage";
import { cn, formatDateTime } from "@/lib/utils";

type Props = {
  statusHistory: StatusData[];
};
export const StatusHistory = (props: Props) => {
  const { statusHistory } = props;
  return statusHistory.map((data, i) => (
    <div
      key={i}
      className={cn(
        "flex-1 h-8 rounded-sm transition-all duration-200",
        data.status === "operational" && "bg-emerald-500",
        data.status === "degraded" && "bg-amber-500",
        data.status === "down" && "bg-red-500"
      )}
      title={`${formatDateTime(data.timestamp)} - ${data.status}`}
    />
  ));
};
