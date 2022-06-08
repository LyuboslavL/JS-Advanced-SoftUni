function create(words) {
   // let contentElement = document.getElementById('content');

   // for (let word of words) {
   //    let div = document.createElement('div');
   //    let p = document.createElement('p');
   //    p.textContent = word; 
   //    p.style.display = 'none';
   //    div.appendChild(p);
   //    div.addEventListener('click', function(e) {
   //       let visibleText = e.target;
   //       let paragraph = visibleText.getElementsByTagName('p')[0];
   //       paragraph.style.display = 'none' ? 'block' : 'none';
   //    })
   //    contentElement.appendChild(div);
   let content = document.getElementById('content');

   for (let word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);
      content.appendChild(divElement);
   }

   content.addEventListener('click', function (e) {
      if (e.target.tagName === 'DIV') {
         let paragraph = e.target.querySelector('p');
         paragraph.style.display = 'block';
      }
   })
}

// contentElement.addEventListener('click', function(e) {
//    let visibleText = e.target;
//    let paragraph = visibleText.getElementsByTagName('p')[0];
//    paragraph.style.display = 'none' ? 'block' : 'none';
// })


// Using CLOSURE
function create1(words) {
   let output = document.getElementById('content');
   words.forEach(w => output.appendChild(createText(w)));
   
   function createText(word) {
      let pEl = createElement('p', word);
      pEl.style.display = 'none';

      let divEl = createElement('div', pEl)
      divEl.addEventListener('click', function (e) {
         pEl.style.display = 'block';
      })

      return divEl;
   }

   function createElement(type, content) {
      let result = document.createElement(type);

      if (typeof content === 'string') {
         result.textContent = content;
      } else {
         result.appendChild(content);
      }

      return result;
   }

}