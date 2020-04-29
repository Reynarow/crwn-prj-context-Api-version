import React , {useContext} from 'react';


import { ShopContext } from '../../providers/shop/shop.provider';
import Collection from './collection-page.component'



import './collection.styles.scss';
import PageNotFound from '../../components/page-not-found/PageNotFound.component';


const CollectionPage = ({ match }) => {
  const {collections} = useContext(ShopContext)  
    const collection = collections[ match.params.collectionId]
    
    
  
  return (
  
     <div className='collection-page'>
      {collection? <Collection collection={collection}/>
      : <PageNotFound/>  
    }
      
    </div>)
  ;
};


export default (CollectionPage);
