
import './App.css';
import {useEffect} from 'react';
import AppBar from './components/Appbar';
import BasicTabs from './components/Tab';
import { ThemeProvider } from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import MyTable from './components/MyTable';
import ViewUser from './User/ViewUser';
import EditPage from './User/EditPage';
import AppInfo from './User/AddApp';
import ViewApps from './User/ViewApps';
import AddtoApp from './User/AddtoApp';
import EditApp from './User/EditApp';
import LoginSignup from './components/LoginSignup';
function App() {
  return (
    <div className="App">
      <Router>
      <ThemeProvider>    
          <Routes>
            <Route exact path= "/" element={<LoginSignup/>}/>
            <Route path ="/*" element = {<MainApp/>}/>
          </Routes>
        </ThemeProvider>
        </Router>
    </div>
  );
}

function MainApp() {
  const location = useLocation();
  const isLoginSignupPage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0,0);
  },[location]);
  return(
    <>
    {!isLoginSignupPage && <AppBar/>}
      <Routes>
        <Route exact path= "/tabs" element={<BasicTabs/>}/>
        <Route exact path="/mytable" element= {<MyTable/>}/>
        <Route exact path="/viewuser/:server_uid" element= {<ViewUser/>}/>
        <Route exact path="/edituser/:server_uid" element= {<EditPage/>}/>
        <Route exact path="/addapp" element= {<AppInfo/>}/>
        <Route exact path="/viewapp/:server_uid" element= {<ViewApps/>}/>
        <Route exact path="/addtoapp/:server_uid" element= {<AddtoApp/>}/>
        <Route exact path="/editapp/:server_uid" element= {<EditApp/>}/>
      </Routes>

    </>

  );
}



export default App;
