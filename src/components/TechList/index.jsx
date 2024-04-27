import { FaPlus } from "react-icons/fa";
import { TechCard } from "./TechCard";
import style from "./style.module.scss";
import { useContext, useEffect } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";

export const TechList = () => {
  const { userTech, setUserTech } = useContext(UserContext);
  const { setIsOpen } = useContext(TechContext);


  return (
    <>
      <div>
        <div className={style.tech__header}>
          <h1 className={style.header__title}>Tecnologias</h1>
          <button title="Criar" aria-label="create" className={style.header__btn} onClick={() => setIsOpen(true)}>
            <FaPlus />
          </button>
          
        </div>
          <ul className={style.techs__containner}>
            {userTech?.map((tech) => (
              <TechCard  key={tech.id} tech={tech}/>
            ))}
          </ul>
          
      </div>
    </>
  );
};
