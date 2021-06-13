import Logo from '../../images/mgm.png'
import './header.scss'

export const Header = () => {
    return (
        <header className="app-header" id="#">
            <div className="img-warpper">
                <img className="app-logo" src={Logo} alt="logo"/>
            </div>
            <nav>
                <ul>
                    <li><a href="#"> Home</a></li>
                    <li><a href="#">Add Movie</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

