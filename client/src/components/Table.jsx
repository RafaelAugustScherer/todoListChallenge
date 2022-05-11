import styles from './styles/Table.module.css';

const Table = () => {
  return (
    <div className={ styles.taskTableContainer }>
      <table className={ styles.taskTable }>
        <td>
          <th>Descrição</th>
          <th>Horário</th>
          <th>Editar</th>
        </td>
      </table>
    </div>
  );
}

export default Table;