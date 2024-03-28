export interface User {
  id:                   number;
  shopid:               number;
  username:             string;
  email:                string;
  sex:                  number;
  role:                 string;
  password:             string;
  name:                 string;
  address:              string;
  birthday:             Date | string;
  phone:                number;
  avatar:               string | File;
  filename:             null;
  not_new_user:         number;
  refreshToken:         string;
  passwordResetToken:   string;
  passwordResetExpires: string;
  passwordChangedAt:    null;
  is_active:            number;
  createdAt:            null;
  updatedAt:            null;
  deleteAt:             null;
}
