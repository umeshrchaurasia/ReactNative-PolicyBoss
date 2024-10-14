import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
const AddBtnIcon = (props:any) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G opacity={0.5}>
      <Rect width={20} height={20} rx={10} fill="#707070" />
      <Path
        d="M4.65 10.4375V10.5375H4.75H9.4625V15.25V15.35H9.5625H10.4375H10.5375V15.25V10.5375H15.25H15.35V10.4375V9.5625V9.4625H15.25H10.5375V4.75V4.65H10.4375H9.5625H9.4625V4.75V9.4625H4.75H4.65V9.5625V10.4375Z"
        fill="white"
        stroke="white"
        strokeWidth={0.2}
      />
    </G>
  </Svg>
);
export default AddBtnIcon;
