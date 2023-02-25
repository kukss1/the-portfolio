import './Footer.css'

import telegram from '../../assets/images/svg/telegram.svg'
import facebook from '../../assets/images/svg/facebook.svg'
import instagram from '../../assets/images/svg/instagram.svg'

function Footer() {

    const handleClick = () => {
        window.location.href = 'mailto:kukt94@gmail.com?subject=Example Subject&body=Example Body';
    }


    return ( 
        <footer className='footer_wrapper'>
 <button className='footer_btn' onClick={handleClick}>Send Me Email</button>
 <h2 className='contact_title'>or find me in</h2>
 <nav className='footer_nav'>
    <a href="https://t.me/torosya1666'"><img src={telegram} alt="telegram" /></a>
    <a href="https://www.instagram.com/torosyan1666/"><img src={instagram} alt="instagram" /></a>
    <a href="https://www.facebook.com/kuk.ss21/"><img src={facebook} alt="facebook" /></a>
 </nav>
        </footer>
     );
}

export default Footer;