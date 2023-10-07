var currentDate = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDate);


var hourNine = $('#hour-9');
var hourTen = $('#hour-10');
var hourElev = $('#hour-11');
var hourTwel = $('#hour-12');
var hourOne = $('#hour-1');
var hourTwo = $('#hour-2');
var hourThree = $('#hour-3');
var hourFour = $('#hour-4');
var hourFive = $('#hour-5');
var saveBtn = $('.saveBtn');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

    $('#hour-9').children().eq(2).click(function() {
        console.log($('#hour-9').children().eq(1).val());
        localStorage.setItem("Hour 9", JSON.stringify($('#hour-9').children().eq(1).val()));
    });

    function renderSchedule() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 9"));
        console.log(hourStored);
        if (hourStored !== null) {
            $('#hour-9').children().eq(1).val(hourStored);
        }
    }

    renderSchedule();
    

    $('#hour-10').children().eq(2).click(function() {
        console.log($('#hour-10').children().eq(1).val());
        localStorage.setItem("Hour 10", ($('#hour-10').children().eq(1).val()));
    });
    


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});