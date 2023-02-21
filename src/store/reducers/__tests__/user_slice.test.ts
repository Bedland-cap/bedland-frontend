import { login, logout, User, userReducer } from '../user_slice';

const initialStateLogout: User = {
  loggedIn: true,
  userId: 'fakeID',
  login: 'fakeLogin',
  token: 'fakeToken',
  status: 'yesIAm',
  error: undefined,
};

const initialStateLogin: User = {
  loggedIn: undefined,
  userId: undefined,
  login: undefined,
  token: undefined,
  status: undefined,
  error: undefined,
};

describe('userSlice', () => {
  it('should reset user data after logout', () => {
    const action = logout();
    const newState = userReducer(initialStateLogout, action);

    expect(newState.loggedIn).toEqual(false);
    expect(newState.login).toBeUndefined();
    expect(newState.userId).toBeUndefined();
    expect(newState.token).toBeUndefined();
  });

  /* In case we will not make a extra reducer */
  it('should set user data after login', () => {
    const action = login(initialStateLogout);
    const newState = userReducer(initialStateLogin, action);

    expect(newState.loggedIn).toEqual(true);
    expect(newState.login).toBe('fakeLogin');
    expect(newState.userId).toBe('fakeID');
    expect(newState.token).toBe('fakeToken');
  });
});
