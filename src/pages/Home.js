import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';


 const HomePage = () => {
  const params = useParams();
  return (
    <Layout title={"Home"}>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
