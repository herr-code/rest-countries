const countries  = document.getElementById('countries');
const form = document.getElementById('form');
const search = document.getElementById('search');

/*Parte 2*/
const details = document.getElementById('details');

// MODAL?const modal = document.getElementById('modal');

// Funcion que obtiene los datos de url restcountries o 
// una url del usuario por region ejemplo
const getCountries = async (userUrl = '') => {
	// const url = userUrl || 'https://restcountries.eu/rest/v2/all';
	const url = userUrl || 'https://restcountries.com/v3.1/all';
	try{
		const res = await fetch(url);
		const data = await res.json();
		// console.log('Data :', data);
		return data;
	}catch(err){
		// console.log('Error', err);
		// Cuando la busqueda en el input no genera resultados hacer esto
		// getCountries('https://restcountries.eu/rest/v2/all');
	}
}//Fin de getCountries()

// Obtener paises y pintarlos
const paintCountries = async (userUrl = '') => {
	const data = await getCountries(userUrl);
	console.log(data);
	if (data.length > 0) {
		let  fragment = document.createDocumentFragment();

		// Item guarda en un array los datos de cada pais
		data.forEach(item => {
		console.log('Contenido de cada item: ' , item);
		// return

			const section = document.createElement('section');
			section.classList.add('country');
			// const formatName = item.name.replace(/^$|\s+/g, '%20');
			const formatName = item.name.common;
			section.dataset.country = formatName;
			const flag = document.createElement('img');
			flag.src = item.flags.svg;
			console.log("BAndera", item.flag)
			section.appendChild(flag);
			const countryData = document.createElement('div');
			countryData.classList.add('country__info');
			const title = document.createElement('h2');
			title.classList.add('country__title');
			title.textContent = item.name.common;
			countryData.appendChild(title);
			const population = document.createElement('p');
			population.classList.add('country__data');
			population.innerHTML = `<span class="country__bold">Population:</span> ${item.population}`;
			countryData.appendChild(population);
			const region = document.createElement('p');
			region.classList.add('country__data');
			region.innerHTML = `<span class="country__bold">Region:</span> ${item.region}`;
			countryData.appendChild(region);
			const capital = document.createElement('p');
			capital.classList.add('country__data');
			capital.innerHTML = `<span class="country__bold">Capital:</span> ${item.capital}`;
			countryData.appendChild(capital);

			section.appendChild(countryData);
			fragment.appendChild(section);
		});//Fin de data.forEach()

		// quitar contenido no requerido
		countries.innerHTML = '';
		countries.appendChild(fragment);
	} else {
		countries.innerHTML = `<h2>No results for: ${search.value}</h2>`
	}
	
};//Fin de paintCountries()

// Lee lo que esta escrito en el input realtime
const readUserChanges = (data, event) => {
	// console.log(data);
	if (event == 'input' && data.length >= 3) {
		// gestionar una petición
		// paintCountries(`https://restcountries.eu/v3.1/name/${data}`);
		paintCountries(`https://restcountries.com/v3.1/name/${data}`);
	}else if (event == 'select' && (data == 'americas' || data == 'africa' || data == 'europe' || data == 'oceania' || data == 'asia')) {
		console.log('Select', data)
		// paintCountries(`https://restcountries.eu/v3.1/region/${data}`);
		console.log('URL', `https://restcountries.com/v3.1/region/${data}`)
		paintCountries(`https://restcountries.com/v3.1/region/${data}`);
	}
};//Fin de readUserChanges()

// Funcion que solo recupera la informacion del pais
// const getCountryInfo = async country => {
// 	console.log(country);
// 	try{
// 		const countryInfo = await getCountries(`https://restcountries.eu/rest/v2/name/${country}`);
// 		// console.log('countryInfo: ', countryInfo);
// 		// Como es una array debe indicar la posicion
// 		// console.log('countryInfo[0].flag: ', countryInfo[0].flag);
		
// 		// MODAL?modal.innerHTML = ` 
// 		PArte 2
// 		// Vaciar el listado de paises (countries) al hacer click y mostrar
// 		// sólo details
// 		countries.innerHTML = '';
// 		form.classList.add('form--hide');
// 		// MODAL?details.innerHTML = ` `;
// 		details.classList.remove('details--hide');
// 		// MODAL?modal.classList.add('modal--show');
// 	}catch(err){
// 		console.log('Error: ', err);
// 	}
// };//Fin de getCountryInfo()

// Funcion para localizar al padre country y sacar la info para la modal
countries.addEventListener('click', e => {
	let element = '';
	console.log("click en ", e);
	if (e.target.parentElement.classList.contains('country')) {
		element = e.target.parentElement;
	} else if (e.target.parentElement.classList.contains('country__info')) {
		element = e.target.parentElement.parentElement;
	} else if (e.target.classList.contains('country__bold')) {
		element = e.target.parentElement.parentElement.parentElement;
	}
	
	// |getCountryInfo(element.dataset.country);

	// Redirigir a details.js
	location.href = `./country.html#${element.dataset.country}`;
	// modal.classList.toggle('modal--show');
	console.log(element);
});//Fin de countries.addEventListener()

// Evento de cambio para el formulario
form.addEventListener('change', e => {
	if (e.target.value != 'default') {
		console.log("evento", e.srcElement, typeof(e.target));
		console.log(e.target.value);
		readUserChanges(e.target.value, 'select');
	}else {
		paintCountries();
	}
	
});//Fin de form.addEventListener()

form.addEventListener('keyup', e => {
	console.log(e.key);
	if (search.value != '') {
		readUserChanges(search.value, 'input');	
	} else {
		paintCountries();
	}
	
});

/* 
window.addEventListener('load', () => {
	paintCountries();
});*/

// Esta funcion carga mas rapido que la de arriba
document.addEventListener('DOMContentLoaded', () => {
	paintCountries();
});
