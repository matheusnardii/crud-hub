import { forwardRef } from "react";
import style from "./style.module.scss";

export const InputSelectModal = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <div className={style.input__containner}>
        <label className={style.input__label}>{label}</label>
        <select className={style.select_input} ref={ref} {...rest}>
          <option value="">Selecione um status</option>
          <option value="Iniciante">
          Iniciante
          </option>
          <option value="Intermediário">
          Intermediário
          </option>
          <option value="Avançado">
          Avançado
          </option>
        </select>
        {error ? <p className={style.error}>{error.message}</p> : null}
      </div>
    </>
  );
});
