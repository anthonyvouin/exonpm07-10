
export default async function retrieveContent() {
    const url = "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1";
  
    const response = await fetch(url);
    return response.json();
  }
  
  
export default async function buffalo() {
    const url2 = "https://api.gill-cote-bistro.fr/specials?_sort=id:asc";
    const reponse2 = await fetch(url);
    return reponse2.json();  
  }
  
  export default async function buffalo3() {
    const url3 = "https://api.gill-cote-bistro.fr/suggestions?_sort=id:asc)";
    const reponse3 = await fetch(url);
    return reponse3.json();  
  }
  
  export default async function buffalo4() {
    const url4 = "https://api.gill-cote-bistro.fr/histoires?_sort=id:asc";
    const reponse4 = await fetch(url);
    return reponse4.json();  
  }
  