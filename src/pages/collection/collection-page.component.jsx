import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';


const Collection = ({ collection }) => {
    const { title, items } = collection;
   return (
    
    <div>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {items.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>)
}

export default Collection;