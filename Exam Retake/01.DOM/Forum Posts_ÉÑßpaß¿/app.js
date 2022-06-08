window.addEventListener("load", solve);

function solve() {  
  let publishBtn = document.getElementById('publish-btn');

  publishBtn.addEventListener('click', function(e) {

    function domElements(type, attributes, ...content) {
      const result = document.createElement(type);
  
      for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
          result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
          result[attr] = value;
        }
      }
  
      content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
      content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
          const node = document.createTextNode(e);
          result.appendChild(node);
        } else {
          result.appendChild(e);
        }
      });
  
      return result;
    }
    let titleInput = document.getElementById('post-title');
    let categoryInput = document.getElementById('post-category');
    let contentInput = document.getElementById('post-content');

    if (titleInput.value == '' || categoryInput.value == '' || contentInput == '') {
      return;
    };

    let reviewListField = document.getElementById('review-list');
    let uploadedListField = document.getElementById('published-list');

    let result = domElements('li', { className: 'rpost' },
      domElements('article', {},
        domElements('h4', {}, titleInput.value),
        domElements('p', {}, `Category: ${categoryInput.value}`),
        domElements('p', {}, `Content: ${contentInput.value}`)),
    );
    
    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'action-btn edit');
    editBtn.textContent = 'Edit';
    result.appendChild(editBtn);
    
    let approveBtn = document.createElement('button');
    approveBtn.setAttribute('class', 'action-btn approve');
    approveBtn.textContent = 'Approve';
    result.appendChild(approveBtn);
    
    let title = titleInput.value;
    let category = categoryInput.value;
    let content = contentInput.value; 
    
    titleInput.value = '';
    categoryInput.value = '';
    contentInput.value = '';
    
    reviewListField.appendChild(result);



    editBtn.addEventListener('click', function(e) {
      titleInput.value = title; 
      categoryInput.value = category;
      contentInput.value = content;

      reviewListField.innerHTML = '';
    });

    approveBtn.addEventListener('click', function(e) {
      editBtn.innerHTML = '';

      while (result.querySelector('button')) {
        let button = document.querySelector('button');
        button.parentElement.removeChild(button);
      }

      uploadedListField.appendChild(result);
    })


  });

  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', function(e) {
    let publishedList = document.getElementById('published-list');
    publishedList.innerHTML = '';
  })

}
