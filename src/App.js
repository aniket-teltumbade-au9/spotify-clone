import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './css/w3.css'
import './css/index.css'
import AccountPage from './Pages/AccountPage';
import ProfilePage from './Pages/ProfilePage';
import SearchPage from './Pages/SearchPage';
import PlaylistPage from './Pages/PlaylistPage';
function App() {
  return (
    <BrowserRouter>
      <div className="Main">
        <Sidebar />
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/search' component={HomePage} />
          <Route exact path='/search/:term' component={SearchPage} />
          <Route exact path='/account' component={AccountPage} /> 
          <Route exact path='/profile' component={ProfilePage} /> 
          <Route exact path='/playlist/:pid' component={PlaylistPage} /> 
          <Redirect to='/' /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
