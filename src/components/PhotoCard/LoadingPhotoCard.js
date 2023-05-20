import React from 'react';
import { ImgWrapped, ImgLoading, ButtonLoading, Article } from './styles';

export function LoadingCard () {
  return (
    <Article>
      <>
        <ImgWrapped>
          <ImgLoading />
        </ImgWrapped>
        <ButtonLoading />

      </>
    </Article>
  );
}
