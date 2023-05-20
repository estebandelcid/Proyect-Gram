import styled from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';
import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
  width: 100%;
  height: 50px;
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  background-color: rgba(236, 240, 241, 0.8);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #515151;

  &[aria-current] {
    color: #000;
    font-weight: bold;
    &::after {
      ${fadeIn({ time: '0.5s' })}
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 32px;
      line-height: 30px;
    }
  }
`;
