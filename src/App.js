import Contact from './components/Contact';
import Mystatus from './components/Mystatus';
import Profile from './components/Profile';
import Projects from './components/projects';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Profile></Profile>
      <Mystatus></Mystatus>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
