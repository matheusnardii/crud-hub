import { MdClose } from "react-icons/md";
import { InputModal } from "../../form/InputModal";
import { InputSelectModal } from "../../form/InputSelectModal";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const CreateTechModal = () => {
  const { setIsOpen, createTech   } = useContext(TechContext);

  const { register, handleSubmit, reset } = useForm();

  const submit = (formData) => {
    createTech(formData, reset);
    setIsOpen(false);
  };

  return (
    <div className={style.modalOverlay} role="dialog">
      <div className={style.modalBox}>
        <div className={style.modal__header}>
          <h1>Cadastrar Tecnologia</h1>
          <button title="Fechar" aria-label="close" onClick={() => setIsOpen(false)}>
            <MdClose className={style.close} size={16} />
          </button>
        </div>
        <div className={style.inputs__div}>
          <form onSubmit={handleSubmit(submit)}>
            <InputModal label="Nome" type="text" {...register("title")} required />
            <InputSelectModal
              label="Selecionar status"
              {...register("status")}
              required
            />
            <div>
              <button title="Cadastrar" aria-label="create" type="submit" className={style.create__btn}>
                Cadastrar Tecnologia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
