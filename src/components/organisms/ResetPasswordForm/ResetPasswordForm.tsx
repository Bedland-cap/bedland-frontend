import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useContext } from 'react';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import InputWithLabel from 'components/molecules/InputWithLabel/InputWithLabel';
import Button from 'components/atoms/Button/Button';
import { ThemeContext } from 'theme/ThemeContext';
import AlertIcon from 'assets/AlertIcon.svg';
import { RegisterOptions } from 'components/atoms/Input/Input.types';
import ResetPasswordFormContainer from './ResetPasswordForm.styled';
import { errorMessageHandler, watcher } from './ResetPasswordForm.utils';

const ResetPasswordForm = () => {
  const { palette } = useContext(ThemeContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const enteredPasswordWatch = watch('password', '');

  const errorConditionWrongRules = Boolean(
    errors.password || errors.confirmPassword,
  );

  let errorConditionIfPasswordsMatchUp = false;

  const whichErrorMessageCondition = Boolean(
    errors.password || (errorConditionIfPasswordsMatchUp && errors.password),
  );

  const resetPasswordRegOptions: RegisterOptions = {
    validate: (value) => {
      errorConditionIfPasswordsMatchUp = watcher(enteredPasswordWatch, value);
      return errorConditionIfPasswordsMatchUp;
    },
  };

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(data); // logic with fetch to the server should be here
    navigate('/');
  };

  return (
    <ResetPasswordFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputWithLabel
        label='Your new password'
        input='password'
        placeholder='Enter your new password'
        type='password'
        register={register}
      />
      <div>
        <InputWithLabel
          label='Confirm the password'
          input='confirmPassword'
          placeholder='Confirm the password'
          type='password'
          register={register}
          registerOptions={resetPasswordRegOptions}
        />

        {errorConditionWrongRules ? (
          <ErrorMessage>
            <img
              src={AlertIcon}
              alt={errorMessageHandler(whichErrorMessageCondition)}
            />
            <div>{errorMessageHandler(whichErrorMessageCondition)}</div>
          </ErrorMessage>
        ) : null}
      </div>

      <Button
        backgroundColor={palette.secondaryDark}
        textColor={palette.light}
        type='submit'
        variant='primary'
      >
        Reset my password
      </Button>
    </ResetPasswordFormContainer>
  );
};

export default ResetPasswordForm;
