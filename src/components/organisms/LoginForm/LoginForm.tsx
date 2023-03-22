import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from 'App/routing/routes';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import InputWithLabel from 'components/molecules/InputWithLabel/InputWithLabel';
import Button from 'components/atoms/Button/Button';
import * as Styled from 'components/atoms/ErrorMessage/ErrorMessage.styled';
import { ThemeContext } from 'theme/ThemeContext';
import Typography from 'components/atoms/Typography/Typography';
import loginRegexPattern from 'utils/loginRegexPatterns';
import { LoginRequest, useLoginAndGetUserMutation } from 'services/user/userApi';
import { LoginFormContainer, ResetPasswordLink } from './LoginForm.styled';

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { palette } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login] = useLoginAndGetUserMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (formData: FieldValues) => {
    const currentUser: LoginRequest = {
      login: formData.login,
      role: location.pathname === routes.homeForNotLoggedInManager ? 'manager' : 'resident',
      password: formData.password,
    };

    try {
      const data = await login(currentUser);
      if (data) {
        navigate(routes.homeForLoggedIn);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
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

      <ResetPasswordLink palette={palette} to={routes.resetPassword}>
        Forgot your password?
      </ResetPasswordLink>
    </LoginFormContainer>
  );
};

export default LoginForm;
