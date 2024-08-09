// src/components/Card.js
import { useState } from "react";
import styles from "../../../src/styles/Card.module.css";
import ModalCard from "../modal/ModalCard";

const Card = ({ prescricao }) => {
  const { paciente_nome, data_prescricao, medicamentos, funcionario_nome } =
    prescricao;
  const [modal, setModal] = useState(false);
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };
  const maisDetalhes = () => {
    setModal(true);
  };
  const fechaDetalhes = () => {
    setModal(false);
  };

  return (
    <div className={styles.receita}>
      <div className={styles.border}>
        <div className={styles.receituario}>
          <h3>RECEITUÁRIO</h3>
        </div>
        <section className={styles.dPessoais}>
          <h4>Dados Pessoais</h4>
          <p>
            <span>Paciente:</span> {paciente_nome}
          </p>
          <p>
            <span>Data Nascimento:</span> 27/04/1989{" "}
            
          </p>
          <p>
            <span>Convênio:</span> 000.000.000-00{" "}
          </p>
        </section>
        <section className={styles.prescricao}>
          <h4>Medicamentos</h4>
          {medicamentos.map(
            (med, index) =>
              index <= 1 && (
                <div key={index} className={styles.subSection}>
                  <div className={styles.medQtd}>
                    <p>
                      <span>Medicamento:</span> {med.nome}
                    </p>
                    <p>
                      <span>Quantidade:</span> {med.quantidade}
                    </p>
                  </div>
                  <p>
                    <span>Formas De Usar:</span> {med.forma_uso}
                  </p>
                </div>
              )
          )}
          {medicamentos.length > 1 ? (
            <p className={styles.p}>...</p>
          ) : (
            <p className={styles.p}>
              <br />
            </p>
          )}

          <div className={styles.data}>
            <p className={styles.dataCity}>
              Peabiru, {formatDate(data_prescricao)}
            </p>
            <br />
          </div>

          <div className={styles.assinatura}>
            <p className={styles.nomeMedico}>{funcionario_nome}</p>
            <p className={styles.crm}>CRM:10093-PR</p>
            <br />
            <div>
              <button className={styles.btn} onClick={maisDetalhes}>
                detalhes
              </button>
            </div>
          </div>
        </section>
      </div>
      {modal && <ModalCard prescricao={prescricao} onClose={fechaDetalhes} />}
    </div>
  );
};

export default Card;
