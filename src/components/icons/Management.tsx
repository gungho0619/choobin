import { SVGAttributes } from 'react';

export const ManagementIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.4118 7.29412V5.52941C21.4118 3.58017 19.8316 2 17.8824 2H14.3529C12.4037 2 10.8235 3.58017 10.8235 5.52941V7.29412M16.1176 17.8824V24.9412M2 24.9412V28.4706C2 30.4198 3.58017 32 5.52941 32H26.7059C28.6551 32 30.2353 30.4198 30.2353 28.4706V24.9412M5.52941 21.4118H26.7059C28.6551 21.4118 30.2353 19.8316 30.2353 17.8824V10.8235C30.2353 8.87429 28.6551 7.29412 26.7059 7.29412H5.52941C3.58017 7.29412 2 8.87429 2 10.8235V17.8824C2 19.8316 3.58017 21.4118 5.52941 21.4118Z"
        stroke={props.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint_linear" x1="16.1176" y1="2" x2="16.1176" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5297DB"/>
          <stop offset="1" stopColor="#6D62D6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
