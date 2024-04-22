import { SVGAttributes } from 'react';

export const RefreshIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1V7M1 7H7M1 7L3.64028 4.63067C5.02129 3.25209 6.81296 2.35964 8.74532 2.08779C10.6777 1.81593 12.6461 2.17941 14.3539 3.12343C16.0617 4.06746 17.4164 5.54091 18.2139 7.32177M19 19V13M19 13L13 13M19 13L16.3597 15.3693C14.9787 16.7479 13.187 17.6404 11.2546 17.9122C9.32228 18.1841 7.3539 17.8206 5.64609 16.8766C3.93828 15.9325 2.58355 14.4591 1.78603 12.6782" stroke="url(#paint0_linear_20_78)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_20_78" x1="1" y1="1" x2="19" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5199D9"/>
          <stop offset="1" stopColor="#6E60D2"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
