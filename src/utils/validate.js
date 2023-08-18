import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

export const validateLogin = (email, passWord, setValidationMsg) => {
  const msg = {};
  if (isEmpty(email)) {
    msg.emailLogin = 'Pleas input your Email';
  } else if (!isEmail(email)) {
    msg.emailLogin = 'Email your is incorrect';
  }
  if (isEmpty(passWord)) {
    msg.passWordLogin = 'Pleas input your PassWord';
  }

  setValidationMsg(msg);
  if (Object.keys(msg).length > 0) return false;
  return true;
};
// kiểm tra dữ liệu đăng ký
export const validateRegister = (name, email, passWord, setValidationMsg) => {
  const msg = {};
  if (isEmpty(name)) {
    msg.nameRegister = 'Pleas input your Name';
  }
  if (isEmpty(email)) {
    msg.emailRegister = 'Pleas input your Email';
  } else if (!isEmail(email)) {
    msg.emailRegister = 'Email your is incorrect';
  }
  if (isEmpty(passWord)) {
    msg.passWordRegister = 'Pleas input your PassWord';
  }
  setValidationMsg(msg);
  if (Object.keys(msg).length > 0) return false;
  return true;
};

export const validateForgotPassword = (email, setValidationMsg) => {
  const msg = {};
  if (isEmpty(email)) {
    msg.emailLogin = 'Pleas input your Email';
  } else if (!isEmail(email)) {
    msg.emailLogin = 'Email your is incorrect';
  }

  setValidationMsg(msg);
  if (Object.keys(msg).length > 0) return false;
  return true;
};

export const validateResetPassword = (passWord, setValidationMsg) => {
  const msg = {};
  if (isEmpty(passWord)) {
    msg.passWord = 'Pleas input your PassWord';
  }

  setValidationMsg(msg);
  if (Object.keys(msg).length > 0) return false;
  return true;
};
