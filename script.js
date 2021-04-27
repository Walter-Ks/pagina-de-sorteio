

let np = ["Walter","Maira","Jose","Carlos","Kiel","Mateus","Antônio","Enzo","Ian","Augusto","Erick","Isaac","Breno","Felipe"]

function sortear() {
    
    let pessoas = np.length;

    let ns = Math.floor(Math.random() * pessoas);

    document.getElementById("pessoasSorteada").innerHTML = np[ns];


}

function h1() {

    let inp = document.getElementById('inp');
    let h = document.getElementsByTagName("h1")[0];
    h.innerText = inp.value;

}

