import { forwardRef } from "react";
import style from "./style.module.scss";

export const InputSelect = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <div className={style.input__containner}>
        <label className={style.input__label}>{label}</label>
        <select className={style.select_input} ref={ref} {...rest}>
          <option value="">Selecione um módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </select>
        {error ? <p className={style.error}>{error.message}</p> : null}
      </div>
    </>
  );
});
