
window.addEventListener('load', async ()=> {
    let categoryFilter = document.querySelector('#category-filter');
    if(localStorage.getItem('categoryValue')){
        let option = document.querySelectorAll('#category-filter option')[localStorage.getItem('categoryValue')];
        option.setAttribute('selected', true);
    }
    categoryFilter.addEventListener('change', (e) => {
        let index = e.target.value;
        if(index == 'All'){
            localStorage.removeItem ('operationsFilter');
            localStorage.removeItem ('categoryValue');
        location.reload()
        } else {
            let categoryValue = document.getElementById("category-filter").options.selectedIndex;
            localStorage.setItem("categoryValue", categoryValue);
            const operations = JSON.parse(localStorage.getItem('operationsUser'));
            console.log(operations.filter(o => o.category == index).length);
            if (operations.filter(o => o.category == index).length == 0){
                localStorage.setItem("operationsFilter", JSON.stringify([{id: 0, detail: 'you do not have registered operations with this category', ammount: 0, date: new Date(), type:'Expense', category: 'Others'}]));    
            } else {
                const operationsFiltered = JSON.stringify(operations.filter(o => o.category == index));
                localStorage.setItem("operationsFilter", operationsFiltered);
            }
            location.reload()
        }
    })
})