import React from 'react'
import { Link } from 'react-router-dom'
import './_navbar.sass'
import { useTheme, useUpdateTheme } from '../ThemeProvider/MyThemeProvider'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';



export default function NavBar() {

    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

    const theme = {
        backgroundColor: darkTheme ? "#CAF0F8" : "#023E8A",
    }
    
    const removeUnderline = {
        textDecoration: "none"
    }

return (
    <nav className='nav-bar' style={theme}>
    {darkTheme ? (<div className='link-container-light'>
            <Link to="/" style={removeUnderline}>
            <li>Home</li>
            </Link>

            <Link to="books" style={removeUnderline}>
        <li>Books</li>
            </Link>
        </div>) : (<div className='link-container-dark'>
            <Link to="/" style={removeUnderline}>
            <li>Home</li>
            </Link>

            <Link to="books" style={removeUnderline}>
        <li>Books</li>
            </Link>
        </div>)}
            <div onClick={toggleTheme}>
            {darkTheme ? (
                <Brightness4OutlinedIcon fontSize='large' sx={{color:"white"}} />
            ) : (
                <ModeNightOutlinedIcon fontSize='large' sx={{color:"white"}} />
            )}
            </div>

    </nav>
)
}