import React from 'react';
import { Link, Image, SkeletonContainer, ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg';

export const Category = ({ cover = { DEFAULT_IMAGE }, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);

export const CategorySkeleton = (props) => {
  return (
    <SkeletonContainer>
      <ContainerCategorySkeleton>
        <CategoryImage light={props.light} />
        <CategoryTitle light={props.light} />
      </ContainerCategorySkeleton>

      <ContainerCategorySkeleton>
        <CategoryImage light={props.light} />
        <CategoryTitle light={props.light} />
      </ContainerCategorySkeleton>

      <ContainerCategorySkeleton>
        <CategoryImage light={props.light} />
        <CategoryTitle light={props.light} />
      </ContainerCategorySkeleton>

      <ContainerCategorySkeleton>
        <CategoryImage light={props.light} />
        <CategoryTitle light={props.light} />
      </ContainerCategorySkeleton>

      <ContainerCategorySkeleton>
        <CategoryImage light={props.light} />
        <CategoryTitle light={props.light} />
      </ContainerCategorySkeleton>

    </SkeletonContainer>
  );
};
