import React from 'react'

import classes from './index.module.scss'

export const ArrowRightIcon: React.FC = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes.arrowRight}
  >
    <path
      d="M12.4267 5.04886L19.9511 12.5244L12.4267 20"
      className="stroke"
      strokeMiterlimit="10"
    />
    <path d="M5 12.5244H19.8534" className="stroke" strokeMiterlimit="10" />
  </svg>
)
