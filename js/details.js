// const getCountryInfo = async country => {
// 	// console.log(country);
// 	try{
// 		// const countryInfo = await getCountries(`https://restcountries.eu/rest/v2/name/${country}`);
// 		const countryInfo = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
// 		console.log(countryInfo);
// 	}catch(err){
// 		console.log('Error: ', err);
// 	}
// 	console.log(country);
// };//Fin de getCountryInfo()

// Imprime lo que hay despues del hash (#)
// console.log(location.hash);

// Eliminar el hash (#) de la consulta
// Muestra desde la posicion 1 hasta el final
// console.log(location.hash.substring(1));

// const getCountryInfo = async country => {
// 	// console.log(country);
// 	try{
// 		// const countryInfo = await getCountries(`https://restcountries.eu/rest/v2/name/${country}`);
// 		const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
// 		const countryInfo = await res.json(); 
// 		console.log(countryInfo);

// 		const header = document.createElement('div');
// 		header.classList.add('details__header');
// 		const backButton = document.createElement('button');
// 		backButton.classList.add('details__button');
// 		backButton.textContent = 'back';

// 		header.appendChild(backButton);
// 		details.appendChild(header);
// 	}catch(err){
// 		console.log('Error: ', err);
// 	}
// 	console.log(country);
// };//Fin de getCountryInfo()
// getCountryInfo(location.hash.substring(1));



// Lo que se staba haciendo arriba pero ahora con template string:
const details = document.getElementById('details');

const getCountryInfo = async country => {
	try{
		// const countryInfo = await getCountries(`https://restcountries.eu/rest/v2/name/${country}`);
		const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
		// Para parsear a json conrrectamente se le agrega async para
		// que los datos lleguen correctamente y completos a countryInfo
		// Si no al querer mostrarlos no muestra nada (sin el async)
		const countryInfo = await res.json(); 
		console.log(countryInfo);


		// template string
		/*details.innerHTML = `
			<div class="details__header">
				<a href="/" class="">Back</a>
			</div>
			<img id="details-img" src="${countryInfo[0].flags.svg}" />
			<div class="details__info">
				<h2 id="details-title" class="details__title">${countryInfo[0].name.common}</h2>
				<p id="details-native-name" class="details__data">
					<span class="details__bold">Native Name: </span>
					${countryInfo[0].name.nativeName.spa.official}
				</p>
				<p class="details__data">
					<span class="details__bold">Population</span>
					${countryInfo[0].population}
				</p>
				<p class="details__data">
					<span class="details__bold">Region</span>
					${countryInfo[0].region}
				</p>
				<p class="details__data">
					<span class="details__bold">Sub region</span>
					${countryInfo[0].subregion}
				</p>
				<p class="details__data">
					<span class="details__bold">Capital</span>
					${countryInfo[0].capital}
				</p>
				<p class="details__data">
					<span class="details__bold">Top Level Domain</span>
					${countryInfo[0].tld}
				</p>
				<!--
				<p class="details__data">
					<span class="details__bold">Currencies</span>
					${countryInfo[0].currencies[0].name}
				</p>
				<p class="details__data">
					<span class="details__bold">Languages</span>
					${countryInfo[0].languages[0].name}
				</p>-->
				<h3 class="details__border-countries">Border Countries</h3>
					<div class="details__countries-buttons">
						${
							countryInfo[0].borders.map(border => {
								return `<button>${border}</button>`;
							}).join(' ')
						}
					</div>
			</div>
		`*/
		details.innerHTML = `
			<div class="details__header">
				<a href="index.html" class="">Back</a>
			</div>
			<img id="details-img" src="${countryInfo[0].flags.svg}" />
			<div class="details__info">
				<h2 id="details-title" class="details__title">${countryInfo[0].name.common}</h2>
				<p class="details__data">
					<span class="details__bold">Population</span>
					${countryInfo[0].population}
				</p>
				<p class="details__data">
					<span class="details__bold">Region</span>
					${countryInfo[0].region}
				</p>
				<p class="details__data">
					<span class="details__bold">Sub region</span>
					${countryInfo[0].subregion}
				</p>
				<p class="details__data">
					<span class="details__bold">Capital</span>
					${countryInfo[0].capital}
				</p>
				<p class="details__data">
					<span class="details__bold">Top Level Domain</span>
					${countryInfo[0].tld}
				</p>
				<h3 class="details__border-countries">Border Countries</h3>
					<div class="details__countries-buttons">
						${
							countryInfo[0].borders.map(border => {
								return `<button>${border}</button>`;
							}).join(' ')
						}
					</div>
			</div>
		`
	}catch(err){
		console.log('Error: ', err);
	}
	console.log(country);
};//Fin de getCountryInfo()



getCountryInfo(location.hash.substring(1));
/*	*/