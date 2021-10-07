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
  
      let description = document.createElement('p');
      description.textContent = content[i].description;

      document.getElementsByTagName('body')[0].appendChild(elt);
      document.getElementsByTagName('body')[0].appendChild(image);
      document.getElementsByTagName('body')[0].appendChild(description);

    }  
    
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();




























async function showContent2() {
  const content2 = await buffaloSuggestions();
  
  const url = "https://api.gill-cote-bistro.fr"
  try {
    
    for(let i=0; i<content2.length ; i++) {

      let elt = document.createElement('p');
      elt.textContent = content2[i].suggestionsStarter;    


      let price = document.createElement('p');
      price.textContent = content2[i].suggestionsStarterPrice;    


      document.getElementsByTagName('body')[0].appendChild(elt);
      document.getElementsByTagName('body')[0].appendChild(price);

      
      
    }  
    
  } catch (e) {
    console.log('Error', e);
  }
}

showContent2();