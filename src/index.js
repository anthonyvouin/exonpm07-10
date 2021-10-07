import buffaloSpecial from './special.js';
import buffaloSuggestions from './suggestions.js';
import buffaloHistoires from './histoires.js';


async function showContent() {
  const content = await buffaloSpecial();
  const url = "https://api.gill-cote-bistro.fr"
  try {
    
    for(let i=0; i<content.length ; i++) {

      let elt = document.createElement('p');
      elt.textContent = content[i].title;
      
      let image = document.createElement('img');
      image.setAttribute('src',url + content[i].image.url)
  
      document.getElementsByTagName('body')[0].appendChild(elt);
      document.getElementsByTagName('body')[0].appendChild(image);
    }

   
    
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();