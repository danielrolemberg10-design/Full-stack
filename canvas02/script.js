const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

// FUNÇÕES

function desenhar_quadrado(x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function desenhar_arco(x, y, raio, inicio, fim, cor, preencher = false) {
    ctx.beginPath();
    ctx.arc(x, y, raio, inicio, fim);

    if (preencher) {
        ctx.fillStyle = cor;
        ctx.fill();
    } else {
        ctx.strokeStyle = cor;
        ctx.stroke();
    }
}

function desenhar_triangulo(x1, y1, x2, y2, x3, y3, cor) {
    ctx.fillStyle = cor;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

// DESENHO

// céu
desenhar_quadrado(0, 0, 300, 300, "#87d3b2");

// chão
desenhar_quadrado(0, 180, 300, 120, "#808080");

// rio (canto esquerdo)
desenhar_arco(0, 250, 80, 0, Math.PI * 2, "#5a82d6", true);
desenhar_quadrado(0, 250, 180, 50, "#5a82d6");

// sol
desenhar_arco(230, 70, 40, 0, Math.PI * 2, "#f2f23a", true);

// casa
desenhar_quadrado(110, 140, 80, 60, "#8b4b1f");

// telhado
desenhar_triangulo(110, 140, 150, 100, 190, 140, "#e66b4c");

// porta
desenhar_quadrado(140, 160, 20, 40, "#5a2e0f");

// janelas
desenhar_quadrado(120, 150, 20, 15, "#87ceeb");
desenhar_quadrado(160, 150, 20, 15, "#87ceeb");

// árvore esquerda
desenhar_quadrado(40, 150, 20, 50, "#8b4b1f");
desenhar_arco(50, 140, 25, 0, Math.PI * 2, "#3c8d2f", true);

// árvore direita
desenhar_quadrado(240, 160, 20, 40, "#8b4b1f");
desenhar_arco(250, 150, 25, 0, Math.PI * 2, "#3c8d2f", true);