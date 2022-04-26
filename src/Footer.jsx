import { GitHub, LinkedIn, Email, Article, Phone, Language } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`
const IconContainer = {
    height: '50',
    width: '50',
    margin: '10',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    backgroundColor: 'transparent',
    color: '#eee',
}
const aStyle ={
    color: 'white',
    textDecoration: 'none'
}

    

const Footer = ()=> {
    return(
        <Container>
        <a href='//https://www.linkedin.com/in/yuval-poliak-445a64222/' style={aStyle}> 
            <LinkedIn style={IconContainer}/>
            linkedin
            </a>
            <a href='//https://github.com/yuvalpoliak/'style={aStyle}><GitHub style={IconContainer}/>github</a>
            <a style={aStyle}><Article style={IconContainer}/>resume</a>
            <a href='//yuvalpoliak.com'style={aStyle}><Language style={IconContainer}/>website</a>
            
        </Container>
    )
}
export default Footer;