import React from 'react'
import classes from './index.module.scss'

const YoutubeIcon: React.FC<{ className?: string; color?: 'dark-gray' | 'white' }> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0716 11.7291C14.9208 11.5386 21.2755 11.5378 24.1286 11.7291C27.2169 11.9368 27.5771 13.7754 27.6001 18.5859C27.5771 23.405 27.2138 25.2358 24.1286 25.4427C21.2755 25.6341 14.9216 25.6333 12.0716 25.4427C8.98326 25.2351 8.62306 23.3964 8.6001 18.5859C8.62306 13.7669 8.98643 11.936 12.0716 11.7291ZM15.7251 15.4756V21.6977L22.0584 18.5812L15.7251 15.4756Z"
      fill="white"
    />
  </svg>
)

export default YoutubeIcon
