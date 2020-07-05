// DOM elements
const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo = formSearch.querySelector('.input__cities-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to');


// data
const citiesApi = 'http://api.travelpayouts.com/data/en/cities.json',
    proxy = 'https://cors-anywhere.herokuapp.com/',
    API_KEY = '15ef00d0e26d558d43b725b86a985b51',
    calendar = 'http://min-prices.aviasales.ru/calendar_preload';
    // https://support.travelpayouts.com/hc/en-us/articles/203972143-Price-calendar-API


let city = [];

// Methods
const getData = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
    
        if (request.status === 200) {
            callback(request.response)
        }else{
            console.log(error);
        }
    });

    request.send();
};


const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== ''){
        const filterCity = city.filter((item) => {
            if (item.name) {
                const fixItem = item.name.toLowerCase();
                return fixItem.includes(input.value.toLowerCase());
            };
        });

        filterCity.forEach((item) =>{
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item.name;
            list.append(li);
        });
    }   
};

const selectCity = (event, input, dropdown) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        input.value = target.textContent;
        dropdown.textContent = '';
    }
}

// Event Listeners
inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom)
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
})

dropdownCitiesTo.addEventListener('click', (event) => {
    selectCity(event, inputCitiesTo, dropdownCitiesTo);
})


// Methods calls
getData(proxy + citiesApi, (data) => {
    city = JSON.parse(data);
});