import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DownArrow = (props: any) => (
  <Svg
    width={13}
    height={7}
    viewBox="0 0 13 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.39977 0.499723L11.5996 0.499723L6.49969 5.99194L1.39977 0.499723Z"
      fill="#333333"
    />
    <Path
      d="M6.5 4.98444L10.1998 1L2.80016 1L6.5 4.98444ZM6.5 7L0 0L13 0L6.5 7Z"
      fill="#333333"
    />
  </Svg>
);
export default DownArrow;
