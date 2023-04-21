document.addEventListener("DOMContentLoaded", function () {
    /********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
    let CostPerDay = 0;
    let NumberOfDaysSelected = 0;
    let dayButtons = document.querySelectorAll(".day-option");
    let ClearButton = document.getElementById("clear-button");
    let Full = document.getElementById("full");
    let Half = document.getElementById("half");
    let calculatedCost = document.getElementById("calculated-cost");
    /********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
    dayButtons.forEach(function (dayButton) {
        dayButton.addEventListener('click', function (event) {
            if (!event.target.classList.contains('clicked')) {
                NumberOfDaysSelected++;
                event.target.classList.add('clicked');
                dayButton.style.backgroundColor = '#E5AF42';
                console.log("test1");
            } else {
                NumberOfDaysSelected--;
                event.target.classList.remove('clicked');
                dayButton.style.backgroundColor = '';
                console.log("Test2");
            }
            calculateCost();
        });
    });
    /********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
    ClearButton.addEventListener('click', function handleClear(event) {
        dayButtons.forEach(function (dayButton) {
            dayButton.classList.remove('clicked');
            Full.classList.remove('clicked');
            Half.classList.remove('clicked');
            dayButton.style.backgroundColor = '';
            Full.style.backgroundColor = '';
            Half.style.backgroundColor = '';
        });
        NumberOfDaysSelected = 0;
        calculateCost();
    });

    /********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
    Half.addEventListener('click', function (event) {
        CostPerDay = 20;
        Half.style.backgroundColor = '#E5AF42';
        Full.style.backgroundColor = '';
        Half.classList.add('clicked');
        Full.classList.remove('clicked');
        calculateCost();
    });

    function Init(event) {
        CostPerDay = 35;
        Full.style.backgroundColor = '#E5AF42';
        Half.style.backgroundColor = '';
        Full.classList.add('clicked');
        Half.classList.remove('clicked');
        calculateCost();
    }

    Full.addEventListener('click', Init);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


    /********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
    function calculateCost() {
        calculatedCost.innerHTML = CostPerDay * NumberOfDaysSelected;
    }

    Init();
});