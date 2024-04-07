
import './App.css';
import AppBar from './components/Appbar';
import BasicTabs from './components/Tab';
import { ThemeProvider } from '@material-ui/core';
function App() {
  return (
    <div className="App">
    <ThemeProvider>    
    <AppBar/>
    <BasicTabs/>
    </ThemeProvider>

    </div>
  );
}

export default App;
