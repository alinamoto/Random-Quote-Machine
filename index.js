function App () {
    
    const [quotes, setQuotes] = React.useState([])
    const [randomQuotes, setRandomQuotes ] = React.useState('')
    const [color, setColor] = React.useState('#FFC75F')
    
   React.useEffect (() => {
        async function fetchData() {
                const response = await fetch('https://type.fit/api/quotes/')
                const data = await response.json()
                setQuotes(data)
                let randomIndex = Math.floor(Math.random() * data.length)
                setRandomQuotes(data[randomIndex])
        }
        fetchData()
    }, []) 

        const getNewQuote = () => {
            const colorArr = [
                "#845EC2",
                '#D65DB1',
                '#FF6F91',
                '#FF9671',
                '#FFC75F',
                '#F9F871',
                '#FF8066',
                '#00C9A7'
             ]
            let randomIndex = Math.floor(Math.random() * quotes.length)
            setRandomQuotes(quotes[randomIndex])
            let randomColor = Math.floor(Math.random() * colorArr.length)
            setColor(colorArr[randomColor])
        }

        return (
            <div style={{backgroundColor: color, minHeight: '100vh'}}>
                <div className = 'inspirational'> Inspirational Quotes </div> 
                <div id='quote-box' className='container pt-4 pb-3'>
                    <div className="card body">
                        {randomQuotes ? 
                            <div>
                                <h3 id='text' className='card-title pl-2 pr-2'>
                                    <i class="fa-solid fa-quote-left">  </i>   
                                    {randomQuotes.text}   
                                    <i class="fa-solid fa-quote-right">  </i>
                                </h3>
                                    
                                {randomQuotes.author ? 
                                <p id='author' className='card-text'>- {randomQuotes.author}</p> 
                                : ""
                                }
                            </div>
                        : <h4>No quote</h4>}
                    </div> 
                    <div className='buttons' > 
                        <button id="new-quote" className="btn btn-danger" onClick={getNewQuote}>New Quote</button> 
                        <a href='https://twitter.com/intent/tweet' target='_blank' id='tweet-quote' className="btn btn-info">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                    
                </div>
            </div>
        )
    
    
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);