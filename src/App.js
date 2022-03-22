import './App.css';
import { Card, Navbar } from './components'
import data from './data'

function App() {

  const cards = data.map(x => <Card key={data.id} {...x} />)
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
