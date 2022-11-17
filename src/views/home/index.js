import { useState, useEffect, useMemo } from 'react';
import { Outlet, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Home(props) {
  let navigate = useNavigate();
  const msg = useMemo(() => { 
    return {
      name: 'xixi'
    }
   }, []);
  useEffect(() => {
    console.log('----msg-->', msg.name);
  }, [msg]);

  let [ tabActive, setTabActive ] = useState('music');
  let tabMenuClass = 'tw-w-[94px] tw-text-center hover:tw-text-[#31c27c] ';
  let tabMenuActiveClass = 'tw-bg-[#31c27c] tw-text-[#ffffff] hover:tw-text-[#ffffff]';

  function changeTab(menu) {
    setTabActive(menu);
    navigate(`/home/${menu}`);
  }

  return (
    <>
      <div id="homeHeader" className="tw-bg-slate-50 tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="tw-flex tw-items-center tw-justify-center tw-w-3/5 tw-text-center tw-h-[90px]">
          <img src={require('../../assets/logo.png')} className="rem:tw-w-[170px] tw-h-[46px]" alt="" />
          <div className='tw-flex tw-ml-[20px] tw-leading-[90px] tw-text-black tw-font-bold tw-cursor-pointer'>
            <div className={ tabActive === 'music' ? tabMenuClass + tabMenuActiveClass : tabMenuClass } onClick={target => changeTab('music', target)}>音乐馆</div>
            <div className={ tabActive === 'mine' ? tabMenuClass + tabMenuActiveClass : tabMenuClass } onClick={target => changeTab('mine', target)}>我的音乐</div>
            <div className={ tabActive === 'client' ? tabMenuClass + tabMenuActiveClass : tabMenuClass } onClick={target => changeTab('client', target)}>客户端</div>
            <div className={ tabActive === 'dev' ? tabMenuClass + tabMenuActiveClass : tabMenuClass } onClick={target => changeTab('dev', target)}>开发平台</div>
          </div>
          <Form>
            <InputGroup className='tw-ml-[20px]'>
              <Form.Control
                bsPrefix="tw-rounded-none form-control"
                placeholder="搜索怎么嗦、搜索"
                aria-label="Username"
              />
            </InputGroup>
          </Form>
          <Button className="tw-bg-[#31c27c] tw-border-[#31c27c] tw-ml-[30px]">开通vip</Button>
        </div>
        <div className="tw-w-3/5 after:tw-block after:tw-w-full after:tw-h-[1px] after:tw-bg-[#eee]"></div>
      </div>
      <Outlet></Outlet>
    </>
  );
}