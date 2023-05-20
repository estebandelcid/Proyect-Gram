import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';

export const Detail = ({ detailId }) => {
  const params = useParams();
  return (
    <Layout title={`Photo ${params.detailId}`}>
      <PhotoCardWithQuery id={params.detailId} />
    </Layout>
  );
};
