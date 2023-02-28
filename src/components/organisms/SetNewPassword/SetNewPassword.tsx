import { useContext } from 'react';

import RulesDescription from 'components/molecules/PasswordRulesDescription/RulesDescription';
import ResetPasswordForm from 'components/organisms/ResetPasswordForm/ResetPasswordForm';
import { ThemeContext } from 'theme/ThemeContext';
import SetNewPasswordContainer, {
  ResPassCenteredHeading,
} from './SetNewPassword.styled';

const SetNewPassword = () => {
  const { palette } = useContext(ThemeContext);

  return (
    <SetNewPasswordContainer palette={palette}>
      <ResPassCenteredHeading>Reset your password</ResPassCenteredHeading>
      <RulesDescription />
      <ResetPasswordForm />
    </SetNewPasswordContainer>
  );
};
export default SetNewPassword;
