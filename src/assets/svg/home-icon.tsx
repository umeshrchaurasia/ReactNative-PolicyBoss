import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
export interface ISvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xlinkHref?: string;
  activeColor?: string;
}
const HomeIcon = (props: ISvgProps) => {
  const {activeColor} = props;
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
      // {...props}
    >
      <G clipPath="url(#clip0_4169_37419)">
        <G filter="url(#filter0_d_4169_37419)">
          <Path
            d="M3.89814 9.31503L3.89877 9.31376C3.99774 9.11589 4.12988 8.96009 4.29907 8.83635L4.2991 8.83638L4.30555 8.83156L10.7231 4.03117C10.8604 3.93215 10.9961 3.86321 11.1308 3.81846C11.2664 3.77336 11.4094 3.75 11.5632 3.75C11.7169 3.75 11.8599 3.77336 11.9956 3.81846C12.1302 3.86321 12.2659 3.93215 12.4032 4.03118L18.8208 8.83156L18.8207 8.83159L18.8272 8.83635C18.9966 8.96018 19.1292 9.1162 19.2289 9.3144C19.3279 9.51255 19.3763 9.71775 19.3763 9.93906V19.547C19.3763 19.9331 19.2474 20.2454 18.9683 20.5245C18.6885 20.8028 18.3744 20.9321 17.9855 20.9321H14.4539V14.2093V13.4593H13.7039H9.42237H8.67237V14.2093V20.9321H5.14079C4.75173 20.9321 4.43808 20.8027 4.15902 20.5244L3.62939 21.0554L4.15901 20.5244C3.87903 20.2452 3.75 19.9328 3.75 19.547V9.93906C3.75 9.71811 3.79858 9.51315 3.89814 9.31503Z"
            stroke={activeColor ? activeColor : '#0000'}
            strokeWidth={1.5}
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_4169_37419">
          <Rect width={24} height={24} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HomeIcon;
