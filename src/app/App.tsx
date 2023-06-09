import { Header } from 'layouts/Header';
import './App.scss';
import { Routing } from './Routing';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routing />
      </div>
    </div>
  );
};

export default App;
