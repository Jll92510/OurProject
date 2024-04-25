import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {home} from './pages/home';
import {Appbar} from './components/Appbar';
export const Routes = () => {
        return(
            <Router>
                 <Switch>
                    <Route path ="/">
                        <home/>
                    </Route>
                    <Route path ="/Appbar/:AppbarId">
                        <Appbar/>
                    </Route>
                 </Switch>  
            </Router>
        )
}