// Created an empty <li> element:
let listElement = document.createElement('li');
// Assigned an ID to the <li> element we created:
listElement.id = 'oaxaca';
// Added text/content to the <li> element:
listElement.innerHTML = 'Oaxaca, Mexico';
// Appended <li> element to the existing <ul id="more-destinations"> element:
document.getElementById('more-destinations').appendChild(listElement);