import * as Carousel from "./Carousel.js";
import axios from "axios";

const breedSelect = document.getElementById("breedSelect");
const progressBar = document.getElementById("progressBar");
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

const API_KEY = "live_APLSY64KFYff5QXgufr9UMpPu1yRw5aiPnxiftOcQHCqQCCA48VWNgNIhBsGiPVV";

async function initialLoad() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds",{
   headers: { "x-api-key": 'live_QQPtzG1j3s6M5IxMy7PQ630GyrkUy1gjbnRrPjNNXQG4fhEOBFalGY20xVdg4g8j'},
  });
  const jsonData = await response.json();

  const breedSelect = document.getElementById("breedSelect");
  console.log(jsonData); 

  jsonData.forEach((breed) => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
  breedSelection()
}
initialLoad()
breedSelection()

breedSelect.addEventListener('change', breedSelection)
async function breedSelection() {
 
  const selectedBreed = breedSelect.value;
  // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${selectedBreed}`, {
    headers: {"x-api-key": 'live_QQPtzG1j3s6M5IxMy7PQ630GyrkUy1gjbnRrPjNNXQG4fhEOBFalGY20xVdg4g8j'}
  })
  const imageData = await response.json();
  console.log(imageData);
  const carousel = document.getElementById('carouselInner');
  carouselInner.innerHTML = '';
  imageData.forEach(image => {
    let imgEl = document.createElement('img');
    imgEl.src = image.url;
    imgEl.alt = "Breed Image"
    carousel.appendChild(imgEl)
    console.log(carousel)
  })
  infoDump.innerHTML = '';
    if (imageData.length > 0 && imageData[0].breeds.length > 0){
      let breed = imageData[0].breeds[0];
      let breedInfo = document.createElement('div');
      infoDump.appendChild(breedInfo);
      breedInfo.innerHTML = `<h2>${breed.name}</h2>
      <p>${breed.description}</p>
      <p><strong>Temperament:</strong> ${breed.temperament}</p>
      <p><strong>Origin:</strong> ${breed.origin}</p>`;
      infoDump.appendChild(breedInfo);
  } 
 
}
