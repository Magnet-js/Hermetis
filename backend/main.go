package main

import (
	"backend/api"
	"backend/persist"
	"fmt"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
)

func main() {
	fmt.Println("Service starting...")
	dbUrl := createDataBaseUrl()
	persist.InitDB(dbUrl)

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders: []string{"authorization", "Content-Type", "X-Custom-Header"},
		Debug:          true,
	})

	mux := http.NewServeMux()

	mux.HandleFunc("/api/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "API endpoint hit")
	})

	mux.HandleFunc("/api/status", api.Status)

	corsHandler := c.Handler(mux)
	log.Fatal(http.ListenAndServe(":8080", corsHandler))

}

func createDataBaseUrl() string {
	dbUser := os.Getenv("POSTGRES_USER")
	dbPassword := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DB")
	dbPort := os.Getenv("POSTGRES_PORT_HOST")
	dbHost := os.Getenv("DB_HOST_HOST")

	if os.Getenv("DOCKER_ENV") == "true" {
		dbPort = os.Getenv("POSTGRES_PORT_CONTAINER")
		dbHost = os.Getenv("DB_HOST_CONTAINER")
	}
	return fmt.Sprintf("postgres://%s:%s@%s:%s/%s", dbUser, dbPassword, dbHost, dbPort, dbName)
}
