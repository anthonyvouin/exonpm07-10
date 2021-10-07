export default async function buffaloSpecial() {
    const url = "https://api.gill-cote-bistro.fr/specials?_sort=id:asc";
    const reponse = await fetch(url);
    return reponse.json();  
  }
  
 