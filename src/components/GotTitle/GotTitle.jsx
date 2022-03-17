import React from 'react'
import { useTheme } from '../ThemeProvider/MyThemeProvider'
import './_gottitle.sass'
import GotBlack from '../GotTitle/GOTblack.svg'
import GotWhite from '../GotTitle/GotWhites.png'

export default function GotTitle() {

    const darkTheme = useTheme();

return (
    <div>
    {darkTheme ? (<div className='img-container'>
        <img src={GotBlack} alt="Game of Thrones logo" />
        </div>) : (<div className='img-container-white'>
        <img src={GotWhite} alt="Game of Thrones logo" />
        </div>)}
    </div>
)
}
