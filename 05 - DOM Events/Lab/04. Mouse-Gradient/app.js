function attachGradientEvents() {
    let resultElement = document.getElementById('result');
    let boxElement = document.querySelector('#gradient-box');

    boxElement.addEventListener('mousemove', boxMove);
    boxElement.addEventListener('mouseout', boxOut);

    function boxMove(e) {
        let position = e.offsetX / (e.target.clientWidth - 1);
        position = Math.trunc(position * 100);
        resultElement.textContent = position + '%';
    }

    function boxOut(e) {
        resultElement.textContent = '';
    }
}