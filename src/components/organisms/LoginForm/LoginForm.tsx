import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useContext } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import InputWithLabel from 'components/molecules/InputWithLabel/InputWithLabel';
import Button from 'components/atoms/Button/Button';
import { ThemeContext } from 'theme/ThemeContext';
import AlertIcon from 'assets/AlertIcon.svg';
import LoginFormContainer, { ResetPasswordLink } from './LoginForm.styled';

const LoginForm = () => {
  const navigate = useNavigate();
  const { palette } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(data); // logic with fetch to the server should be here
    navigate('/dashboard');
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{ color: 'white' }}>Login</h1>
      <InputWithLabel
        label='Login'
        input='login'
        placeholder='Enter your login'
        type='text'
        register={register}
      />
      <div>
        <InputWithLabel
          label='Password'
          input='password'
          placeholder='Enter your password'
          type='password'
          register={register}
        />

        {errors.password || errors.login ? (
          <ErrorMessage>
            <img src={AlertIcon} alt='' />
            Your login or password is incorrect.
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

      <ResetPasswordLink palette={palette} to='/resetPassword'>
        Forgot your password?
      </ResetPasswordLink>
    </LoginFormContainer>
  );
};

export default LoginForm;
