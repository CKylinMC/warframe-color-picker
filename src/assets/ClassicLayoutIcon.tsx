import {useTheme} from "styled-components";

export const ClassicLayoutIcon = () => {
  const {colors} = useTheme()
  return (
    <svg id="svg" width="272" height="272" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className="svg-background" x="21.1805" width="232.986" height="232.986" rx="20" fill={colors.tertiary} style={{transition: "fill 0.5s ease"}}/>
      <rect x="47" y="32" width="62" height="83" rx="5" fill="white"/>
      <rect x="117" y="23" width="57" height="70" rx="5" fill="white"/>
      <rect x="117" y="100" width="57" height="110" rx="5" fill="white"/>
      <rect x="181" y="32" width="43" height="155" rx="5" fill="white"/>
      <rect x="98" y="153" width="12" height="12" rx="5" fill="white"/>
      <rect x="98" y="137" width="12" height="12" rx="5" fill="white"/>
      <rect x="81" y="137" width="13" height="12" rx="5" fill="white"/>
      <rect x="65" y="120" width="45" height="13" rx="5" fill="white"/>
    </svg>
  )
}

