const numberOfBars = Math.floor(visualViewport.width / 20);
const barContainer = document.getElementById('bar-container');
const barWidth = 10;
const barMargin = 5;
const totalBarWidth = barWidth + barMargin * 2;

const colors = ['#bd70ff', '#8a6eff', '#ff91fb']
const glowColors = ['#291ef7', '#9712fc', '#fc03ad'];

const waveFrequency = 0.1;
// squares
const squaresContainer = document.getElementById('square-container');
const numberOfSquares = 50;

for (let i=0; i < numberOfBars; i++){
    const bar = document.createElement('div');
    bar.classList.add('bar');

    bar.style.height = `${Math.random() * 20 + 20}%`;
    bar.style.left = `${i * totalBarWidth}px`;
    bar.style.bottom = `${Math.sin(i * waveFrequency) * 15 + 30 + (Math.random() * 20 - 10)}%`;

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];
    bar.style.backgroundColor = randomColor;
    bar.style.boxShadow = `0 0 100px ${glowColors[randomColorIndex]}, 0 0 15px ${glowColors[randomColorIndex]}, 0 0 20px ${glowColors[randomColorIndex]}`;


    barContainer.appendChild(bar);
}

for (let i = 0; i < numberOfSquares; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.top = `${Math.random() * 100}%`;
    square.style.left = `${Math.random() * 100}%`;
    squaresContainer.appendChild(square);
}