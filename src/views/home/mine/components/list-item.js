import { useEffect } from "react";
export default function ListItem({ user }) {
  useEffect(() => {
  }, [user]);

  function gotoDetail(msg) {
    
  }

  return (
    <div className="tw-flex tw-w-full tw-h-full tw-justify-between tw-border" onClick={ () => gotoDetail(user) }>
      <div className="tw-flex tw-flex-col tw-ml-[15px]">
        <div>{ user.name }</div>
        <div>{ user.age }</div>
      </div>
      <div className="tw-mr-[15px]">{ user.message }</div>
    </div>
  );
}