import {useState} from 'react'

export default function useLocalStorage() {
    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const operations = window.localStorage.getItem('operationsUser')
            return operations ? JSON.parse(operations): ''
        } catch (error) {
            return ''
        }
    })

    const setValue = () => {
        try {
            let addOperationsForm = document.querySelector('#add-operations-form');
            
            let operations = []
            let lastId = 0

            if(localStorage.getItem('operationsUser')) {
                operations = JSON.parse(localStorage.getItem('operationsUser'));
                lastId = operations.length;
            } else {
                operations = [];
            }

            let t = addOperationsForm.elements;
            let operation = {};

            operation.idOperation = lastId + 1;
            operation.detail = t[0].value;
            operation.ammount = Number(t[1].value);
            operation.date = t[2].value;
            operation.type = t[3].value;
            operation.category = t[4].value;

            operations.push(operation);
            setStoredValue (operations)
            window.localStorage.setItem('operationsUser', JSON.stringify(operations));
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return [storedValue, setValue]
}

