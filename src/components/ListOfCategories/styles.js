import styled, { css } from 'styled-components';
import { fadeIn, bounceDown, scaleDown } from '../../styles/animation';

export const List = styled.ul`
  z-index: 1;
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 15px;
  ::-webkit-scrollbar {
    display: none;
  }

  ${props => props.fixed && css`
  ${scaleDown()}
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 10px auto;
    max-width: 400px;
    padding: 7px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(0.66);
    z-index: 1;
  `}
`;
export const Item = styled.li`
padding: 0 8px;

`;
export const SkeletonItem = styled.li`
padding: 0;


`;
