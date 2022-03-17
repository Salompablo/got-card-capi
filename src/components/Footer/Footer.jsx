import React from 'react'
import './_footer.sass'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '../ThemeProvider/MyThemeProvider';

export default function Footer() {

    const darkTheme= useTheme();

    const theme = {
        backgroundColor: darkTheme ? "lightgray" : "#111111",
        color: darkTheme ? "black" : "white"
    }

return (
    <footer style={theme}>
        <div className='social-links'>
        {darkTheme ? (<ul>
                <li><a href='https://www.facebook.com/pablosalom/'><FacebookIcon sx={{color: "black"}} /></a></li>
                <li><a href='https://www.instagram.com/pablosalom/'><InstagramIcon sx={{color: "black"}}/></a></li>
                <li><a href='https://www.linkedin.com/in/pablo-salom-42a974232/'><LinkedInIcon sx={{color: "black"}} /></a></li>
        </ul>) : (<ul>
                <li><a href='https://www.facebook.com/pablosalom/'><FacebookIcon sx={{color: "white"}} /></a></li>
                <li><a href='https://www.instagram.com/pablosalom/'><InstagramIcon sx={{color: "white"}}/></a></li>
                <li><a href='https://www.linkedin.com/in/pablo-salom-42a974232/'><LinkedInIcon sx={{color: "white"}} /></a></li>
        </ul>)}
        
        </div>
        <div className='footer-bottom'>
            <p>copyright &copy;2022. designed by <span style={theme}>Pablo Salom Fede</span> </p>
        </div>
    </footer>
)
}
