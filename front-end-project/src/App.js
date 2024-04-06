import './App.css';
import AppBar from './components/Appbar';
import List from './components/List';
import BasicTabs from './components/Tab';
function App() {
  return (
    <div className="App">
    <AppBar/>
    {/* <List/> */}
    <BasicTabs/>
    </div>
  );
}

export default App;
