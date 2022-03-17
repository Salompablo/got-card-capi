import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './_singlehero.sass'
import { useTheme } from '../ThemeProvider/MyThemeProvider';
import GotTitle from '../GotTitle/GotTitle';

export default function SingleHero() {
    
    const darkTheme = useTheme();

    const theme = {
        backgroundColor: darkTheme ? "#CAF0F8" : "#023E8A",
        color: darkTheme ? "black" : "white",
        borderColor: darkTheme ? "#023E8A" : "#CAF0F8"
    } 

    const [heroInfo, setHeroInfo] = useState({
        firstName: "",
        lastName: "",
        title: "",
        family: "",
        imageUrl: "",
    });

    const { heroId } = useParams();

    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters/" + heroId)
        .then(data => data.json())
        .then(data => setHeroInfo(data));
    }, [heroId]);

    const { firstName, lastName, title, family, imageUrl } = heroInfo;

    return (
        <>
        <GotTitle />
        {darkTheme ? (<div className='charac-container-light' style={theme}>
        <h3>Character's info</h3>
            <div className='hero-info-light'>
                <p><b>Name:</b> {firstName}</p>
                <p><b>Last Name</b>: {lastName}</p>
                <p><b>Title</b>: {title}</p>
                <p><b>House</b>: {family}</p>
            </div>
            <div className='picture-container' style={theme}>
                <img src={imageUrl} alt="Game of thrones" />
            </div>
        </div>) : (<div className='charac-container' style={theme}>
        <h3>Character's info</h3>
            <div className='hero-info'>
                <p><b>Name:</b> {firstName}</p>
                <p><b>Last Name</b>: {lastName}</p>
                <p><b>Title</b>: {title}</p>
                <p><b>House</b>: {family}</p>
            </div>
            <div className='picture-container' style={theme}>
                <img src={imageUrl} alt="Game of thrones" />
            </div>
        </div>)}
        </>

)
}
