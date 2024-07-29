const container = document.querySelector('.container')
const getCountries=(country)=>{
    const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`)

request.send();

request.addEventListener('load',()=>{
    const countriesData = JSON.parse(request.response)[0];
   console.log(countriesData);
   
    const html=`
    <div class='card'>
    <h1 class='text-card'>${countriesData.name.common}</h1>
    <div class='img-card-container'>
    <img class='img-card' src="${countriesData.flags.svg}"/>
    </div>
    <h3 class='text-card-2'>  پایتخت :  ${countriesData.capital}<h3/>
    <h3 class='text-card-2'> قاره  :  ${countriesData.continents}</h3>
    <h3 class='text-card-2'> جمعیت :   ${countriesData.population}</h3>
   
    </div>
    `;
    container.insertAdjacentHTML('beforeend',html)
});

};
getCountries('usa');
getCountries('lau');
getCountries('can');
getCountries('ir');
getCountries('afg');


