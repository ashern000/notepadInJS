var input = document.querySelector("input");
var idTarefa = 0;


input.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        var text = input.value;
        if (text.length == 0) {
            alert("Por favor, ponha um texto!");
        }
        var tarefas = document.querySelector(".tarefas");
        var atividade = document.createElement('div');
        var campText = document.createElement("p");

        campText.setAttribute('class', "texto-tarefa");
        atividade.appendChild(campText);
        atividade.setAttribute("id", 'tarefas-anotada');

        var bntExcluir = document.createElement("button");
        bntExcluir.setAttribute('onclick', 'excluir()');
        bntExcluir.setAttribute('class', 'btnExcluir ');

        var btnEditar = document.createElement("button");
        btnEditar.setAttribute("onclick", "concluir()");
        btnEditar.setAttribute("class", "btnEditar ");

        atividade.appendChild(btnEditar);
        atividade.appendChild(bntExcluir);
        campText.innerHTML = text;
        atividade.appendChild(campText);
        tarefas.appendChild(atividade);
    }
});

function excluir(){
    var tarefasAnotadas = document.querySelector("#tarefas-anotada");
    tarefasAnotadas.parentNode.removeChild(tarefasAnotadas);
}

function concluir(){
   var taf = document.getElementById('tarefas-anotada');
    var taf2 = taf.style.cssText = "text-decoration: line-through; color:magenta;"

}