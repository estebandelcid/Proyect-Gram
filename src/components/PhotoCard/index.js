import React, { useRef, useEffect } from 'react';
import { Article, Img, ImgLoading, ImgWrapped } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { LoadingCard } from './LoadingPhotoCard';
import { FavButton } from '../FavButton';
import { useMutationToogleLike } from '../../hooks/useMutationToogleLike';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  const { mutation } = useMutationToogleLike();

  const handleFavClick = () => {
     mutation({ variables: { input: { id } } });
  };
  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapped>
              <LoadingCard />
              <Img src={src} />
            </ImgWrapped>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  },
};
