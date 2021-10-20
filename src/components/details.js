import React, { useContext } from 'react'
import { Country } from './contriescontext' 
import CountryPreview from './countryPreview'


const CountryDetail = ({match}) => {
    const { countries, theme } = useContext(Country)
    const {name} = match.params


    const main = {
        backgroundColor : theme ? 'hsl(207, 26%, 17%)' : ' hsl(0, 0%, 98%)',
        color: theme ? 'white' : 'black' ,
    }

    const filteredcountry = countries.filter(country => country.name === name)    
    
    const CountryDetails = filteredcountry.length ? (
        <CountryPreview  filteredcountry={filteredcountry} />
    ):
    (
        <div className='loader' style={main}><i className="fas fa-spinner fa-pulse"></i></div>
    )

    return CountryDetails

}

export default CountryDetail