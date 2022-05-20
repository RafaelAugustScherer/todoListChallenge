import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserProvider';

export const TaskContext = createContext();

const taskStatusTranslate = {
  pending: 'Pendente',
  inProgress: 'Em andamento',
  done: 'Finalizada',
};

const TaskProvider = ({ children }) => {
  const { REACT_APP_API_URL } = process.env;
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const { token } = user;

    if (token) {
      try {
        const { data } = await axios.get(`${REACT_APP_API_URL}/task`, { headers: { 'Authorization': token } });
        const newTasks = data.map(
          (task) => ({ ...task, status: taskStatusTranslate[task.status] })
        );
        setTasks(newTasks);
      } catch (e) {}
    }
  };

  const createTask = async (payload) => {
    const { token } = user;

    try {
      const { data } = await axios.post(
        `${REACT_APP_API_URL}/task`,
        payload,
        { headers: { 'Authorization': token } }
      );
      setTasks([ ...tasks, data ]);
    } catch(e) {}
  };

  useEffect(() => {
    fetchTasks();
  }, [user]);

  const value = {
    tasks,
    createTask,
  };

  return (
    <TaskContext.Provider value={ value }>
      { children }
    </TaskContext.Provider>
  );
};

export default TaskProvider;



