import { forwardRef } from "react";
import style from "./style.module.scss"

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={style.input__containner}>
      <label className={style.input__label}>{label}</label>
      <input ref={ref} {...rest} />
      {error ? <p className={style.error}>{error.message}</p> : null}
    </div>
  );
});
