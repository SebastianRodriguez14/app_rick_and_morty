import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import CharacterRandom from './components/CharacterRandom';
import NavBarOptions from './components/NavBarOptions';
import SearchCharacter from './components/SearchCharacter';
import PrincipalPage from './components/PrincipalPage';
import "./css/App.css";
import "./css/StyleContent.css"
import "./css/StyleModal.css"
import GuessCharacter from './components/GuessCharacter';

function App() {
  return <>
  <BrowserRouter>
      <NavBarOptions/>
      <Switch>
      
        <Route path = "/" exact component={PrincipalPage}></Route>
        <Route path = "/random" exact component = {CharacterRandom}></Route>
        <Route path = "/search" exact component = {SearchCharacter}></Route>
        <Route path = "/guess" exact component = {GuessCharacter}></Route>
      </Switch>
  </BrowserRouter>
    

  </>;
}

export default App;
