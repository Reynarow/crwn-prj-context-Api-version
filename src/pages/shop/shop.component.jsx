import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectiosSnapshotToMap } from '../../firebase/firebase.utils';

import { ShopContext } from '../../providers/shop/shop.provider';



import Spinner from '../../components/spinner/spinner.component';
import PageNotFound from '../../components/page-not-found/PageNotFound.component';




const ShopPage = ({ match, history }) => {
  const { getCollections, fetchingFinished, fetchingStart, isFetching , collections } = useContext(ShopContext)



  useEffect(() => {


    let fetchCollection = async () => {
      fetchingStart()
     
      try {
        const collectionRef = firestore.collection('collections');
        const collectionSnapshot = await collectionRef.get();
        const convertDataToMap = await convertCollectiosSnapshotToMap(collectionSnapshot)
        await getCollections(convertDataToMap)
        fetchingFinished()

      } catch (error) {
        history.push('/')
      alert('Error was happend')
      }

    }

    fetchCollection()


    return () => {
      fetchCollection = null;



    }

  }, [])


  
  

  return (

    <div className='shop-page'>

      {isFetching  && <Spinner />}

      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        {!!!collections  && <Spinner />}
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  )
};

export default ShopPage;
