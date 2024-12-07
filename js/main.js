async function search(input) {
    let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=430661a86b934739979213226240612&q=${input}&days=3`);
    if (weather.ok && 400 != weather.status) {
        let weatherApi = await weather.json();
        displayData(weatherApi.location, weatherApi.current),
        displayAnotherData(weatherApi.forecast.forecastday)
    }
}
document.getElementById("search").addEventListener("keyup", input => {
    search(input.target.value)
}
);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayData(search, input) {
    if (null != input) {
         
        var dataOfDate = new Date(input.last_updated.replace(" ", "T"));
        let cartona = `<div class="col-lg-4 pb-5 " style="background-color: #323544;">
        <div class="row p-2" style="background-color: #2D303D;">
          <div class="col-8">
            <span style="color: #BFBCC4;">${days[dataOfDate.getDay()]}</span>
          </div>
          <div class="col-4">
            <span  style="color: #BFBCC4;">${dataOfDate.getDate() + monthNames[dataOfDate.getMonth()]}</span>
          </div>
        </div>
        <h2  style="color: #BFBCC4;" class="pt-4">${search.name}</h2>
        <span class="text-white degree">${input.temp_c}℃</span>
        <div>
          <img src=https:${input.condition.icon} alt="night">
        </div>
        
        <span class="clear fw-bold"${input.condition.text}</span>
        <div class="d-flex justify-content-between align-items-center pt-3 pe-5" style="color: #BFBCC4;">
          <div>
            <img src="./imags/icon-umberella.png" alt="icon-umberella">
          <span>20%</span>
          </div>
          <div>
            <img src="./imags/icon-wind.png" alt="icon-wind">
          <span>18km/h</span>
          </div>
          <div>
            <img src="./imags/icon-compass.png" alt="icon-compass">
          <span>East</span>
          </div>
          
        </div>
      </div>`;
        document.getElementById("rowData").innerHTML = cartona
    }
}
function displayAnotherData(search) {
    let cartona = "";
    for (let i = 1; i < search.length; i++){
        
        if(i===1){
            cartona = `<div class="col-lg-4 pb-5 " style="background-color: #262936; text-align: center;">
        <div class="row p-2" style="background-color: #222530;">
            <span style="color: #BFBCC4; text-align: center;">${days[new Date(search[i].date.replace(" ", "T")).getDay()]}</span>
        </div>
        <div class="p-4">
          <img src="https:${search[i].day.condition.icon}" alt="forecast">
        </div>
        <span class="text-white fw-bold fs-2">${search[i].day.maxtemp_c}</span>
        <span class=" d-block" style="color: #BFBCC4;">${search[i].day.mintemp_c}</span>
        <span class="clear d-block pt-3 fw-bold">${search[i].day.condition.text}</span>
        </div>`;
        }
        else{
            cartona += `<div class="col-lg-4 pb-5 " style="background-color: #323544; text-align: center;">
        <div class="row p-2" style="background-color: #222530;">
            <span style="color: #BFBCC4; text-align: center;">${days[new Date(search[i].date.replace(" ", "T")).getDay()]}</span>
        </div>
        <div class="p-4">
          <img src="https:${search[i].day.condition.icon}" alt="forecast">
        </div>
        <span class="text-white fw-bold fs-2">${search[i].day.maxtemp_c}</span>
        <span class=" d-block" style="color: #BFBCC4;">${search[i].day.mintemp_c}</span>
        <span class="clear d-block pt-3 fw-bold">${search[i].day.condition.text}</span>
        </div>`;
        }
    }
        
    document.getElementById("rowData").innerHTML += cartona
}
search("cairo");
