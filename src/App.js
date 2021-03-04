import React  from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Navbar from './components/layout/layout/navbar';
import User from './components/users/Users3';
import Home from './components/pages/home';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/layout/alert';
import About from './components/pages/About';
import GithubState from './context/github/gtihubstate';
import Alertstate from './context/Alert/alertstate';
import './App.css';


const App = () =>{


 
    return(
     <GithubState>
       <Alertstate>
        <Router>
            <div className='App'>
              <Navbar/>
              <div className='container'>
                <Alert/>
                <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/about' component={About}/>
                      <Route exact path='/user/:login' component={User}/> 
                      <Route component={NotFound}/>   
                </Switch>
              </div>
            </div>
        </Router>
       </Alertstate>
     </GithubState>
    
  );
  

};
export default App;