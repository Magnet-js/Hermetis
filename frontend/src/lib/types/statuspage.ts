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
    [x: string]: any;
    name: string;
    services: ServiceStatus[];
}

export type { StatusData, Incident, ServiceStatus, Category };