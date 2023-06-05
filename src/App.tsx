import './App.css';
import { AuthProvider } from './Context/AuthContext';
import TodoProvider from './Context/TodoContext';
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
