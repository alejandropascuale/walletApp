
window.addEventListener('load', async ()=> {
    let categoryFilter = document.querySelector('#category-filter');
    if(localStorage.getItem('categoryValue')){
        let option = document.querySelectorAll('#category-filter option')[localStorage.getItem('categoryValue')];
        option.setAttribute('selected', true);
    }
    categoryFilter.addEventListener('change', (e) => {
        let url = `/operations/category-filter/${categoryFilter.value}`;
        let index = document.getElementById("category-filter").options.selectedIndex;
        localStorage.setItem("categoryValue", index);
        location.href = url;
    })
})