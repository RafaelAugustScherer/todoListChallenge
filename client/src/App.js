import UserProvider from './provider/UserProvider';
import Header from './components/Header';
import Login from './components/Login';
import Table from './components/Table';
import TaskProvider from './provider/TaskProvider';


const App = () => {
  return (
    <UserProvider>
      <TaskProvider>
        <Header />
        <Login />
        <Table />
      </TaskProvider>
    </UserProvider>
  );
}

export default App;
