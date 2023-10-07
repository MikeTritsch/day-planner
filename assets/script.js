var currentDate = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDate);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

    $('#hour-9').children().eq(2).click(function() {
        console.log($('#hour-9').children().eq(1).val());
        localStorage.setItem("Hour 9", JSON.stringify($('#hour-9').children().eq(1).val()));
    });

    function renderNine() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 9"));
        if (hourStored !== null) {
            $('#hour-9').children().eq(1).val(hourStored);
        }
    }
    renderNine();
    
    $('#hour-10').children().eq(2).click(function() {
        console.log($('#hour-10').children().eq(1).val());
        localStorage.setItem("Hour 10", JSON.stringify($('#hour-10').children().eq(1).val()));
    });

    function renderTen() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 10"));
        if (hourStored !== null) {
            $('#hour-10').children().eq(1).val(hourStored);
        }
    }
    renderTen();

    $('#hour-11').children().eq(2).click(function() {
        console.log($('#hour-11').children().eq(1).val());
        localStorage.setItem("Hour 11", JSON.stringify($('#hour-11').children().eq(1).val()));
    });

    function renderElev() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 11"));
        if (hourStored !== null) {
            $('#hour-11').children().eq(1).val(hourStored);
        }
    }
    renderElev();

    $('#hour-12').children().eq(2).click(function() {
        console.log($('#hour-12').children().eq(1).val());
        localStorage.setItem("Hour 12", JSON.stringify($('#hour-12').children().eq(1).val()));
    });

    function renderTwelve() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 12"));
        if (hourStored !== null) {
            $('#hour-12').children().eq(1).val(hourStored);
        }
    }
    renderTwelve();

    $('#hour-1').children().eq(2).click(function() {
        console.log($('#hour-1').children().eq(1).val());
        localStorage.setItem("Hour 1", JSON.stringify($('#hour-1').children().eq(1).val()));
    });

    function renderOne() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 1"));
        if (hourStored !== null) {
            $('#hour-1').children().eq(1).val(hourStored);
        }
    }
    renderOne();

    $('#hour-2').children().eq(2).click(function() {
        console.log($('#hour-2').children().eq(1).val());
        localStorage.setItem("Hour 2", JSON.stringify($('#hour-2').children().eq(1).val()));
    });

    function renderTwo() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 2"));
        if (hourStored !== null) {
            $('#hour-2').children().eq(1).val(hourStored);
        }
    }
    renderTwo();

    $('#hour-3').children().eq(2).click(function() {
        console.log($('#hour-3').children().eq(1).val());
        localStorage.setItem("Hour 3", JSON.stringify($('#hour-3').children().eq(1).val()));
    });

    function renderThree() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 3"));
        if (hourStored !== null) {
            $('#hour-3').children().eq(1).val(hourStored);
        }
    }
    renderThree();

    $('#hour-4').children().eq(2).click(function() {
        console.log($('#hour-4').children().eq(1).val());
        localStorage.setItem("Hour 4", JSON.stringify($('#hour-4').children().eq(1).val()));
    });

    function renderFour() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 4"));
        if (hourStored !== null) {
            $('#hour-4').children().eq(1).val(hourStored);
        }
    }
    renderFour();

    $('#hour-5').children().eq(2).click(function() {
        console.log($('#hour-5').children().eq(1).val());
        localStorage.setItem("Hour 5", JSON.stringify($('#hour-5').children().eq(1).val()));
    });

    function renderFive() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 5"));
        if (hourStored !== null) {
            $('#hour-5').children().eq(1).val(hourStored);
        }
    }
    renderFive();

    console.log(dayjs().format('hA'));
    console.log($('#hour-9').children().eq(0));

    // if (dayjs().format('hA') === $('#hour9').children().eq(0))
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