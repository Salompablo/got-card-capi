import React from 'react'
import { Link } from 'react-router-dom'
import './_herocard.sass'
import { useTheme } from '../ThemeProvider/MyThemeProvider'


export default function HeroCard({ character: { id, fullName, title, family, imageUrl }}) {

    const darkTheme = useTheme();
    
    const theme = {
        backgroundColor: darkTheme ? "#CAF0F8" : "#023E8A",
        color: darkTheme ? "black" : "white"
    } 

    return (
        <>
    <Link to={`/Character/${id}`}>

    <div className='hero-container'>
        <div className='hero-container-inner'>
            <div className='hero-container-front'>
            <img className='hero-img' src={imageUrl} alt="Game of thrones" />
            </div>
        <div className='hero-container-back' style={theme}>
        <h2>{fullName}</h2>
        <h4>{title}</h4>
        <p>{family}</p>
        </div>
        </div>
    </div>
    </Link>
    </>
)
}
