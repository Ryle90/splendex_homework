import Logo from '../assets/splendex-logo.svg';
import './Header.css';

export default function Header () {
    return (
        <header className="mb-3">
            <img id="logo" src={Logo} alt="logo" />
        </header>
    )
}