import React , { useContext, useState }from 'react'
import SrchFill from './srch_fill'
import { Country } from './contriescontext'
import { Link  } from 'react-router-dom'

const Main = () => {

    const { theme, countries , loading} = useContext(Country) 
    const main = {
        backgroundColor : theme ? 'hsl(207, 26%, 17%)' : ' hsl(0, 0%, 98%)',
        color: theme ? 'white' : 'black' ,
    }

    const con = {
        backgroundColor : theme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        borderRadius:'4px',
    }

    const link = {
        textDecoration:'none',
        color: theme ? 'white' : 'black' ,
    }

    const [option, selectOptions] = useState('All')
    const [search, searching] = useState('')


    const Countries = countries.filter(data => {
        if(option === 'All') return data
        return data.region === option
    })

    const searched = search === '' ? Countries : Countries.filter(country => country.name.toLowerCase().includes(search))


    const IsLoading = loading ? (
        <div className='loader' style={main}><i className="fas fa-spinner fa-pulse"></i></div>
    ):
    (
        <div className='c_c'>
           {searched.map(country => {
                return(
                        <div className='countries' style={con} key={country.name}>
                            <Link to={`/${country.name}`} style={link}>
                                <div className='img_box'>
                                    <img className='img' src={country.flag}  alt={country.flag} />
                                </div>
                                <div className='details_box' key={country.name}>
                                    <h3>{country.name}</h3>
                                    <p><strong>Populatiion</strong> : {country.population}</p>
                                    <p><strong>Region</strong> :{country.region}</p>
                                    <p><strong>Capital</strong> :{country.capital}</p>
                                </div>
                            </Link>
                        </div>
                    )
            })}
        </div>  
    )
    
    return(
        <div className='main' style={main}>
            <SrchFill  option={option} selectOptions={selectOptions} searching={searching} theme={theme}/>
            {IsLoading}
        </div>
    )
}

export default Main


