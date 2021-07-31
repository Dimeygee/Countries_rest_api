import React , {  useState }from 'react'


const SrchFill = ({option,selectOptions,searching, theme}) => {

    const srch_fill = {
        color : theme ? 'white' : 'black' ,
        backgroundColor : theme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        width:'400px',
        height:'50px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        paddingBottom:'50px',
        borderRadius:'4px',
    }

    

    const filter = {
        width:'200px',
        color : theme ? 'white' : 'black' ,
        backgroundColor : theme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)',
        paddingBottom:'50px',
        borderRadius:'4px',
    }

    const input = {
        color : theme ? 'white' : 'black' ,
        backgroundColor : theme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        fontSize:'14px',
     }


    const [options] = useState(['All','Africa','Americas','Asia','Europe','Oceania'])
    const [filtered, setFiltered] = useState('')

    const handleSelected = (e) => {
        selectOptions(e.target.innerText)
    }

    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase()
        searching(value)
    }

    const handleFiltered = () => {
        const filt = filtered === 'show' ? '' : 'show' 
        setFiltered(filt)
    }

    const arrows = filtered === 'show' ? <i className="fas fa-chevron-up c_d"></i> : <i className="fas fa-chevron-down c_d"></i>


    return (
        <div className='search_container'>
            <div className='search_box' style={srch_fill}>
                <span><i className='fa fa-search'></i></span>
                <input type='search' placeholder='Search for a country...' onChange={handleSearch} style={input} />
            </div>
            <div className='filter' style={filter}>
                <p onClick={handleFiltered} >{ option === 'All' ?  'Filtered by Region' : option}{arrows}</p>
                <ul className={filtered} style={input}>
                    {options.map(option => {
                        return (
                            <li key={option}
                                onClick={handleSelected}>
                                {option}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SrchFill