package persist

import (
	"gorm.io/gorm"
)

type AdminDao struct {
	db *gorm.DB
}
