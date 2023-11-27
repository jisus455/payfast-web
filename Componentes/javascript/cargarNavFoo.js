
async function cargarComponentes(){  
  const navbarResponse = await fetch('../Componentes/navbar.html');
  const navbarHtml = await navbarResponse.text();

  const footerResponse = await fetch('../Componentes/footer.html');
  const footerHtml = await footerResponse.text();

  
  const navbarContainer = document.getElementById('navbar');
  navbarContainer.innerHTML = navbarHtml;

  const footerContainer = document.getElementById('footer');
  footerContainer.innerHTML = footerHtml;

}

cargarComponentes();