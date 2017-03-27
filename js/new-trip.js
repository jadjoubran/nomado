document.getElementById('new-trip-form').addEventListener('submit', function(event){
    event.preventDefault();

    var value = document.getElementById('trip-name').value;   
    if (!value){
        return false;
    }

    var trips = window.localStorage.getItem('trips');
    if (trips){
        trips = JSON.parse(trips);
    }else{
        trips = [];
    }
    
    trips.push({name: value});
    window.localStorage.setItem('trips', JSON.stringify(trips));
    window.location.href = 'trips.html';
});