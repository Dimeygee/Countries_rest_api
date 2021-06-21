import React , {useContext}from 'react'
import { Country } from './contriescontext'


const Header = () => {

    const {theme,switchTheme} = useContext(Country)

    const header ={
        backgroundColor : theme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        color: theme ? 'white' : 'black' ,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        marginBottom: theme ? '0' :  '1px'
    }

    const button = {
        color : theme ? 'white' : 'black' ,
        backgroundColor : theme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    }
    
    const icon = theme ?  <i className='fas fa-moon icon'></i> : <i className='far fa-moon icon'></i>  

    return( 
        <div className='header' style={header}>
            <h2>Where in the world?</h2>
            <button className='toggleBtn' onClick={() => switchTheme(!theme)} style={button}>
               {icon}
                Dark Mode
            </button>
        </div>
    )
}

export default Header


