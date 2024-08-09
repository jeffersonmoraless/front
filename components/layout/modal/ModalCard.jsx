import styles from "../../../src/styles/Modal.module.css";
const ModalCard = ({ prescricao, onClose }) => {
  const {
    paciente_nome,
    data_prescricao,
    medicamentos,
    funcionario_nome,
    status,
  } = prescricao;

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
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
                {/* Esse dado não estava no objeto, então pode ser ajustado */}
              </p>
              <p>
                <span>Convênio:</span> 000.000.000-00{" "}
                {/* Também ajustável conforme necessário */}
              </p>
            </section>
            <section className={styles.prescricao}>
              <h4>Medicamentos</h4>
              {medicamentos.map((med, index) => (
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
              ))}

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
              </div>
            </section>
          </div>
        </div>
        <div className={styles.modalActions}>
          <button onClick={onClose} className={styles.btnClose}>
            Fechar
          </button>
          <button className={styles.btnEdit}>Alterar Dados</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
