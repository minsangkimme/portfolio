import style from './style.module.scss';
import {HTMLAttributes} from "react";
import clsx from "clsx";

type EmphasizedHeadingProps = {
  label: string
} & HTMLAttributes<HTMLDivElement>;
const EmphasizedHeading = ({
                             label, ...rest
                           }: EmphasizedHeadingProps) => {
  return (
    <div {...rest} className={clsx(style.headingWrapper)} >
      <h2 className={style.emphasizedHeading}>
        {label}
      </h2>
    </div>
  )
}

export default EmphasizedHeading;