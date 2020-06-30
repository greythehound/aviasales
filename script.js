const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo = formSearch.querySelector('.input__cities-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to');

const city = ['Tel-Aviv', 'Haifa', 'Herzlia', 'Nahariya', 'Akko',
                'Jerusalim', 'Hadera', 'Netanya', 'Nazeret',
                'Ashdod', 'Ashkelon', 'Beer-Sheva', 'Modiin'];


const showCity = (input, list) => {
    list.textContent = '';
    if (input.value !== ''){
        
        const filterCity = city.filter((item) => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        });

        filterCity.forEach((item) =>{
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        });
    }   
};


inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';
    }
})