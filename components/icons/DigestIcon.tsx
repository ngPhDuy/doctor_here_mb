import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const DigestIcon = ({ width = 32, height = 30, color = "white" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 30" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M5.99581 28.9615C5.21036 29.1854 4.385 29.0705 3.87402 28.6403C3.00876 27.9113 2.19606 26.7755 1.71233 25.0829C1.04854 22.7645 1.87487 18.1161 5.75541 17.0045C8.67531 16.1704 9.86661 18.1861 12.8031 17.3462C15.7395 16.5062 17.3221 14.6054 16.7936 12.7658C15.8573 9.49459 10.4672 8.63516 7.99789 4.95999C7.34676 3.98669 7.93852 3.30539 9.38095 2.88784C10.3611 2.60753 11.348 2.15494 12.0828 2.81873C12.8177 3.48252 13.6265 4.24267 14.9307 5.06316C14.9307 5.06316 16.7799 2.00117 19.7144 1.16121C22.6489 0.321258 28.6493 1.46001 30.81 9.01572C32.9708 16.5714 24.5527 22.4394 19.5198 23.8799C10.9781 26.3229 9.55127 21.3328 7.25623 21.9898C5.47899 22.4978 6.12526 24.5836 7.50248 26.1574C8.30934 27.0792 7.62998 28.4934 6.13986 28.9167L5.99581 28.9615Z"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="30.7796"
            height="29.27"
            fill="white"
            transform="translate(0.943359 0.365005)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DigestIcon;
