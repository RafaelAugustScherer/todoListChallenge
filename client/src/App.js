import UserProvider from './provider/UserProvider';
import Header from './components/Header';
import Login from './components/Login';
import Table from './components/Table';


const App = () => {
  return (
    <UserProvider>
      <Header />
      <Login />
      <Table />
    </UserProvider>
  );
}

export default App;
