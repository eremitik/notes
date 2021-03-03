const ticker = {                                                                                                                              
  'BTC': 'bitcoin',                                                                                                                           
  'ETH': 'ethereum',                                                                                                                          
  'UNI': 'uniswap'                                                                                                                            
}                                                                                                                                             
const arrayTheTickers = (ticker) => {                                                                                                         
  let tickerArr = []                                                                                                                          
  let tickers = Object.values(ticker)                                                                                                         
  for(let i=0; i<tickers.length; i++){                                                                                                        
    tickerArr.push(axios.get(`https://api.coingecko.com/api/v3/coins/${tickers[i]}/market_chart?vs_currency=usd&days=7&interval=daily`))      
  }                                                                                                                                           
  return tickerArr                                                                                                                            
}                                                                                                                                             
const arrayOfLinks = arrayTheTickers(ticker)                                                                                                  
console.log('arrayOfLinks', arrayOfLinks)                                                                                                     
                                                                                                                                              
const tick = 'uniswap'                                                                                                                        
const trialLink = axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily')              
const trialLink2 = axios.get(`https://api.coingecko.com/api/v3/coins/${tick}/market_chart?vs_currency=usd&days=7&interval=daily`)             
                                                                                                                                              
function App() {                                                                                                                              
                                                                                                                                              
  const [coinx, setCoinx] = useState([])                                                                                                      
  const [coins, setCoins] = useState([])                                                                                                      
  const [coinz, setCoinz] = useState([])                                                                                                      
                                                                                                                                              
  useEffect(()=>{                                                                                                                             
    axios                                                                                                                                     
      .all(arrayOfLinks)                                                                                                                      
      .then(axios.spread((...u)=>{                                                                                                            
        let objU = []                                                                                                                         
        for(let i=0; i<3; i++){                                                                                                               
          objU.push(...u[i].data.prices)                                                                                                      
        }                                                                                                                                     
        console.log('assss', objU)                                                                                                            
        setCoinx(objU)                                                                                                                        
      }))                                                                                                                                     
      .catch(error => console.log('error'));                                                                                                  
  }, []);                                                                                                                                     
  console.log('LASTBOSS', coinx)                                                                                                              
                                                                                                                                              
                                                                                                                                              
  useEffect(()=>{                                                                                                                             
    axios                                                                                                                                     
      .all([trialLink, trialLink2])                                                                                                           
      .then(axios.spread((...u)=>{                                                                                                            
        let objU = []                                                                                                                         
        for(let i=0; i<2; i++){                                                                                                               
          objU.push(...u[i].data.prices)                                                                                                      
        }                                                                                                                                     
        setCoins(objU)                                                                                                                        
      }))                                                                                                                                     
      .catch(error => console.log('error'));                                                                                                  
  }, []);                                                                                                                                     
  console.log('trying', coins)                                                                                                                
                                                                                                                                              
                                                                                                                                              
  useEffect(()=>{                                                                                                                             
    axios                                                                                                                                     
      .get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily`)                               
      .then(res=>setCoinz(res.data.prices))                                                                                                   
      .catch(error => alert('error'));                                                                                                        
  }, []);                                                                                                                                     
  console.log('coinzzz', coinz)                                                                                                               
