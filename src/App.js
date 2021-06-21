import React from 'react'
import ContriesContext from './components/contriescontext'
import Header from './components/header'
import Main from './components/main'
import { BrowserRouter, Route  } from 'react-router-dom'
import CountryDetails from './components/details'



function App() {


  return (
    <div className="App">
         <BrowserRouter>
            <ContriesContext>
                <Header />
                <Route path='/' exact component={Main} />
                <Route path='/:name' component={CountryDetails} />
              </ContriesContext>
         </BrowserRouter>
    </div>
  );
}

export default App;

/*
<BrowserRouter>
                <CountriesContext>
                  <Header />
                  <Route exact path='/' component={Main} />
                  <Route path='/:name' component={Details} /> 
                </CountriesContext>
            </BrowserRouter>*/
    

