import style from "./style.module.scss";
import {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";

type OutlinedButtonProps =
  | ({ tag: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement> & { label: string })
  | ({ tag?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement> & { label: string });

const OutlinedButton = ({
                          label, tag = 'button', ...rest
                        }:
                          OutlinedButtonProps
) => {
  if (tag === 'a') {
    return (
      <a className={style.outlinedButton} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {label}
      </a>
    );
  } else {
    return (
      <button className={style.outlinedButton} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {label}
      </button>
    );
  }
}


export default OutlinedButton;