import style from "./style.module.scss";

export type SkillBadgeProps = {
  label: string;
  color: 'yellow' | 'blue' | 'green' | 'purple' | 'red' | 'gray' | 'lightYellow';
}
const SkillBadge = ({label, color}: SkillBadgeProps) => {
  return (
    <div className={style[`${color}Badge`]}>
      {label}
    </div>
  )
}

export default SkillBadge;