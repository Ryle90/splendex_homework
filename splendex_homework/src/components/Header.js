import { useState } from 'react';
import Logo from '../assets/splendex-logo.svg';
import './Header.css';
import SelectMenu from './SelectMenu';

export default function Header ({
    isGaming,
    selectedCarPairs,
    setSelectedCarPairs
}) {
    const [errorMessage, setErrorMessage] = useState('');
    const [tempSelectedCarPairs, setTempSelectedCarPairs] = useState(0)

    function handleValidation() {
        let isValid = true
        if (selectedCarPairs === 0) {
            setErrorMessage('Choose a value');
            isValid = false
        }
        return isValid
    }

    function startNewGame() {
        if (tempSelectedCarPairs !== 0) {
            setSelectedCarPairs(tempSelectedCarPairs);
        }
    }

    return (
        <header className="mb-3">
            <img id="logo" src={Logo} alt="logo" />
            {isGaming &&
               <div className="menu">
                   <SelectMenu
                        setSelectedCarPairs={setTempSelectedCarPairs}
                        handleValidation={handleValidation}
                        errorMessage={errorMessage}
                        setErrorMessage={setErrorMessage}
                   />
                   <div id="btn-container">
                        <button className="btn btn-warning start-button" onClick={startNewGame}>Start new game</button>
                   </div>
               </div>
            }
            <div></div>
        </header>
    )
}