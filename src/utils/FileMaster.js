import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export const logo = require('../assets/common/logo.png');
export const banner = require('../assets/common/banner.png');

export const User = props => {
  return <Feather name="user" {...props} />;
};
export const RightArrow = props => {
  return <Feather name="chevrons-right" {...props} />;
};
export const Menu = props => {
  return <Feather name="menu" {...props} />;
};
export const Play = props => {
  return <Ionicons name="play" {...props} />;
};
export const Refresh = props => {
  return <Ionicons name="refresh" {...props} />;
};
export const Spread = props => {
  return <Entypo name="dots-three-horizontal" {...props} />;
};
