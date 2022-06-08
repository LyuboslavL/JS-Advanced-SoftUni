function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedElement = document.querySelector('#searchField');
      let rowsElement = Array.from(document.querySelectorAll('tbody tr'));
      for (let row of rowsElement) {
         if (row.textContent.includes(searchedElement.value) && searchedElement.value !== '') {
            row.className = 'select';
         }
      }
      searchedElement.value = '';
   }
}
