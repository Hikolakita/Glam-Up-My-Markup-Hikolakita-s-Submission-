
// Create an image element for the panda
var img = document.createElement("img");
img.src = "panda_opened-eye.png";
img.classList.add("panda");
document.body.appendChild(img);

// Initialize a variable to track the state of the panda eye image
var isPandaEye = false;

// Function to switch between panda images
function switchImage() {
    if (isPandaEye) {
        img.src = "panda_opened-eye.png";
        isPandaEye = false;
    } else {
        img.src = "Panda_closed-eye.png";
        isPandaEye = true;
        setTimeout(function() {
            img.src = "panda_opened-eye.png";
            isPandaEye = false;
        }, 150);
    }
}

// Set interval to switch panda images randomly
setInterval(switchImage, Math.floor(Math.random() * 4000) + 2000);

// Create a paragraph element for the summer camp heading
var paragraph = document.createElement("p");
var textNode = document.createTextNode("Summer \n Camp !");
paragraph.appendChild(textNode);
paragraph.classList.add('summer-camp');
document.body.appendChild(paragraph);

var thankYouPopup = document.createElement("div");
var thankYouPopup_textNode = document.createTextNode("Thank you!");
thankYouPopup.appendChild(thankYouPopup_textNode);
thankYouPopup.classList.add('thank-you');
document.body.appendChild(thankYouPopup);
// Event listeners for textarea focus and blur events
const foodAllergiesTextarea = document.getElementById('food-allergies');
foodAllergiesTextarea.addEventListener('focus', function() {
    document.querySelector('label[for="food-allergies"]').style.color = 'black';
    document.querySelector('label[for="food-allergies"]').classList.add('focused_allergies');
});

foodAllergiesTextarea.addEventListener('blur', function() {
    document.querySelector('label[for="food-allergies"]').style.color = '#7a7a7a';
    document.querySelector('label[for="food-allergies"]').classList.remove('focused_allergies');
});

const additionalInfoTextarea = document.getElementById('additional-info');
additionalInfoTextarea.addEventListener('focus', function() {
    document.querySelector('label[for="additional-info"]').style.color = 'black';
    document.querySelector('label[for="additional-info"]').classList.add('focused_info');
});

additionalInfoTextarea.addEventListener('blur', function() {
    document.querySelector('label[for="additional-info"]').style.color = '#7a7a7a';
    document.querySelector('label[for="additional-info"]').classList.remove('focused_info');
});

const activitySelectSelection = document.getElementById('activity-select');
activitySelectSelection.addEventListener('focus', function() {
    document.querySelector('label[for="activity-select"]').style.color = 'black';
    document.querySelector('label[for="activity-select"]').classList.add('focused_activity');
});

activitySelectSelection.addEventListener('blur', function() {
    document.querySelector('label[for="activity-select"]').style.color = '#7a7a7a';
    document.querySelector('label[for="activity-select"]').classList.remove('focused_activity');
});


document.addEventListener("DOMContentLoaded", function() {
    var campForm = document.getElementById("camp-form");
    
    campForm.addEventListener("submit", function(event) {
        event.preventDefault();


    });
});


var submitButtons = document.querySelectorAll('button[type="submit"]');

submitButtons.forEach(function(button) {
    // Add an event lister to submit button.
    button.addEventListener('click', function() {
        // Show 'Thank you!' popup.
        thankYouPopup.classList.add('animation');
    });
});


