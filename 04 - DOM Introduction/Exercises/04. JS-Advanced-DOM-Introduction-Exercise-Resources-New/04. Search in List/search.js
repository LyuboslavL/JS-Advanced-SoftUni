function search() {
   let listItems = Array.from(document.querySelectorAll('#towns li'));
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');

   listItems.forEach(x => {
      x.style.fontWeight = '';
      x.style.textDecoration = '';
   })

   let sum = 0;

   for (let li of listItems) {
      if (li.textContent.includes(input)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum++;
         // } else {
         //    li.style.fontWeight = '';
         //    li.style.textDecoration = '';
         // }
      }
   }
   result.textContent = `${sum} matches found`;
}
