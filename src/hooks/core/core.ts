import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export const useLFNavigation = () => {
  return useNavigation<NavigationProp<ParamListBase, string, undefined>>();
};

export const useLFNavigationParams = () => {
  const route = useRoute();
  return route.params;
};
