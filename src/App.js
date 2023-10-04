import './App.css';
import Clients from './components/LandingPage/Clients';
import Newevents from './components/LandingPage/Newevents';
import Footer from './components/LandingPage/Footer';

function App() {
  return (
   <div>
      <Newevents />
      <Clients />
      <Footer />
   </div>
  );
}

export default App;
