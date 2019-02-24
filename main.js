"use strict"

// MAIN DISPLAY OF HTML VIA FUNCTION
function renderCoffee(coffee) {
    var html = '<div class="coffee d-flex">';
    html += '<h2 class="col-sm card card-body bg-secondary" id="java-varietal">' + "java varietal:" + '</h2>';
    html += '<h2 class="col-sm card card-body ml-2 bg-secondary">' + coffee.name + '</h2>';
    html += '<h2 class="col-sm card card-body ml-2 bg-secondary" id="roast-process">' + "roast process:" + '</h2>';
    html += '<p class="col-sm card card-body ml-2 bg-secondary">' + coffee.roast + '</p>';
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
    {id: 1, name: 'light-city', roast: 'light     '},
    {id: 2, name: 'half-city', roast: 'light'},
    {id: 3, name: 'cinnamon', roast: 'light'},
    {id: 4, name: 'city', roast: 'medium'},
    {id: 5, name: 'american', roast: 'medium'},
    {id: 6, name: 'breakfast', roast: 'medium'},
    {id: 7, name: 'high', roast: 'dark'},
    {id: 8, name: 'continental', roast: 'dark'},
    {id: 9, name: 'new-orleans', roast: 'dark'},
    {id: 10, name: 'european', roast: 'dark'},
    {id: 11, name: 'espresso', roast: 'dark'},
    {id: 12, name: 'viennese', roast: 'dark'},
    {id: 13, name: 'italian', roast: 'dark'},
    {id: 14, name: 'french', roast: 'dark'},
];

// THESE ARE THE (MAIN) EVENT LISTENERS OF THE PROGRAM
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var coffeeChoice = document.querySelector('#coffeesSearch');
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees, false);

