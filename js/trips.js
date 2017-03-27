var trips = window.localStorage.getItem('trips');

if (!trips){
    trips = [];
}else{
    trips = JSON.parse(trips);
}

var container = document.getElementById('trips');
var template = "";

trips.forEach(function(trip){
    template += `<div class="trip">
    <h2>${trip.name}</h2>
    </div>`;
});
if (template){
    container.innerHTML = template;
}