export default async function buffaloSuggestions() {
    const url = "https://api.gill-cote-bistro.fr/suggestions?_sort=id:asc)";
    const reponse = await fetch(url);
    return reponse.json();  
  }
  
  