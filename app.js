const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        let loss = (initial - current)*quantity;
        let lossPercentage = (loss/ initial)*100
        // console.log(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`)
        outputBox.innerHTML = `Hey the loss is ${loss} and the percent is ${lossPercentage}%`

    }else if(current > initial){
            let profit = (current - initial)*quantity
            let profitPercentage = (profit/initial)*100
            // console.log(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`)
            outputBox.innerHTML = `Hey the profit is ${profit} and the percent is ${profitPercentage}%`
        }
        else{
            // console.log('No pain no gain and no gain no pain')
            outputBox.innerHTML = 'No pain no gain and no gain no pain'
        }
    }

    function submitHandler(){
        let ip = initialPrice.value;
        let sq = stocksQuantity.value;
        let cp = currentPrice.value;
        calculateProfitAndLoss(ip, sq, cp);
    }
     submitBtn.addEventListener("click", submitHandler)