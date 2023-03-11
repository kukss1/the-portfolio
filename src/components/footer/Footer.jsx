import { Button, styled } from '@mui/material';
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from "react-icons/ai";
import {AiOutlineLinkedin} from "react-icons/ai"
const FooterWrapper = styled('footer')({
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center',
  marginTop: '2rem',
  paddingTop: '2rem',
  borderTop: '1px solid #ccc',
});

const ContactTitle = styled('h2')({
  margin: '5px',
  color:"GrayText",
  fontSize:"14px"
});

const FooterNav = styled('nav')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
});

const SocialLink = styled('a')({
  margin: '0 1rem',
});

function Footer() {
  const handleClick = () => {
    window.location.href =
      'mailto:kukt94@gmail.com?subject=Example Subject&body=Example Body';
  };

  return (
    <FooterWrapper>
      <Button variant="contained" onClick={handleClick}>
        Send Me Email
      </Button>
      <ContactTitle>OR</ContactTitle>
      <FooterNav>
        <SocialLink href="https://t.me/torosya1666'" target="_blank" rel="noreferrer">
          <FaTelegramPlane size={32} color="#30a4da" />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/torosyan1666/" target="_blank" rel="noreferrer">
          <AiOutlineInstagram size={32} color="#b00fca" />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/kuk.ss21/" target="_blank" rel="noreferrer">
          <AiOutlineFacebook size={32} color="#1773ea" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/hovhannes-torosyan-a4b7ab1a9/" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin size={32} color="#0a66c2" />
        </SocialLink>
      </FooterNav>
    </FooterWrapper>
  );
}

export default Footer;
