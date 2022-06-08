// function solve() {
//   let textareas = document.querySelectorAll('textarea');
//   let buttons = document.querySelectorAll('button');
//   let tbody = document.querySelector('tbody');

//   // create function for DOM element creations

//   buttons[0].addEventListener('click', function (e) {
//     let arr = JSON.parse(textareas[0].value);

//     for (let el of arr) {
//       // create table row
//       let tr = document.createElement('tr');

//       // create image cell
//       let tdImage = document.createElement('td');
//       let image = document.createElement('img');
//       image.setAttribute('src', el.img);
//       tdImage.appendChild(image);

//       // create name cell
//       let tdName = document.createElement('td');
//       let pName = document.createElement('p');
//       pName.textContent = el.name;
//       tdName.appendChild(pName);

//       // create price cell
//       let tdPrice = document.createElement('td');
//       let pPrice = document.createElement('p');
//       pPrice.textContent = el.price;
//       tdPrice.appendChild(pPrice);

//       // create decor cell
//       let tdDecor = document.createElement('td');
//       let pDecor = document.createElement('p');
//       pDecor.textContent = el.decFactor;
//       tdDecor.appendChild(pDecor);

//       // create checkbox
//       let tdCheck = document.createElement('td');
//       let input = document.createElement('input');
//       input.setAttribute('type', 'checkbox');
//       tdCheck.appendChild(input);

//       tr.appendChild(tdImage);
//       tr.appendChild(tdName);
//       tr.appendChild(tdPrice);
//       tr.appendChild(tdDecor);
//       tr.appendChild(tdCheck);

//       tbody.appendChild(tr);
//     }
//     });

//   buttons[1].addEventListener('click', function(e) {
//     let furniture = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked'))
//       .map(input => Array.from(input.parentNode.parentNode));

//     let result = {
//       bought: [],
//       totalPrice: 0,
//       decorationFactorSum: 0
//     };

//     for (let row of furniture) {
//       let cells = row.children;
//       let name = cells[0].children[1].textContent; 
//       result.bought.push(name);
//     }
//   })
// }

function solve() {
  let textareas = document.querySelectorAll('textarea');
  let buttons = document.querySelectorAll('button');
  let tableBody = document.querySelector('tbody');

  buttons[0].addEventListener('click', function (e) {
    let arr = JSON.parse(textareas[0].value);

    for (let el of arr) {
      let tr = document.createElement('tr');

      let tdImage = document.createElement('td');
      let image = document.createElement('img');
      image.setAttribute('src', el.img);
      tdImage.appendChild(image);

      let tdName = document.createElement('td');
      let name = document.createElement('p');
      name.textContent = el.name;
      tdName.appendChild(name);

      let tdPrice = document.createElement('td');
      let price = document.createElement('p');
      price.textContent = el.price;
      tdPrice.appendChild(price);

      let tdDecFactor = document.createElement('td');
      let decorationFactor = document.createElement('p');
      decorationFactor.textContent = el.decFactor;
      tdDecFactor.appendChild(decorationFactor);

      let tdCheckbox = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      tdCheckbox.appendChild(checkbox);

      tr.appendChild(tdImage);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdDecFactor);
      tr.appendChild(tdCheckbox);

      tableBody.appendChild(tr);
    }
  })

  buttons[1].addEventListener('click', function (e) {
    let markedFurniture = Array.from(tableBody.querySelectorAll('input[type="checkbox"]:checked'))
      .map((input => input.parentElement.parentElement));

    let result = {
      furniture: [],
      totalPrice: 0,
      decFactor: 0
    };

    for (let row of markedFurniture) {
      let productName = row.children[1].textContent;
      result.furniture.push(productName);

      let productPrice = row.children[2].textContent;
      result.totalPrice += Number(productPrice);

      let productDecFactor = row.children[3].textContent;
      result.decFactor += Number(productDecFactor);
    }

    textareas[1].value = `Bought furniture: ${result.furniture.join(', ')}\nTotal price: ${(result.totalPrice).toFixed(2)}\nAverage decoration factor: ${result.decFactor / result.furniture.length}`;
  });
}

function closureSolve() {
  let buttons = document.querySelectorAll('button');
  let textareas = document.querySelectorAll('textarea');
  let tBody = document.querySelector('table .table tbody');

  let furniture = [];

  buttons[0].addEventListener('click', () => {
    let furnitureArr = JSON.parse(textareas[0].value.trim());
    furnitureArr.forEach(el => {
      let item = createRow(el);
      furniture.push(item);
      tBody.appendChild(item.element);
    });
  });

  buttons[1].addEventListener('click', () => {
    furniture.forEach(el => console.log(el.getValues().name, el.isChecked()));
  });

  function createRow(data) {
    let img = createElement('img');
    img.src = data.img;

    let check = createElement('input');
    check.type = 'checkbox';

    let element = createElement('tr',
      createElement('td', img),
      createElement('td', createElement('p', data.name)),
      createElement('td', createElement('p', data.price)),
      createElement('td', createElement('p', data.decFactor)),
      createElement('td', check)
    );

    function isChecked() {
      return check.checked;
    }

    function getValues() {
      return data;
    }

    return {
      element,
      isChecked,
      getValues
    };
      
  }

  function createElement(type, ...content) {
    let result = document.createElement(type);

    content.forEach(e => {
      if (typeof e === 'string') {
        let node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });

    return result;
  }
}