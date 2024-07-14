import style from "./style.module.scss";
import {ReactNode} from "react";

type FloatingButtonsProps = {
  children: ReactNode;
}
const FloatingButtons = ({children}: FloatingButtonsProps) => {
  return (
    <div className={style.floatingButtons}>
      {children}
    </div>
  );
}

export default FloatingButtons;