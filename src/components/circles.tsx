import { Colors } from './styles-and-constants';
import { getWindowDimensions } from './window-resize-handler';

export default function Circles() {
  return (
    <>
      <div style= {{
      width:"500px",
      height:"500px",
      borderRadius: "50%",
      backgroundColor: Colors.darkGreen,
      position: "absolute",
      top: "50%",
      left: "calc(50% - 200px)",
      transform: "translate(-50%, -50%)",
      mixBlendMode: "multiply",
      filter: "blur(40px)",
      zIndex: 9997
      }} id = "hello" />
      <div style= {{
        width:"500px",
        height:"500px",
        borderRadius: "50%",
        backgroundColor: Colors.lightGreen,
        position: "absolute",
        top: "50%",
        left: "calc(50% + 200px)",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "multiply",
        filter: "blur(40px)",
        zIndex: 9998
      }} id = "hello2" />
      <div style= {{
        width:"500px",
        height:"500px",
        borderRadius: "50%",
        backgroundColor: Colors.lightGrey,
        position: "absolute",
        top: "calc(50% + 200px)",
        left: "50%",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "multiply",
        filter: "blur(40px)",
        zIndex: 9999
      }} id = "hello3" />
    </>
  );
}