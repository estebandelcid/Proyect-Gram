import styled, { css, keyframes } from 'styled-components';
// blur animation
const fadeInKeyframes = keyframes`
from{
  filter: blur(5px);
  opacity: 0;
}
to{
  filter: blur(0);
  opacity: 1;
}
`;
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;
// rebound animation
const bounceDownKeyFrames = keyframes`
0% {
  top: -100px;
}
25%{
  top: 10px;
}
40%{
  top: -10px;
}
65%{
  top: 10px;
} 
100%{
  top: -20px;
}

`;
export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
animation: ${time}  ${bounceDownKeyFrames} ${type};
`;
// scale Down animation

const scale = keyframes`
from {
  transform: scale(1);
  top: -90px;
  border-radius: 2px;
}
to{
  transform: scale(.66);
  border-radius: 60px;
}
`;
export const scaleDown = ({ time = '0.5s', type = 'ease' } = {}) => css`
animation: ${time} ${scale} ${type};
`;
