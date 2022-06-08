function solve() {
   let btnCreate = document.querySelector('.btn.create');
   // console.log(btnCreate);
   let liArray = [];


   btnCreate.addEventListener('click', function (e) {
      e.preventDefault();

      let author = document.querySelector('#creator');
      let title = document.querySelector('#title');
      let category = document.querySelector('#category');
      let content = document.querySelector('#content');
      // console.log(author, title, category, content);

      let posts = document.querySelector('main>section');
      // console.log(posts);

      let article = document.createElement('article');
      let h1Element = createDomElement('h1', title.value);
      let categoryElement = createDomElement('p', 'Category: ', 'strong', category);
      let creatorElement = createDomElement('p', 'Creator: ', 'strong', author);
      let contentElement = createDomElement('p', content.value);

      article.appendChild(h1Element);
      article.appendChild(categoryElement);
      article.appendChild(creatorElement);
      article.appendChild(contentElement);

      let divButtonsElemenet = document.createElement('div');
      divButtonsElemenet.classList.add('buttons');
      let delButtonElement = createButton('btn', 'Delete');
      delButtonElement.classList.add('delete');
      let archiveButtonElement = createButton('btn', 'Archive');
      archiveButtonElement.classList.add('archive');


      divButtonsElemenet.appendChild(delButtonElement);
      divButtonsElemenet.appendChild(archiveButtonElement);
      article.appendChild(divButtonsElemenet);


      posts.appendChild(article);

      delButtonElement.addEventListener('click', function (e) {
         e.target.parentNode.parentNode.remove();
      });

      archiveButtonElement.addEventListener('click', function (e) {
         let archiveSectionOl = document.querySelector('.archive-section ol');
         archiveSectionOl.innerHTML = '';
         // console.log(archiveSection);
         let titleToArchive = e.target.parentNode.parentNode.querySelector('h1');
         // console.log(titleToArchive.textContent);

         liArray.push(titleToArchive.textContent);
         liArray.sort((a, b) => a.localeCompare(b));

         for (let liItem of liArray) {
            let liElement = createDomElement('li', liItem);
            archiveSectionOl.appendChild(liElement);
         }


         e.target.parentNode.parentNode.remove();
      })

   });

   function createDomElement(element, content, anotherEl, anotherContent) {
      let domEl = document.createElement(element);
      domEl.textContent = content;

      if (anotherEl !== undefined) {
         let strongTag = document.createElement(anotherEl);
         strongTag.textContent = anotherContent.value;
         domEl.appendChild(strongTag);
      };

      return domEl;
   };

   function createButton(cssClass, text) {
      let buttonEl = document.createElement('button');
      buttonEl.textContent = text;
      buttonEl.classList.add(cssClass);

      return buttonEl;
   };
}
