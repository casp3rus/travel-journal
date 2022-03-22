import './App.css';
import { Card, Navbar } from './components'
import {v4 as uuidv4} from 'uuid'
import data from './data'

function App() {

  const cards = data.map(x => <Card key={uuidv4()} {...x} />)
  return (
    <div className="App">
      <Navbar />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
