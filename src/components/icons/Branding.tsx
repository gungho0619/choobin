import { SVGAttributes } from 'react';

export const BrandingIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17 28.6667C10.5567 28.6667 5.33333 23.4433 5.33333 17C5.33333 13.7355 6.67411 10.7842 8.83503 8.66667M17 5.33333C23.4433 5.33333 28.6667 10.5567 28.6667 17C28.6667 20.2645 27.3259 23.2158 25.165 25.3333M17 2V17V32M2 17L32 17"
        stroke={props.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint_linear" x1="17" y1="2" x2="17" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5297DB"/>
          <stop offset="1" stopColor="#6D62D6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
