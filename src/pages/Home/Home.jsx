import React, { useEffect, useState} from 'react'
import HeroCard from '../../components/HeroCard/HeroCard';
import './_home.sass'
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import GotTitle from '../../components/GotTitle/GotTitle';

import { useTheme } from '../../components/ThemeProvider/MyThemeProvider';




export default function Home() {

const darkTheme = useTheme();
const [characters, setCharacters] = useState([]);
const [currentPage, setCurrentPage] = useState(0);
const [search, setSearch] = useState('');

const theme = {
    backgroundColor: darkTheme ? "white" : "black",
    color: darkTheme ? "black" : "white",
    borderColor: darkTheme ? "#CAF0F8" : "#023E8A"
}

const buttonTheme = {
    backgroundColor: darkTheme ? "#CAF0F8" : "#023E8A",
    color: darkTheme ? "black" : "white"
}


useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
    .then(info => info.json())
    .then(info => setCharacters(info));
}, [])

const filteredCharacters = () => {

    if (search.length === 0)
    return characters.slice(currentPage, currentPage + 5);

    const filtered = characters.filter ( character => character.fullName.toLowerCase().includes ( search ) );
    return filtered.slice (currentPage, currentPage + 5);
}

const nextPage = () =>{
    setCurrentPage( currentPage + 5);
}

const prevPage = () =>{
    if ( currentPage > 0 )
    setCurrentPage( currentPage - 5);
}

const onSearchChange = ({target}) => {
    setCurrentPage(0);
    setSearch (target.value);
}



    return (
    <>
    <div style={theme}>
    <GotTitle />
        {darkTheme ? (<>
            <div className='title-light-container'>
            <h2 className='title-light'>List of Characters</h2>
            </div>
            <div className='input-container'>
        <Box
    component="form"
    sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
    noValidate
    autoComplete="off"
    >
    <TextField id="filled-info"
    color="info" 
    label="Search character..." 
    variant="filled" value={ search } onChange={ onSearchChange } />
    </Box>
            </div>
    </>) : (<>
            <h2 className='title-dark'>List of Characters</h2>
            <div className='input-container'>
        <Box
    component="form"
    sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
    <TextField  sx= {{backgroundColor: "lightgray",  opacity: "0.9", marginLeft: "20px"}} id="filled-primary" label="Search character..." variant="filled" value={ search } onChange={ onSearchChange } />
    </Box>
    </div>
    </>)}  
    </div>
            <div className='post-cont'>
                {filteredCharacters().map((character) => {
                    return(
                    <HeroCard key={character.id} character={character} />
                    )
                })}
            </div>
            <div className='button-container'>
                {darkTheme ? 
                (<>
                <Button variant="contained-info" onClick={prevPage} style={buttonTheme}>Anterior</Button>
                
                <Button variant="contained-info" onClick={nextPage} style={buttonTheme}>Siguiente</Button>
                </>) 
                : 
                (<>
                <Button variant="contained-primary" onClick={prevPage} style={buttonTheme}>Anterior</Button>
                <Button variant="contained-primary" onClick={nextPage} style={buttonTheme}>Siguiente</Button>
                </>)}
            </div>
            <div className='lore-container' style={theme}>
            <div className='lore-container-text' style={theme}><p>"Los veranos duran décadas. Los inviernos pueden durar una vida. 
            Y comienza la lucha por el Trono de Hierro. Basado en la exitosa serie de libros de George R.R. Martin y creado por David Benioff y D.B. Weiss."</p>
            </div>
            <div className='lore-container-picture'>
            <img src='data:image/jpeg;base64,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'
            alt='george martin' className='george-picture' />
            <p>George R. R. Martin</p>
            </div>
    </div>
    </>
)
}
