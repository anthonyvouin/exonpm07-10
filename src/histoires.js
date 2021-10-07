
  
  export default async function buffaloHistoires() {
    const url = "https://api.gill-cote-bistro.fr/histoires?_sort=id:asc";
    const reponse = await fetch(url);
    return reponse.json();  
  }
  