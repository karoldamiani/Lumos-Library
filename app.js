function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value 

    if (!campoPesquisa) {
        section.innerHTML = `<p class="nao-digitou">Você precisa digitar o nome do feitiço.</p>`;
  return;
        
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tipo = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa e constrói o HTML para cada resultado
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tipo = dado.tipo.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tipo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p>tipo: ${dado.tipo}</p>
                <p class="descricao-meta">${dado.descricao}</p>
                <p>Cena em que foi usado:${dado.uso_notavel} </p>
                <a href="${dado.link_externo}" target="_blank">Saber mais</a>
            </div>
        `;
        }
    }
        if (!resultados) {
            resultados = '<p class="nao-encontrado">Feitiço não encontrado</p>';

    }
    // Insere os resultados construídos no HTML da seção
    section.innerHTML = resultados;
}

