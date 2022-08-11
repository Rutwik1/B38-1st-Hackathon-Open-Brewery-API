// All HTML elements is created with DOM
document.body.innerHTML = `<div class = "heading-container container-fluid">

<header class="heading">
<h1>Breweries</h1>
</header>

<section class="img-section">
<img class="img" src="brewery.jpg" width="100%" height="40%">
</section>
<div>

<div class="brewery-list">
<h3>Brewery Lists -</h3>
</div>

<div class="main-Container" id="mainContainer"></div>

<section class="footer-section">
<footer class="footer">Created By: <strong>Rutwik Kalbandhe</strong></footer>
</section>`;


// function to fetch data from the api
const getData = async() => {
    try {
        const data = await fetch("https://api.openbrewerydb.org/breweries");
        const breweries = await data.json();
        breweries.forEach((brewery)=>{
            displayData(brewery);
        })
    }catch(error) {
        console.log(error);
    } 

}
getData();

const displayData = (obj) => {
    mainContainer.innerHTML+=
    `<div class="container">
    <h3>Brewery Name: ${obj.name}</h3>
    <p>Brewery Type: ${obj.brewery_type}</p>
    <p>Address: ${obj.street}</p>
    <p>Url: ${obj.website_url}</p>
    <p>Phone: ${obj.phone}</p>`
}
