export interface ScreenChooseTemporaryI {
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

// It's a temporary interface only to pass the function to change the screen. In router branch it will be not there
