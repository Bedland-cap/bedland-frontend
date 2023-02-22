import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useContext } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useNavigate, Link } from 'react-router-dom';
import InputWithLabel from 'components/molecules/InputWithLabel/InputWithLabel';
import Button from 'components/atoms/Button/Button';
import { ThemeContext } from 'theme/ThemeContext';
import AlertIcon from 'assets/AlertIcon.svg';
import Typography from 'components/atoms/Typography/Typography';
import { useAppDispatch } from 'store/hooks';
import { login, User } from 'store/reducers/user_slice';
import LoginFormContainer from './LoginForm.styled';
import loginRegexPattern from './loginRegexPatterns';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { palette } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    const testUser: Omit<User, 'loggedIn'> = {
      userId: '122',
      login: data.login,
      status: 'success',
    };
    dispatch(login(testUser));
    navigate('/');
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='sectionTitle' color='light' style={{ textAlign: 'center' }}>
        Login
      </Typography>
      <InputWithLabel
        label='Login'
        input='login'
        placeholder='Enter your login'
        type='text'
        register={register}
        regexPattern={loginRegexPattern.login}
      />
      <div>
        <InputWithLabel
          label='Password'
          input='password'
          placeholder='Enter your password'
          type='password'
          register={register}
          regexPattern={loginRegexPattern.password}
        />

        {errors.password || errors.login ? (
          <ErrorMessage>
            <img src={AlertIcon} alt='' />
            <div>
              Login or password are incorrect, please try again or&nbsp;
              <Link to='/#' style={{ color: 'red' }}>
                reset your password
              </Link>
            </div>
          </ErrorMessage>
        ) : null}
      </div>
      <Button
        backgroundColor={palette.secondaryDark}
        textColor='#ffffff'
        type='submit'
        variant='primary'
      >
        Login
      </Button>
    </LoginFormContainer>
  );
};

export default LoginForm;
