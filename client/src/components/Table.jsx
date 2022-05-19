import styles from './styles/Table.module.css';

const Table = () => {
  return (
    <div className={ styles.taskTableContainer }>
      <table className={ styles.taskTable }>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Horário</th>
            <th>Editar</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Table;