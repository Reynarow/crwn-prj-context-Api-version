import { createContext} from 'react';
import SHOP_DATA from './shop.data';



const collectionContext = createContext(SHOP_DATA)


export default collectionContext;