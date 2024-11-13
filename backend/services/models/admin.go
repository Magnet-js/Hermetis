package models

import (
	"github.com/google/uuid"
	"time"
)

type Admin struct {
	ID        uuid.UUID  `json:"id"`
	Email     string     `json:"email"`
	Password  string     `json:"password"`
	CreatedAt *time.Time `json:"createdAt"`
}
