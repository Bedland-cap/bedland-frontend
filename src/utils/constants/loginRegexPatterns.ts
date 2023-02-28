type TRegister = {
  pattern?: RegExp;
  required: boolean;
  maxLength?: number;
  minLength?: number;
};

const loginRegexPattern: { [key: string]: TRegister } = {
  login: {
    pattern: /^[a-zA-Z]+$/,
    required: true,
    maxLength: 36,
    minLength: 8,
  },
  password: {
    // eslint-disable-next-line prefer-regex-literals
    pattern:
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),<.>/?;:'"]).{8,24}$/,
    required: true,
    maxLength: 36,
    minLength: 8,
  },
  confirmPassword: {
    required: true,
  },
};

export default loginRegexPattern;
// ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$ <- regex for password that should work.
// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
