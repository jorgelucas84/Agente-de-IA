// Lógica de Abas
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(tab => tab.classList.remove("active"));

    const tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");

    // Mostra a agenda apenas se não for a aba "Início"
    const areaReserva = document.getElementById('area-reserva');
    areaReserva.style.display = (tabName === 'inicio') ? 'none' : 'block';
}

// Seleção de Procedimento/Equipamento
function selecionarProcedimento(elemento, nome, equipamentos, linkNorma) {
    // Desmarcar outros
    document.querySelectorAll('.ensaio-card').forEach(c => c.classList.remove('selected'));
    
    // Marcar atual
    elemento.classList.add('selected');
    document.getElementById('item-selecionado').value = nome;
    
    // Mostrar detalhes
    const detalhes = document.getElementById('detalhes-selecao');
    detalhes.style.display = "block";
    document.getElementById('info-equipamentos').innerHTML = `<strong>Equipamentos:</strong> ${equipamentos}`;
    
    // Rolar para a agenda
    document.getElementById('area-reserva').scrollIntoView({ behavior: 'smooth' });
}

// O restante da lógica de carregarReservas() e reservarLote() 
// permanece igual ao seu código anterior, apenas garantindo que o 
// seletorMaquina pegue o valor do input hidden 'item-selecionado'.
