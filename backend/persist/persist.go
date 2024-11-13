package persist

import (
	"backend/persist/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

var db *gorm.DB

func InitDB(dbUrl string) {
	var err error
	db, err = gorm.Open(postgres.Open(dbUrl), &gorm.Config{})
	if err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}
	log.Println("Database connection established.")

	migrateUserTable()

	log.Println("Database schemes migrated.")
}

func migrateUserTable() {
	err := db.AutoMigrate(&models.AdminDbo{})
	if err != nil {
		log.Fatalf("failed to migrate user table: %v", err)
	}
}
