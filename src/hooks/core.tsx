import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export const useCustomNavigation = () => {
  return useNavigation<NavigationProp<ParamListBase, string, undefined>>();
};
