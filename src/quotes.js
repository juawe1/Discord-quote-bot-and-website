import React from 'react'
import ReadQuote from './eachQuote'

export default function QuotesList({ quotes }) {
  return (
    quotes.map(quote => {
      return <ReadQuote key={quotes.indexOf(quote)} quote={quote}/>
    })
  )
}
