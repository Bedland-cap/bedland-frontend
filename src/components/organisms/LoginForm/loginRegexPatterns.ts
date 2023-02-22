import { LoginRegexProps } from 'components/atoms/Input/Input';

const loginRegexPattern: LoginRegexProps = {
  login: {
    pattern: /^[a-zA-Z]+$/,
    required: true,
    maxLength: 36,
    minLength: 8,
  },
  password: {
    pattern: /^[a-zA-Z]+$/,
    required: true,
    maxLength: 36,
    minLength: 8,
  },
};

export default loginRegexPattern;
// ^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$ <- regex for password that should work.
// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
