import { useContext } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";
import { CreateTechModal } from "../../components/Modals/CreateTechModal";
import { TechContext } from "../../providers/TechContext";
import { EditTechModal } from "../../components/Modals/EditTechModal";

export const Dashboard = () => {
  const { isOpen, openEdit } = useContext(TechContext);

  const { user } = useContext(UserContext);

  return (
    <main className={style.dashboard__containner}>
      <div>
        <DefaultTemplate>
          <div className={style.info__containner}>
            <h1 className={style.info__title}>Olá, {user?.name}</h1>
            <p className={style.info__paragraph}>{user?.course_module}</p>
          </div>
          <div className={style.text__box}>
            <TechList />
          </div>
          {isOpen ? <CreateTechModal /> : null}
          {openEdit ? <EditTechModal /> : null}
        </DefaultTemplate>
      </div>
    </main>
  );
};
