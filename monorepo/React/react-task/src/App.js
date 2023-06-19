import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import data from './data/data'

function App() {

  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState()

  // console.log(data);

  function changePage(item) {
    setSelected(item);
    setStep(2)
    console.log(item);
  }

  return (
    <div className="App">
      <nav>

        <h3>{step == 1 ? "Select Service" : selected.text}</h3>
        <p>{step}/2</p>

      </nav>
      <main>
        <div className="content">
          {step == 1 ?data.map((item) => {
            return(
              <div 
                key={item?.id}
                className='choice'
                onClick={() => changePage(item)}
              >
                <img src={item?.image}/>
                <p>{item?.text}</p>
                <p>{">"}</p>
              </div>
            )
          }) : 
          <div className="content-step2">
            <h2>{selected.text}</h2> 
            <button onClick={() => setStep(1)}>Back</button>
          </div>
          }
        </div>
      </main>
      <footer>
        Powered by Company © copyright 2023
      </footer>
    </div>
  );
}

export default App;
