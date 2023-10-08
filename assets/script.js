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

    $('#hour-13').children().eq(2).click(function() {
        console.log($('#hour-13').children().eq(1).val());
        localStorage.setItem("Hour 1", JSON.stringify($('#hour-13').children().eq(1).val()));
    });
    function renderOne() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 1"));
        if (hourStored !== null) {
            $('#hour-13').children().eq(1).val(hourStored);
        }
    }
    renderOne();

    $('#hour-14').children().eq(2).click(function() {
        console.log($('#hour-14').children().eq(1).val());
        localStorage.setItem("Hour 2", JSON.stringify($('#hour-14').children().eq(1).val()));
    });
    function renderTwo() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 2"));
        if (hourStored !== null) {
            $('#hour-14').children().eq(1).val(hourStored);
        }
    }
    renderTwo();

    $('#hour-15').children().eq(2).click(function() {
        console.log($('#hour-15').children().eq(1).val());
        localStorage.setItem("Hour 3", JSON.stringify($('#hour-15').children().eq(1).val()));
    });
    function renderThree() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 3"));
        if (hourStored !== null) {
            $('#hour-15').children().eq(1).val(hourStored);
        }
    }
    renderThree();

    $('#hour-16').children().eq(2).click(function() {
        console.log($('#hour-16').children().eq(1).val());
        localStorage.setItem("Hour 4", JSON.stringify($('#hour-16').children().eq(1).val()));
    });
    function renderFour() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 4"));
        if (hourStored !== null) {
            $('#hour-16').children().eq(1).val(hourStored);
        }
    }
    renderFour();

    $('#hour-17').children().eq(2).click(function() {
        console.log($('#hour-17').children().eq(1).val());

localStorage.setItem("Hour 5", JSON.stringify($('#hour-17').children().eq(1).val()));
    });
    function renderFive() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 5"));
        if (hourStored !== null) {
            $('#hour-17').children().eq(1).val(hourStored);
        }
    }
    renderFive();


    function hourConditionals() {
        var currentTime = dayjs().hour();
        console.log(currentTime);
        $('.time-block').each(function () {
            var fieldHour = parseInt($(this).attr('id').split('-')[1]);
        console.log(fieldHour);

        if (fieldHour < currentTime) {
            $(this).addClass("past");
        } else if (fieldHour === currentTime) {
            $(this).addClass("present");
        } else if (fieldHour > currentTime) {
            $(this).addClass("future");
        }
    });
    };
    hourConditionals();
});

        // Utilizing the new variables above of currentTime and fieldHour you will then need to create a conditional
        // if (compare past with <) {
                // Do something here with classes
        // } else if (compare present with ===) {
                // Do something with classes
        // } else .....this would be future{
                // Do the alternative option of the first two
        // }

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