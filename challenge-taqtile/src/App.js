import FirstScreen from './app/screens/FirstScreen';
import { GlobalStyle } from './app/stylesheets/components/GlobalStyle';
import logo from '../src/app/images/ricklogo.png'
function App() {
  return (
    <>
    <GlobalStyle/>
    <img src={logo} id="logo" alt="logo" />
    <FirstScreen/>
    </>
  );
}

export default App;
