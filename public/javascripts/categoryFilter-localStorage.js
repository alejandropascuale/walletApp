
window.addEventListener('load', async ()=> {
    let categoryFilter = document.querySelector('#category-filter');
    if(localStorage.getItem('categoryValue')){
        let option = document.querySelectorAll('#category-filter option')[localStorage.getItem('categoryValue')];
        option.setAttribute('selected', true);
    }
    categoryFilter.addEventListener('change', (e) => {
        let index = e.target.value;
        console.log(index);
        if(index == 'All'){
            console.log('Estoy intentando eliminar');
            localStorage.removeItem ('operationsFilter');
            localStorage.removeItem ('categoryValue');
        location.reload()
        } else {

            let categoryValue = document.getElementById("category-filter").options.selectedIndex;
            localStorage.setItem("categoryValue", categoryValue);
            const operations = JSON.parse(localStorage.getItem('operationsUser'));
            const operationsFiltered = JSON.stringify(operations.filter(o => o.category == index));
            localStorage.setItem("operationsFilter", operationsFiltered);
            location.reload()
        }
    })
})