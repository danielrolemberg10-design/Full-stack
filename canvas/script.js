const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

// FUNÇÕES

function desenhar_quadrado(x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(x1, y1, x2, y2, cor, largura = 1) {
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function desenhar_arco(x, y, raio, inicio, fim, cor, preencher = false) {
    ctx.beginPath();
    ctx.arc(x, y, raio, inicio, fim);

    if (preencher) {
        ctx.fillStyle = cor;
        ctx.fill();
    } else {
        ctx.strokeStyle = cor;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

function escrever(texto, x, y, cor) {
    ctx.fillStyle = cor;
    ctx.font = "20px Arial";
    ctx.fillText(texto, x, y);
}

// FUNDO
desenhar_quadrado(0, 0, 300, 300, "#dcdcdc");

// QUADRADOS SUPERIORES
desenhar_quadrado(0, 0, 50, 50, "#3b00ff"); // azul
desenhar_quadrado(250, 0, 50, 50, "#ff1c1c"); // vermelho

// QUADRADOS LATERAIS (meio)
desenhar_quadrado(0, 120, 30, 60, "#66d9d9");
desenhar_quadrado(270, 120, 30, 60, "#66d9d9");

// LINHA CENTRAL
desenhar_linha(0, 150, 300, 150, "black", 2);

// LINHAS DIAGONAIS
desenhar_linha(0, 50, 150, 150, "blue", 2);
desenhar_linha(300, 50, 150, 150, "red", 2);

// QUADRADO CENTRAL
desenhar_quadrado(130, 150, 40, 40, "red");

// CÍRCULO SUPERIOR (azul claro com borda)
desenhar_arco(150, 100, 15, 0, Math.PI * 2, "#00ffff", true);
desenhar_arco(150, 100, 15, 0, Math.PI * 2, "blue");

// ARCOS SUPERIORES
desenhar_arco(150, 150, 50, Math.PI, 2 * Math.PI, "green");
desenhar_arco(150, 150, 75, Math.PI, 2 * Math.PI, "green");

// CÍRCULOS INFERIORES
desenhar_arco(100, 210, 15, 0, Math.PI * 2, "yellow", true);
desenhar_arco(200, 210, 15, 0, Math.PI * 2, "yellow", true);

// ARCO INFERIOR GRANDE
desenhar_arco(150, 300, 60, Math.PI, 2 * Math.PI, "#66d9d9", true);

// DETALHES INFERIORES (escadinha)
desenhar_quadrado(0, 240, 60, 60, "#ffff00");
desenhar_quadrado(240, 240, 60, 60, "black");

// TEXTO
escrever("Canvas", 105, 35, "#333");