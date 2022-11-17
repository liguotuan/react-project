import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { MENU } from './util/menu.dict';

export default function Music(prop) {
  let navigate = useNavigate();

  function dictMap() {
    let dict = new Map([
      ['看看你的', '看看你的啊'],
      ['看看我的', 'wode'],
      ['看看她的', 'wode'],
      ['看看他的', 'wode'],
    ]);
    console.log(dict.get('看看你的'));
  }

  useEffect(() => {
    dictMap();
  }, [])
  let [ activeMenu, setActiveMenu ] = useState('index');
  let baseMenuClass = 'tw-flex tw-items-center tw-w-[100px] tw-text-center tw-font-medium tw-h-[50px] tw-cursor-pointer hover:tw-text-[#31c27c]';

  return (
    <div className="tw-flex tw-justify-center tw-flex-col tw-items-center">
      <div className="tw-flex tw-justify-center tw-w-3/5">
        { MENU.map((item, index) => {
          return <div key={`menu_${index}`} 
                    onClick={() => changeMenu(item.value) } 
                    className={ `${baseMenuClass} ${activeMenu === item.value ?  'tw-text-[#31c27c]' : ''}` }>
                    { item.label }
                  </div>
        }) }
      </div>
      <Outlet></Outlet>
    </div>
  )

  function changeMenu(value) {
    setActiveMenu(value);
    navigate(`/home/music/${value}`);
  }
}