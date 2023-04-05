import './App.css';
import RoutesTree from './Components/RoutesTree';
import Navigation from './Components/Navigation';
import Footer from'./Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <RoutesTree />
      <Footer />
    </div>
  );
}

export default App;
