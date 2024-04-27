import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import style from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { setOpenEdit, deleteTech, selectTechEdit } = useContext(TechContext);

  return (
    <>
      <li className={style.techs__box}>
        <div className={style.techs__info}>
          <h1 className={style.techs__title}>{tech.title}</h1>
        </div>
        <div className={style.footer__div}>
          <p className={style.techs__nivel}>{tech.status}</p>
          <div className={style.icons__div}>
            <MdOutlineEdit
              onClick={() => {setOpenEdit(true); selectTechEdit(tech)}}
              className={style.edit__icon}
              title="Editar" aria-label="edit"
            />
            <RiDeleteBin6Line
              onClick={() => deleteTech(tech.id)}
              className={style.delete__icon}
              title="Deletar" aria-label="delete"
            />
          </div>
        </div>
      </li>
    </>
  );
};
