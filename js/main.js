
let users=document.querySelector(".container")


let z = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
z.then((response)=>{
console.log(response);
return response.json()
}).then((info)=>{
console.log(info);
// users.innerHTML="";
info.Search.forEach(elem => {
    console.log(elem.Title)
    users.innerHTML+=`
    <div class="grad">
    <div id="box">
    <div class="content">
      <img
        id="poster"
        src="${elem.Poster}"
        alt="img"
      />
      <h2 id="title">${elem.Title}</h2>
      <h3 id="year">Year: ${elem.Year}</h3>
    </div>
    </div>
  `
})
}).catch((err)=>{
console.log(err);
 }).finally(()=>{
    alert("Ваш запрс прилетел")
})