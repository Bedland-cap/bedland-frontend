import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { logout } from 'store/reducers/user/user_slice';
import AccountInfo from 'components/atoms/AccountInfo/AccountInfo';
import routes from 'App/routing/routes';
import Avatar from 'assets/img/Avatar.svg';
import IconButton from 'components/atoms/IconButton/IconButton';
import ProfileImage from 'components/atoms/ProfileImage/ProfileImage';
import * as Styled from './AccountDropdown.styled';
import DropdownItem from '../../molecules/DropdownItem/DropdownItem';

const AccountDropdown = () => {
  const dispatch = useAppDispatch();
  const userRole = useAppSelector((state) => state.user.role);
  const userLogin = useAppSelector((state) => state.user.login);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const onClickOutside = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = (): void => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <Styled.DropdownBox ref={ref}>
      <Styled.UserInfoBox onClick={handleDropdown} data-testid='dropdown'>
        <ProfileImage size={2} src={Avatar} />
        <AccountInfo userRole={userRole} userLogin={userLogin ?? ''} />
        <IconButton icon='more' color='text' size={20} onClick={handleDropdown} />
      </Styled.UserInfoBox>

      {isDropdownOpen ? (
        <Styled.DropdownMenu data-testid='dropdown-open'>
          <DropdownItem
            linkRoute={routes.account}
            iconName='user'
            label='My account'
            color='inputGrey'
          />
          <DropdownItem
            linkRoute={routes.settings}
            iconName='settings'
            label='Settings'
            color='inputGrey'
          />
          <Styled.DropdownBreak />
          <DropdownItem
            linkRoute={
              userRole === 'manager' ? routes.homeForNotLoggedInManager : routes.homeForNotLoggedIn
            }
            iconName='logout'
            label='Log out'
            color='primaryDark'
            onClick={handleLogout}
          />
        </Styled.DropdownMenu>
      ) : null}
    </Styled.DropdownBox>
  );
};

export default AccountDropdown;
