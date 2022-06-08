// function solve() {
//   // Get the text area
//   let textAreaElement = document.querySelector('#input').value;
//   // Find out how many sentences there are by spliting it by '.'
//   let sentences = textAreaElement.split('.')
//                                   .filter(x => x !== '')
//                                   .map(x => x + '.');

//   let paragraphRoof = Math.ceil(sentences.length / 3);
//   let resultDivElement = document.getElementById('output');

//   for (let i = 0; i < paragraphRoof; i++) {
//     resultDivElement.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`;
//   }
// }

function solve() {
  let textElement = document.getElementById('input').value;
  let sentences = textElement.split('.')
    .filter(x => x != '')
    .map(x => x + '.');

  let resultDivElement = document.querySelector('#output');
  let paragraphMax = Math.ceil(sentences.length / 3);

  for (let i = 0; i < paragraphMax; i++) {
    resultDivElement.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`;
  }
}