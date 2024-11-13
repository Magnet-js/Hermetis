package api

import (
	"fmt"
	"net/http"
)

func Status(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "API endpoint hit")
}
