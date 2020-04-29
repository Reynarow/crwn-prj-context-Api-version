import React , {useContext} from 'react';


import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import DirectoryItems from '../../contexts/Directory/directory.context';

const Directory = () => {
  const sections = useContext(DirectoryItems)

  return(<div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
  );
    }


export default (Directory);
