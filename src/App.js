import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import TableNum from './components/TableNum';
import Counter from './components/Counter';

function App() {
  return (
     <div>

      <h1>Mi primera mini web con React 🚀</h1>

      <UserCard name="Fran" age={23}></UserCard>

      <TableNum 
      email="fran@gmail.com" password="hola122" 
      email1="oscar@gmail.com" password1="fsafa" 
      email2="Carlos@gmail.com" password2="gggg" 
      />

      <Counter></Counter>

    </div>
  );
}

export default App;
