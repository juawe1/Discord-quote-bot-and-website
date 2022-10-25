
import "./App.css";
import { useState } from 'react'

import QuotesList from './quotes.js'

function App() {
  const [quotes, setQuote] = useState([])

  const handleGetQuotes = () =>{
    fetch("http://localhost:8080/test")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(item => {
          setQuote(prevQuote =>{
            return [...prevQuote, item]
          })
        });
    });
  }

  return(
    <div id="quote-container">
      <h1>Current Stored Quotes:</h1>
      <QuotesList quotes={quotes}/>
      <button onClick={handleGetQuotes}>Get Quotes</button>
    </div>
  )
}

export default App;
