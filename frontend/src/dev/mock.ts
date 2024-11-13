import { Category, StatusData } from "@/lib/types/statuspage";

export const generateDemoData = (): Category[] => {
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