function sumTable() {
    // let resultElement = document.getElementById('sum');
    // let pricesElement = Array.from(document.querySelectorAll('table tr')).slice(1, -1);
    // // console.log(pricesElement.join(' '));
    // let finalSum = 0;
    // for (let i = 0; i < pricesElement.length; i++) {
    //     let current = pricesElement[i];
    //     finalSum += Number(current.lastElementChild.textContent);
    // }
    // resultElement.textContent = finalSum;

    let rows = [...document.querySelectorAll('table tr')].slice(1, -1);
    document.getElementById('sum').textContent = rows.reduce((sum, row) => {
        return sum + Number(row.lastElementChild.textContent);
    }, 0);
    
    // let rows = [...document.querySelectorAll('table tr')];
    // let sum = 0;
    // for (let i = 1; i < rows.length - 1; i++) {
    //     let col = rows[i].children;
    //     sum += Number(col[col.length - 1].textContent);
    // }

    // document.getElementById('sum').textContent = sum;

}