import './App.css';
import { AuthProvider } from './Context/AuthContext';//Authentication
import { ThemeProvider } from './Context/ThemeContext';
import Router from './Router';
import {store} from './store';
import { Provider } from "react-redux"
function App() {
  return (
      <AuthProvider>
          <ThemeProvider>
            <Provider store={store}>
                        <Router/>
                  </Provider>
          </ThemeProvider>
       </AuthProvider>
  );
}

export default App;
