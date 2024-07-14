import style from "./style.module.scss";
import {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";

type ContainedButtonProps =
  | ({ tag: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement> & { label: string })
  | ({ tag?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement> & { label: string });

const ContainedButton = ({
                          label, tag = 'button', ...rest
                        }:
                          ContainedButtonProps
) => {
  if (tag === 'a') {
    return (
      <a className={style.containedButton} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {label}
      </a>
    );
  } else {
    return (
      <button className={style.containedButton} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {label}
      </button>
    );
  }
}


export default ContainedButton;