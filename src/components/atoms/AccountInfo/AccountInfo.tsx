import { UserRoles } from 'store/reducers/user/user_slice';
import Typography from '../Typography/Typography';

const AccountInfo = ({ userRole, userLogin }: { userRole: UserRoles; userLogin: string }) => (
  <div>
    <Typography variant='header5' color='text'>
      {userLogin ?? userLogin}
    </Typography>
    <Typography variant='subHeader' color='inputGrey'>
      {userRole}
    </Typography>
  </div>
);
export default AccountInfo;
