
window.addEventListener('load', async ()=> {
    let categoryFilter = document.querySelector('#category-filter');

    categoryFilter.addEventListener('change', () => {
        let url = `/operations/category-filter/${categoryFilter.value}`;
        location.href = url;
        let categoryValue = '';
        if(categoryValue != null) {
            localStorage.setItem("categoryValue", categoryFilter.value);
        }
    })
    function filter () {
        let options = document.querySelectorAll('#category-filter option');
        let localStorageValue = localStorage.getItem('categoryValue');
        for(let i = 0; i > options.length; i) {
            let optionValue = options[i].value;
            if(optionValue == localStorageValue){
                optionValue.setAttribute('selected', true);
                console.log(optionValue);
            }
        }
    }
    filter();
    /* console.log(options); */
    /* option.setAttribute('selected', true); */
    

    /* let option = document.querySelector(`option[value=${localStorage.getItem('categoryValue')}]`);
    option.setAttribute('selected', true);
    console.log(option); */
    /* let optionsCategorys = document.querySelector('#category-filter').getElementsByTagName('option'); */
    
})