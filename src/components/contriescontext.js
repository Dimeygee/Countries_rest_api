import React , {  createContext, useEffect, useState }  from 'react'


export const Country = createContext()


const CountriesContext = ({children}) => {

    const  [countries, setCountries] = useState([])
    const [loading, isLoading] = useState(true)

    const [theme ,switchTheme ] =  useState(() => {
        const localData = localStorage.getItem('theme')
        return localData ? JSON.parse(localData) : false
    })

    const toggleTheme = () => switchTheme(!theme)

    const setLocalStorage = (item, value) => {
        localStorage.setItem(item, JSON.stringify(value));
    }

    const getCountryBorder = (Countries, code) => {
        const countryBorder = Countries.find(country => country.alpha3Code === code)
        return countryBorder.name
    }

   useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(res =>  res.json())
            .then(data => setCountries(data))

        setLocalStorage('theme',theme)
        isLoading(false)
    
   } , [theme,isLoading])


    return(
        <Country.Provider value={{ theme, switchTheme, loading,countries, setCountries, isLoading,toggleTheme,getCountryBorder }}>
            {children}
        </Country.Provider>
    )

}

export default CountriesContext
