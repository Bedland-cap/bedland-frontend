import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useContext } from 'react';
import routes from 'App/routing/routes';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useNavigate, useLocation } from 'react-router-dom';
import InputWithLabel from 'components/molecules/InputWithLabel/InputWithLabel';
import Button from 'components/atoms/Button/Button';
import * as Styled from 'components/atoms/ErrorMessage/ErrorMessage.styled';
import { ThemeContext } from 'theme/ThemeContext';
import { useAppDispatch } from 'store/hooks';
import Typography from 'components/atoms/Typography/Typography';
import { User, login } from 'store/reducers/user_slice';
import loginRegexPattern from 'utils/loginRegexPatterns';
import { LoginFormContainer,ResetPasswordLink } from './LoginForm.styled';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
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
      role: location.pathname === routes.homeForNotLoggedInManager ? 'manager' : 'resident',
    };
    dispatch(login(testUser));
    navigate('/dashboard');
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

      <InputWithLabel
        label='Password'
        input='password'
        placeholder='Enter your password'
        type='password'
        register={register}
        regexPattern={loginRegexPattern.password}
      />
      <Styled.ErrorMsg>
        {errors.password || errors.login ? (
          <ErrorMessage>Your login or password is incorrect.</ErrorMessage>
        ) : null}
      </Styled.ErrorMsg>

      <Button
        backgroundColor={palette.secondaryDark}
        textColor='#ffffff'
        type='submit'
        variant='primary'
      >
        Login
      </Button>

      <ResetPasswordLink palette={palette} to='/resetPassword'>
        Forgot your password?
      </ResetPasswordLink>
    </LoginFormContainer>
  );
};

export default LoginForm;
