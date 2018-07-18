let total = document.querySelector('#total');

function moneyTextToFloat(text) {
  let cleanText = text.replace('$ ', '').replace(',', '.');
  
  return parseFloat(cleanText);
}

