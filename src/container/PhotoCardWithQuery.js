import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto';
import { LoadingCard } from '../components/PhotoCard/LoadingPhotoCard';

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id);
  if (loading) return <LoadingCard />;
  if (error) return <p>Error : {error.message}</p>;
  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};

// Deprecated way:
// export const PhotoCardWithQuery = ({ id }) => (
//   <useQuery query={query} variables={{id}}>
//    {
//    ({loading, error, data})=>{
//    const {photo = {} } = data
//    return <PhotoCard {...photo}  />
//   }
//    }
//   </useQuery>
// );
