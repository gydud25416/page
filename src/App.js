
import './App.css';
import CountryList from './components/CountryList';
import Newsletter from './components/Newsletter';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <Newsletter />
      <CountryList />
    </div>
  );
}

export default App;
