import { Header } from 'layouts/Header';
import './App.scss';
import { Routing } from './Routing';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routing />
    </div>
  );
};

export default App;
