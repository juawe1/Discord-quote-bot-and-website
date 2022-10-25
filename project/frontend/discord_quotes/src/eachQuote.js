import React from 'react'

export default function ReadQuote({ quote }) {
  return (
    <div className='quoteContainer'>
        <label>
            {quote}
        </label>
    </div>
  )
}
