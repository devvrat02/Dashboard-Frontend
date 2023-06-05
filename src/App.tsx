import './App.css';
import { AuthProvider } from './Context/AuthContext';//Authentication
import TodoProvider from './Context/TodoContext';//todo
import { Dashboard } from './components';

function App() {
  return (
    <AuthProvider>
      <TodoProvider>
        <Dashboard/>
      </TodoProvider>
    </AuthProvider>
  );
}

export default App;
