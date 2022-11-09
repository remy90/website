import React from 'react'
import classes from './index.module.scss'

const FacebookIcon: React.FC<{ className?: string; color?: 'dark-gray' | 'white' }> = ({
  className,
  color = 'dark-gray',
}) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.1001 35.5859C27.7651 35.5859 35.6001 27.7509 35.6001 18.0859C35.6001 8.42095 27.7651 0.585938 18.1001 0.585938C8.43511 0.585938 0.600098 8.42095 0.600098 18.0859C0.600098 27.7509 8.43511 35.5859 18.1001 35.5859Z"
      className={classes[color]}
    />
    <path
      d="M16.1001 15.2526H13.6001V18.5859H16.1001V28.5859H20.2668V18.5859H23.3018L23.6001 15.2526H20.2668V13.8634C20.2668 13.0676 20.4268 12.7526 21.1959 12.7526H23.6001V8.58594H20.4268C17.4301 8.58594 16.1001 9.9051 16.1001 12.4318V15.2526Z"
      fill="white"
    />
  </svg>
)

export default FacebookIcon
