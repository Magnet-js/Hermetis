package services

import (
	"backend/persist"
)

type AdminService struct {
	dao *persist.AdminDao
}

func NewUAdminService(dao *persist.AdminDao) *AdminService {
	return &AdminService{dao: dao}
}

//func (s *AdminService) createAdmin(email string, password string) (*models.Admin, error) {
//	id, err := uuid.NewUUID()
//	if err != nil {
//		return nil, fmt.Errorf("an error creating uuid for new user with name %s %s and email %s occured. Reason was %w", email, err)
//	}
//	user := &models.Admin{Email: email, Password: password, ID: id}
//	if err := s.dao.CreateAdmin(user); err != nil {
//		return nil, fmt.Errorf("could not register user: %w", err)
//	}
//	return user, nil
//}
