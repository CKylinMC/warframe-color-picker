import React, {CSSProperties} from 'react';
import {useTheme} from "styled-components";

export const Waves = (
  {
    style
  }: {
    style: CSSProperties
  }
) => {
  const theme = useTheme()

  return (
      <svg width="203" height="12" viewBox="0 0 203 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
        <path d="M1.47058 5.78458C1.47058 -0.464205 11.4686 -0.464205 11.4686 5.78458C11.4686 12.0334 21.4667 12.0334 21.4667 5.78458C21.4667 -0.464205 31.4648 -0.464205 31.4648 5.78458C31.4648 12.0334 41.4628 12.0334 41.4628 5.78458C41.4628 -0.464205 51.4609 -0.464205 51.4609 5.78458C51.4609 12.0334 61.459 12.0334 61.459 5.78458C61.459 -0.464205 71.457 -0.464205 71.457 5.78458C71.457 12.0334 81.4551 12.0334 81.4551 5.78458C81.4551 -0.464205 91.4531 -0.464205 91.4531 5.78458C91.4531 12.0334 101.451 12.0334 101.451 5.78458C101.451 -0.464205 111.449 -0.464205 111.449 5.78458C111.449 12.0334 121.447 12.0334 121.447 5.78458C121.447 -0.464205 131.445 -0.464205 131.445 5.78458C131.445 12.0334 141.443 12.0334 141.443 5.78458C141.443 -0.464205 151.442 -0.464205 151.442 5.78458C151.442 12.0334 161.44 12.0334 161.44 5.78458C161.44 -0.464205 171.438 -0.464205 171.438 5.78458C171.438 12.0334 181.436 12.0334 181.436 5.78458C181.436 -0.464205 191.434 -0.464205 191.434 5.78458C191.434 12.0334 201.432 12.0334 201.432 5.78458" stroke={theme.colors.tertiary} strokeWidth="1.24976"/>
      </svg>
  )
}
