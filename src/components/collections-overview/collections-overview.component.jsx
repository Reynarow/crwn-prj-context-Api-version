import React, { useContext } from 'react';


import CollectionPreview from '../collection-preview/collection-preview.component';



import './collections-overview.styles.scss';
import { ShopContext } from '../../providers/shop/shop.provider';

const CollectionsOverview = () => {
  const { collections } = useContext(ShopContext)

 
  const arrayCollection = collections => {
    if (collections) {
      let arrayTemp = ['womens', 'mens', 'jackets', 'sneakers', 'hats'];
      return arrayTemp.map(key => collections[key])
    }else{ return []}
  }
  const previewCollection= arrayCollection(collections)


  return (
    <div className='collections-overview'>
      {previewCollection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
};



export default (CollectionsOverview);
