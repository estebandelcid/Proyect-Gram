import { css, keyframes } from 'styled-components';

const skeletonBackground = (light) => (
  css`
  background: ${!light
            ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
            : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
            background-size: 400% 400%;
            animation: ${skeletonLoading} .7s ease-in-out infinite;
    `
);

const skeletonLoading = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: -135% 0%;
    }
`;

export const skeletonStyle = (light = true) => skeletonBackground(light);

// export const ImgLoading = styled.div`
//   box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
//   height: 100%;
//   object-fit: cover;
//   background-color: #e7e7de;
//   position: absolute;
//   top: 0%;
//   width: 100%;
// `;
// export const BottonLoading = styled.button`
//   margin-top: 10px;
//   padding-top: 8px;
//   display: flex;
//   align-items: center;
//   background-color: #e7e7de;
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
// `;
