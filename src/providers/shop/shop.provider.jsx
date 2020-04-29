import React, {useState,createContext,} from 'react';



export const ShopContext = createContext({
    collections: null,
    isFetching: false,
    getCollections: () =>{},
    fetchingStart: () =>{},
    fetchingFinished: () =>{}
})


const ShopProvider = ({children}) =>{
    
    const [collections, setCollections] = useState(null)
    const [isFetching , setIsFetching] = useState(false)
    const getCollections= (collection) => setCollections(collection) 
    const fetchingStart = () => setIsFetching(true)
    const fetchingFinished = () => setIsFetching(false)

    return(
        <ShopContext.Provider value={{
            collections,
            getCollections,
            fetchingStart,
            fetchingFinished,
            isFetching
        }}>
            {children}
        </ShopContext.Provider>
    )

}

export default ShopProvider;