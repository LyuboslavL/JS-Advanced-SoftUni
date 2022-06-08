// function solve() {
//   let textElement = document.getElementById('text').value;
//   let requirementElement = document.querySelector('#naming-convention').value;

//   let result = applyNamingConvention(textElement, requirementElement);

//   let spanElement = document.getElementById('result');
//   spanElement.textContent = result; 

//   function applyNamingConvention(text, convention) {
//     let conventionSwitch = {
//       'Pascal Case': () => text 
//                       .toLowerCase()
//                       .split(' ')
//                       .map(x => x[0].toUpperCase() + x.slice(1))
//                       .join(''),
//       'Camel Case': () => text
//                       .toLowerCase()
//                       .split(' ')
//                       .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
//                       .join(''),
//       default: () => 'Error!'
//     };

//     return (conventionSwitch[convention] || conventionSwitch.default)();
//   }

// }

// function solve() {
//   let textElement = document.querySelector('#text').value.split(' ').map(x => x.toLowerCase());
//   let namingConventionElement = document.getElementById('naming-convention').value;

//   let result = '';

//   if (namingConventionElement === 'Camel Case') {
//     for (let i = 0; i < textElement.length; i++) {
//       if (i === 0) {
//         result += textElement[i];
//       } else {
//         let word = textElement[i][0].toUpperCase() + textElement[i].slice(1);
//         result += word;
//       }
//     }
//   } else if (namingConventionElement === 'Pascal Case') {
//     for (let i = 0; i < textElement.length; i++) {
//       let word = textElement[i][0].toUpperCase() + textElement[i].slice(1);
//       result += word;
//     }
//   } else {
//     result = 'Error!';
//   }

//   let resultElement = document.querySelector('#result');
//   resultElement.textContent = result; 
// }

function solve() {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  let inputedText = document.querySelector('#text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  
  if (conventionElement === 'Pascal Case') {
    inputedText = inputedText.split(' ').map(capitalize).join('');
    resultElement.textContent = inputedText;
  } else if (conventionElement === 'Camel Case') {
    inputedText = inputedText.split(' ');
    let firstWord = inputedText[0].toLowerCase();
    let restWords = inputedText.slice(1).map(capitalize).join('');
    resultElement.textContent = firstWord + restWords;
  } else {
    resultElement.textContent = 'Error!';
  }
}