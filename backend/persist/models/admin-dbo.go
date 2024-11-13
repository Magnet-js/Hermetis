package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
	"time"
)

const adminTableName = "admins"

type AdminDbo struct {
	gorm.Model
	ID           uuid.UUID  `gorm:"type:uuid;primaryKey;default:gen_random_uuid()" json:"id"`
	Email        string     `gorm:"type:varchar(100);unique;not null" json:"email"`
	PasswordHash string     `gorm:"type:varchar(255);not null" json:"-"`
	CreatedAt    *time.Time `gorm:"autoCreateTime" json:"created_at,omitempty"`
}

func (AdminDbo) TableName() string {
	return adminTableName
}
