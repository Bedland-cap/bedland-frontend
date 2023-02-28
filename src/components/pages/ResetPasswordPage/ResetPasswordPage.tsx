import Image from 'components/atoms/Image/Image';
import DefaultImage from 'assets/Logoresident.svg';
import SectionRow from 'components/templates/SectionRow/SectionRow';
import SetNewPassword from 'components/organisms/SetNewPassword/SetNewPassword';

const ResetPasswordPage = () => (
  <SectionRow>
    <Image src={DefaultImage} alt='' />
    <SetNewPassword />
  </SectionRow>
);
export default ResetPasswordPage;
