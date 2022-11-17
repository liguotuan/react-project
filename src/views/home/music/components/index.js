import { useState } from 'react';
import { MUSIC_INDEX_MENU } from '../util/menu.dict';
export default function Index(props) {
  const music_index_sprite = require('../../../../assets/music-index.png');
  const childMenuClass = 'tw-w-[120px] tw-h-[25px] hover:tw-text-[#31c27c] tw-text-center tw-font-medium tw-cursor-pointer';

  const [ activeMenu, setActiveMenu ] = useState('recommend')


  return (
    <div className="tw-w-full tw-bg-eee">
      <div className="tw-w-[196px] tw-h-[40px] tw-mt-[30px] tw-mb-[40px] tw-mx-auto " style={ { "backgroundImage": `url(${music_index_sprite})` } }></div>
      <div className="tw-flex tw-justify-center">
        { MUSIC_INDEX_MENU.map((item, index) => {
          return (
          <div onClick={() => changeMenu(item.value) }
            className={ `${childMenuClass} ${ item.value === activeMenu ? 'tw-text-[#31c27c]' : '' }` }
            key={ item.value + index }>
              { item.label }
            </div>
          )
        }) }
      </div>

      <>
        
      </>
    </div>
  )

  function changeMenu(value) {
    setActiveMenu(value);
  }
}