import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';
import { skeletonStyle } from '../../styles/skeleton';

export const Article = styled.article`
min-height: 200px;
`;

export const ImgWrapped = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  width: 100%;
`;

export const Img = styled.img`
  ${fadeIn({ time: '.5s' })}
  box-shadow: 0 10px 14px rgba(0,0,0,0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 30px;
  width: 100%;
`;

export const ImgLoading = styled.div`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`;
export const ButtonLoading = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 8px;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`;
