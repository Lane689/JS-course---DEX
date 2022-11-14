API_URL = 'https://api.coinpaprika.com/v1/coins'
API_URL1 = 'https://api.1inch.exchange/v3.0/1/tokens'

async function getTop10() {
    // coinpaprika
    let response = await fetch(API_URL);
    let data = await response.json();
    //let tokenList = Object.values(data)
    let listItems = data.filter(token => token.rank <= 10 && token.rank >= 1).map(token => token.symbol);
    //console.log(data.name)
            
            //.map()
    console.log(listItems);

    // 1inch
    
    
    document.body.innerHTML = 
        `<label for="fromCoin">From:</label>
        <input placeholder="pick coin" type="text" list="cityname">
        <datalist id="coinName">

        </datalist>
        `
    
}

async function getAddresses(tickerList){
    let response1 = await fetch(API_URL1)
    let tokens = await response1.json()
    let addrs = Object.values(tokens.tokens)
    //let top10 = tokens.filter(token => token.address  ).map(token => token.symbol);
    //console.log("addrs", addrs)
    return addrs.filter(token => tickerList.includes(token.symbol))
}

getTop10()
    .then(getAddresses)
    .then(console.log)
