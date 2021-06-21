import React, { useContext } from 'react'
import { Country } from './contriescontext' 
import {Link} from 'react-router-dom'


const CountryDetail = ({match}) => {
    const { countries, theme,getCountryBorder } = useContext(Country)
    const {name} = match.params

    const Rbutton = {
        backgroundColor : theme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        color: theme ? 'white' : 'black' ,
        outline:'none',
        border :'none',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        padding:'10px 29px',
        margin: '70px 0',
        borderRadius:'4px',
    }

    const cbutton = {
        backgroundColor : theme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        color: theme ? 'white' : 'black' ,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        padding:'8px 15px',
        textDecoration:'none',
    }

    const cd = {
        backgroundColor : theme ? 'hsl(207, 26%, 17%)' : ' hsl(0, 0%, 98%)',
        color: theme ? 'white' : 'black' ,
        minHeight : theme ? 'calc(100vh - 74px)' : 'calc(100vh - 75px)',

    }

    const icon = {
        color: theme ? 'white' : 'black' ,
        marginRight:'7px',
    }

    const countryDetail = countries.filter(country => country.name === name)   


    return(
        <div className='c_d' style={cd}>{countryDetail.map(detail => {
            return (
                <div className='detail_container' key={detail.name}>
                    <Link to={'/'}><button className='back' style={Rbutton}>
                        <i className='fas fa-arrow-left' style={icon}></i>Back</button></Link>
                    <div  className='content_box'>
                        <div className='flag_box'>
                            <img src={detail.flag} alt={detail.name}/>
                        </div>
                        <div className='cdb'>
                            <div className='complete_detail_box'>
                                <h2>{detail.name}</h2>
                            </div>
                            <div className='ad_detail_box'>
                                <div className='l_d'>
                                    <p><strong>Native Name</strong>: {detail.nativeName}</p>
                                    <p><strong>Population</strong>: {detail.population}</p>
                                    <p><strong>Region</strong>: {detail.region}</p>
                                    <p><strong>Sub Region</strong>: {detail.subregion}</p>
                                    <p><strong>Capital</strong>: {detail.capital}</p>
                                </div>
                                <div className='r_d'>
                                    <p><strong>Top Level Domain</strong>: {detail.topLevelDomain}</p>
                                    <p><strong>Currencies</strong>: {detail.currency}</p>
                                    <p><strong>Language</strong>: {detail.languages.map(language => {
                                        return <span key={language.name}>{language.name} </span>
                                    })}</p>
                                </div>    
                            </div>
                            <div className='coutries_border_box'>
                                <span><strong>Border Countries</strong>: </span>
                                <span>
                                    {detail.borders.map(border => {
                                        const  countryBoder = getCountryBorder(countries,border)
                                        return (
                                            <button style={{ border:'none', outline: 'none' }} key={border}><Link to={`/${countryBoder}`} style={cbutton}>{countryBoder}</Link></button>
                                        )
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}</div>
    )
}

export default CountryDetail