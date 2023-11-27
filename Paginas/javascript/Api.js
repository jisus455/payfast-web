const pEuros=document.getElementById('euros')

$.ajax({
    url: 'https://api.frankfurter.app/latest?amount=1&from=USD&to=EUR',
    type: 'GET',
    success: function(response) {
      console.log(response);
      pEuros.innerText=response.rates.EUR + " Euros"
    },
    error: function(xhr, status, error) {
      console.error(error);
    }
});