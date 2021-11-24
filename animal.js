function log() {
    alert("Bem vindos ao mundo Twister")
}

function fillHeader() {
    log();

    document.querySelector("body").style.backgroundColor = "#EEE8AA"; 

    document.querySelector(".tit").style.color = "red"; 

    document.querySelector(".texto").style.color = "green"; 

    document.getElementById("minhafoto").src = "fotoperfil.jpeg";

    document.getElementById("sobremim").innerHTML = "<strong>Sobre mim</strong>";

    document.getElementById("nome").innerHTML = "Meu nome é Gislene Sayuri";

    document.getElementById("idade").innerHTML = "Tenho 40 anos";

    document.getElementById("estado").innerHTML = "Sou de São Paulo/Capital";

    document.getElementById("fotorato").src = "rato.png";

    document.getElementById("titulo").innerHTML = "<strong>Twister</strong>";

    document.getElementById("descricao").innerHTML = "O rato Twister, também conhecido como Mercol, Hamster Twister ou simplesmente rato, é inteligente, curioso e adora interagir com o tutor. Seu nome científico é Rattus norvegicus e ele é encontrado originalmente na Europa e Ásia. Hoje, é possível encontrá-lo em lares de todo o mundo!"

    document.getElementById("identificar").innerHTML = "<strong>Como identificar Fêmeas e Machos</strong>";

    document.getElementById("explicacao").innerHTML = "É possível distinguir animais machos de fêmeas, pois os machos possuem testículos. Além disso, as distâncias dos orifícios ânus e vulva são diferentes. Na fêmea os orifícios são mais próximos e nos machos separados"

    document.getElementById("fotosexagem").src = "twistersexo.png";

    document.querySelector("#link").style.backgroundColor = "black"; 

    let text = "Guia Completo";
    let endereco = text.link ("https://blog.cobasi.com.br/rato-twister/");
    document.getElementById("links").innerHTML = endereco;
    document.getElementById("links").style.color = "white";

    let text2 = "Curiosidades";
    let endereco2 = text2.link ("http://rattopedia.blogspot.com/2014/01/twisters-curiosidades-basicas.html");
    document.getElementById("links2").innerHTML = endereco2;

}

