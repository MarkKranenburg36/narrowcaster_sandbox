import logo from './../assets/qquestlogo.png';
import './Logo.css';

export const Logo = () => {
    return (
        <div className='logoContainer'>
            <img id='qquestLogo' src={logo}/>
        </div>
    )
};