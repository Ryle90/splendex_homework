import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Start from './components/Start';
import Game from './components/Game';

function App() {
  const [isGaming, setIsGaming] = useState(false);
  const [selectedCarPairs, setSelectedCarPairs] = useState(0);

  return (
    <div className="App">
      <Header />
      {!isGaming &&
        <Start
          selectedCarPairs={selectedCarPairs}
          setSelectedCarPairs={setSelectedCarPairs}
          setIsGaming={setIsGaming}
        /> 
      }
      {isGaming &&
        <Game
          selectedCarPairs={selectedCarPairs}
        />
      }
    </div>
  );
}

export default App;
