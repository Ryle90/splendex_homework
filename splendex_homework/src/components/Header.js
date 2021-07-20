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

    function handleValidation() {
        let isValid = true
        if (selectedCarPairs === 0) {
            setErrorMessage('Choose a value');
            isValid = false
        }
        return isValid
    }

    return (
        <header className="mb-3">
            <img id="logo" src={Logo} alt="logo" />
            {isGaming &&
               <div>
                   <SelectMenu
                        setSelectedCarPairs={setSelectedCarPairs}
                        handleValidation={handleValidation}
                        errorMessage={errorMessage}
                        setErrorMessage={setErrorMessage}
                   />
               </div>
            }
            <div></div>
        </header>
    )
}