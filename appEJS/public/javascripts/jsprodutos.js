function revelarAlgo() {
  const elemento = document.getElementById("algo");

  if (elemento.innerHTML === "Aqui você poderá comprar tudo que deseja") {
    elemento.innerHTML = "PENSA NUM BIXO CURIOSO!!";
    console.log("O bixo é tão curioso que veio até aqui para procurar algo.")
  } else {
    elemento.innerHTML = "Aqui você poderá comprar tudo que deseja";
    console.log("Agora voltou ao normal, mas ainda sim é um bixo curioso!!");
  }
}


function proximaPagina() { 
    window.location.href = "/produtos/alimentos";
    window.alert("Você será redirecionado para a página de alimentos");
}

function mudarCor() {
  const body = document.getElementById("corpo");
  const textos = document.querySelectorAll("main h2, main p");

  const isEscuro = body.style.backgroundColor === "black";
  body.style.backgroundColor = isEscuro ? "white" : "black";
  textos.forEach((el) => (el.style.color = isEscuro ? "black" : "white"));

  console.log("Fundo: " + body.style.backgroundColor + ", texto: " + textos[0]?.style.color);
}
