import { useContext, useState } from 'react';
import { MdCheck, MdClose } from 'react-icons/md';
import { TaskContext } from '../provider/TaskProvider';
import { UserContext } from '../provider/UserProvider';
import styles from './styles/Table.module.css';

const Table = () => {
  const { user } = useContext(UserContext)
  const { tasks, createTask } = useContext(TaskContext);
  const [taskForm, setTaskForm] = useState({
    name: '',
    status: 'pending',
  });

  const updateFormField = ({ target: { name, value } }) => {
    setTaskForm({ ...taskForm, [name]: value });
  };

  const generateEditButtons = () => (
    <>
      <button type="button" className={ styles.deleteTaskBtn }><MdClose /></button>
      <button
        type="button"
        className={ styles.createTaskBtn }
        onClick={ () => createTask(taskForm) }
        disabled
      ><MdCheck /></button>
    </>
  );

  return (
    <div className={ styles.taskTableContainer }>
      <h2>Tarefas</h2>
      <table className={ styles.taskTable }>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Criação</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(({ name, status, createdAt }, idx) => (
              <tr key={`${name}-idx`}>
                <td>{ name }</td>
                <td>{ status }</td>
                <td>{ createdAt }</td>
                <td className={ styles.editTaskField }>{ generateEditButtons() }</td>
              </tr>
            ))
          }
          <tr>
            <td>
              <input
                type="text"
                name="name"
                className={ styles.nameInput }
                placeholder="Criar nova tarefa"
                onChange={ updateFormField }
                value={ taskForm.name }
              />
            </td>
            <td>
              <select
                name="status"
                className={ styles.statusInput }
                onChange={ updateFormField }
                value={ taskForm.status }
              >
              <option value="pending">Pendente</option>
              <option value="inProgress">Em andamento</option>
              <option value="done">Finalizada</option>
            </select></td>
            <td className={ styles.createdAtDisabled }></td>
            <td className={ styles.editTaskField }>
              <button
                type="button"
                className={ styles.deleteTaskBtn }
                disabled
              ><MdClose /></button>
              <button
                type="button"
                className={ styles.createTaskBtn }
                onClick={ () => createTask(taskForm) }
                disabled={ !user.username || taskForm.name === '' }
              ><MdCheck /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;