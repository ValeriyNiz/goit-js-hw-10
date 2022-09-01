import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const searchInput = document.getElementById('search-box');

searchInput.addEventListener('input', debounce(event => {
  fetchCountries(event.target.value.trim())
    .then(data => {
      if (data.status === 404) {
        Notify.failure('Oops, there is no country with that name')
        return
      }
      if (data.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.')
      }
      console.log(data)
    })      
}, DEBOUNCE_DELAY));
