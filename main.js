"use strict"

// MAIN DISPLAY OF HTML VIA FUNCTION
function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex">';
    html += '<h2 class="col-md card card-body bg-secondary" id="java-varietal">' + "java varietal:" + '</h2>';
    html += '<h2 class="col-md card card-body ml-2 bg-secondary">' + coffee.name + '</h2>';
    html += '<h2 class="col-md card card-body ml-2 bg-secondary" id="roast-process">' + "roast process:" + '</h2>';
    html += '<p class="col-md card card-body ml-2 bg-secondary">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//THE POSITIVE ITERATING REFACTOR OF THE COFFEE ARRAY
function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//THE ROAST SELECTION FUNCTION TO ACCURATELY GATHER GROUPING OF ID'S
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//TYPEAHEAD STYLE REFACTOR FOR AUTOMATIC DISPLAY/SEARCH QUERY FUNCTIONALITY

var coffeeSearch = document.getElementById("coffeeSearch");

var searchQuery = function (e) {
    var html = "";
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(coffeeSearch.value.toLowerCase())) {
            html = html + renderCoffee(coffees[i]);
        }
        tbody.innerHTML = html;
    }
};

// SPECIAL KEYUP LISTENER
coffeeSearch.addEventListener("keyup", searchQuery);

// THIS IS THE COFFEE ARRAY/INFORMATION DATABASE.
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light     '},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// THESE ARE THE (MAIN) EVENT LISTENERS OF THE PROGRAM
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var coffeeChoice = document.querySelector('#coffeesSearch');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees, false);

