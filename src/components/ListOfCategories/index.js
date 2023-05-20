import React, { useEffect,  } from 'react';
import { Category, CategorySkeleton } from '../Category';
import { Item, List, SkeletonItem } from './styles';
import { useCategoriesData } from '../../hooks/useCategoriesData'

 const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = React.useState(false);

  // for fixed renderlist
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 199;

      showFixed != newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <SkeletonItem key='loading'>
          <CategorySkeleton />
        </SkeletonItem>
      ) : (

        // Real Data
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent) 
