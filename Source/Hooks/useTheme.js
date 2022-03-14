import {useSelector} from 'react-redux';

export const useTheme = () => {
  const darkMode = useSelector(state => state.theme.darkMode);
  return darkMode;
};
