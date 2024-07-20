import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export const useNavigator = () => {
  return useNavigation<NavigationProp<ParamListBase, string, undefined>>();
};
