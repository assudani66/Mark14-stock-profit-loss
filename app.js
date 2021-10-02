var initialPrice = document.querySelector("#intial-price");
var stocks = document.querySelector("#number-of-stocks");
var currentPrice = document.querySelector("#current-price");
var calculateBtn = document.querySelector("#calculate-btn");
var output = document.querySelector("#output-box");

function outputHide()
{
    output.style.display = "none";
}

outputHide();

function calculator(initialPrice, stocks, currentPrice)
{
    var totalInitialPrice = initialPrice.value * Number(stocks.value);
    var totalCurrentPrice = currentPrice.value * Number(stocks.value);

    if(totalCurrentPrice > totalInitialPrice)
    {
        var profit = totalCurrentPrice - totalInitialPrice;
        var profitPercent = (profit / totalInitialPrice) * 100;

        showOutputMessage(`Your Profit is ${profit} and Profit Percentage ${profitPercent.toFixed(2)}%`, 'green');
    }
    else if(totalCurrentPrice < totalInitialPrice)
    {
        var loss = totalInitialPrice - totalCurrentPrice ;
        var lossPercent = (loss/ totalInitialPrice) * 100;
        showOutputMessage(`Your Loss is ${loss} and Loss Percentage ${lossPercent.toFixed(2)}%`, 'red');
    }
    else
    {
        showOutputMessage("NO GAIN OR LOSS", 'black');
    }
}


calculateBtn.addEventListener("click", function() {

    if(initialPrice.value && currentPrice.value && stocks.value)
    {
        if(initialPrice.value > 0 && currentPrice.value > 0 && stocks.value > 0){
            calculator(initialPrice, stocks, currentPrice);
        }
        else if(initialPrice.value < 0 || currentPrice.value < 0 || stocks.value < 0)
        {
            errorHandler("Please input only positive values!");
        }
        else if(initialPrice.value == 0 || currentPrice.value == 0 || stocks.value == 0)
        {
            alert("Please fill out all Fields!");
        }
        else {
            errorHandler("Input cannot be a alphabet, Please input a positive number")
        }
    }
});


function errorHandler(error)
{   
    output.style.display = "block";

    output.innerText = error;
    output.style.color = 'black';

}

function showOutputMessage(message, colour){
    output.style.display = "block";

    output.style.color = colour;

    output.innerText = message;
}