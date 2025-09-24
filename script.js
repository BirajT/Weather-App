    let btn=document.getElementById("getValueBtn")
    let textarea=document.getElementById("getValue")
    let resultDiv = document.getElementById("result");
btn.addEventListener("click",()=>{
    let cityName=textarea.value.trim();
    if (cityName==="")
{
    resultDiv.innerHTML = "⚠️ Please type a city name.";
        return;
}
let p=fetch(`http://goweather.xyz/weather/${cityName}`)
p.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(`The weather of city ${data}`);
     resultDiv.innerHTML = `
            <h3>Weather in ${cityName}</h3>
            <p>Temperature: ${data.temperature}</p>
            <p>Wind: ${data.wind}</p>
            <p>Description: ${data.description}</p>
          `;
})

})