import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useQuery } from '@apollo/client';
import { GET_PHOTOS } from '../../hoc/GET_PHOTOS';
import { LoadingCard } from '../PhotoCard/LoadingPhotoCard';

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } });
  if (loading) return <LoadingCard />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  );
};

// Second option similar of the class
// import React from "react";
// import { gql } from "@apollo/client";
// import { graphql } from "@apollo/client/react/hoc";
// import { PhotoCard } from "../PhotoCard";

// const withPhotos = graphql(gql`
//   query getPhotos {
//     photos {
//       id
//       categoryId
//       src
//       likes
//       userId
//       liked
//     }
//   }
// `);

// const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
//   return (
//     <ul>
//       {photos.map(photo =>
//         <PhotoCard key={photos.id} {...photo} />
//       )}
//     </ul>
//   );
// };

// // Higer order component

// export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
