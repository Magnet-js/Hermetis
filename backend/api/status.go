package api

import (
	"encoding/json"
	"log"
	"net/http"
)

func Status(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
	data := `{
		"status": "operational",
		"categories": [
			{
				"name": "Core Services",
				"services": [
					{
						"name": "API Server",
						"uptime": 99.98,
						"statusHistory": [
							{
								"timestamp": "2023-08-15T00:00:00Z",
								"status": "operational"
							},
							{
								"timestamp": "2023-08-14T00:00:00Z",
								"status": "degraded"
							},
							{
								"timestamp": "2023-08-13T00:00:00Z",
								"status": "operational"
							}
						],
						"incidents": [
							{
								"id": "1",
								"title": "API Latency Increase",
								"description": "We're experiencing higher than normal API latency.",
								"status": "ongoing",
								"date": "2023-08-16T10:00:00Z"
							}
						]
					},
					{
						"name": "Datenbank",
						"uptime": 99.95,
						"statusHistory": [
							{
								"timestamp": "2023-08-15T00:00:00Z",
								"status": "operational"
							},
							{
								"timestamp": "2023-08-14T00:00:00Z",
								"status": "down"
							},
							{
								"timestamp": "2023-08-13T00:00:00Z",
								"status": "degraded"
							}
						],
						"incidents": [
							{
								"id": "2",
								"title": "Geplante Wartung",
								"description": "Wir führen eine geplante Wartung unserer Datenbank durch.",
								"status": "scheduled",
								"date": "2023-08-17T00:00:00Z"
							}
						]
					}
				]
			},
			{
				"name": "Web Services",
				"services": [
					{
						"name": "Webseite",
						"uptime": 99.99,
						"statusHistory": [
							{
								"timestamp": "2023-08-15T00:00:00Z",
								"status": "operational"
							},
							{
								"timestamp": "2023-08-14T00:00:00Z",
								"status": "operational"
							},
							{
								"timestamp": "2023-08-13T00:00:00Z",
								"status": "degraded"
							}
						],
						"incidents": []
					},
					{
						"name": "Content Delivery Network",
						"uptime": 99.97,
						"statusHistory": [
							{
								"timestamp": "2023-08-15T00:00:00Z",
								"status": "down"
							},
							{
								"timestamp": "2023-08-14T00:00:00Z",
								"status": "operational"
							},
							{
								"timestamp": "2023-08-13T00:00:00Z",
								"status": "degraded"
							}
						],
						"incidents": [
							{
								"id": "3",
								"title": "CDN Outage",
								"description": "Our CDN provider experienced a brief outage. This issue has been resolved.",
								"status": "resolved",
								"date": "2023-08-15T12:00:00Z"
							}
						]
					}
				]
			}
		]
	}`

	var parsedData interface{}

	err := json.Unmarshal([]byte(data), &parsedData)
	if err != nil {
		log.Fatalf("Error unmarshaling data: %s", err)
	}

	responseJSON, err := json.MarshalIndent(parsedData, "", "  ")
	if err != nil {
		log.Fatalf("Error converting response to JSON: %s", err)
	}
	w.Write(responseJSON)
}
