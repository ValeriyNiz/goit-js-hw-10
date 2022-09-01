import { Notify } from 'notiflix/build/notiflix-notify-aio';
import countryInfo from '../templates/country-info.hbs'

export const fetchCountries = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(resp => {    
      if (resp.status === 404) {
        Notify.failure('Oops, there is no country with that name')
        return
      }      
      return resp.json();
    })  
    .then(name => {
      if (name.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.')
      }
      console.log(name);
      const markup = countryInfo(name)
      console.log(markup);
    })
    
}
