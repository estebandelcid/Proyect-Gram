import React from 'react';
import { Layout } from '../components/Layout';
import { ListOfFavs } from '../components/ListOfFavs';
import { LoadingCard } from '../components/PhotoCard/LoadingPhotoCard';
import { useGetFavorites } from '../hooks/useGetFavorites';

export default () => {
  const {data, error, loading} = useGetFavorites()
  if (loading) return <LoadingCard />
  if (error) return 'error'

  return (
      <Layout title='Favorites' showTitle>
        <ListOfFavs favs={data.favs} />
      </Layout>
  );
}

