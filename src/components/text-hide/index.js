import { useEffect, useRef } from "react";
export default function TextHide(props) {
  let textHideDom = useRef(0);
  useEffect(() => {
    let boxHeight = textHideDom.current.clientHeight;
    console.log('----boxHeight----->', boxHeight);
  }, []);
  return (
    <div ref={ textHideDom } className="text-hide-main flex w-[200px] h-[100px] border overflow-hidden">
      { props.text }
    </div>
  )
}