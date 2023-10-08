$(function () {
    
    // dayjs function to set current date
    var currentDate = dayjs().format('dddd, MMMM D');
    $('#currentDay').text(currentDate);

    // localStorage Functions

    // 9AM
    $('#hour-9').children().eq(2).click(function() {
        localStorage.setItem("Hour 9", JSON.stringify($('#hour-9').children().eq(1).val()));
    });
    function renderNine() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 9"));
        if (hourStored !== null) {
            $('#hour-9').children().eq(1).val(hourStored);
        }
    }
    renderNine();

    // 10AM
    $('#hour-10').children().eq(2).click(function() {
        localStorage.setItem("Hour 10", JSON.stringify($('#hour-10').children().eq(1).val()));
    });
    function renderTen() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 10"));
        if (hourStored !== null) {
            $('#hour-10').children().eq(1).val(hourStored);
        }
    }
    renderTen();

    // 11AM
    $('#hour-11').children().eq(2).click(function() {
        localStorage.setItem("Hour 11", JSON.stringify($('#hour-11').children().eq(1).val()));
    });
    function renderElev() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 11"));
        if (hourStored !== null) {
            $('#hour-11').children().eq(1).val(hourStored);
        }
    }
    renderElev();

    // 12AM
    $('#hour-12').children().eq(2).click(function() {
        localStorage.setItem("Hour 12", JSON.stringify($('#hour-12').children().eq(1).val()));
    });
    function renderTwelve() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 12"));
        if (hourStored !== null) {
            $('#hour-12').children().eq(1).val(hourStored);
        }
    }
    renderTwelve();

    // 1PM   
    $('#hour-13').children().eq(2).click(function() {
        localStorage.setItem("Hour 1", JSON.stringify($('#hour-13').children().eq(1).val()));
    });
    function renderOne() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 1"));
        if (hourStored !== null) {
            $('#hour-13').children().eq(1).val(hourStored);
        }
    }
    renderOne();

    // 2PM
    $('#hour-14').children().eq(2).click(function() {
        localStorage.setItem("Hour 2", JSON.stringify($('#hour-14').children().eq(1).val()));
    });
    function renderTwo() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 2"));
        if (hourStored !== null) {
            $('#hour-14').children().eq(1).val(hourStored);
        }
    }
    renderTwo();

    // 3PM
    $('#hour-15').children().eq(2).click(function() {
        localStorage.setItem("Hour 3", JSON.stringify($('#hour-15').children().eq(1).val()));
    });
    function renderThree() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 3"));
        if (hourStored !== null) {
            $('#hour-15').children().eq(1).val(hourStored);
        }
    }
    renderThree();

    // 4PM
    $('#hour-16').children().eq(2).click(function() {
        localStorage.setItem("Hour 4", JSON.stringify($('#hour-16').children().eq(1).val()));
    });
    function renderFour() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 4"));
        if (hourStored !== null) {
            $('#hour-16').children().eq(1).val(hourStored);
        }
    }
    renderFour();

    // 5PM
    $('#hour-17').children().eq(2).click(function() {
    localStorage.setItem("Hour 5", JSON.stringify($('#hour-17').children().eq(1).val()));
    });
    function renderFive() {
        var hourStored = JSON.parse(localStorage.getItem("Hour 5"));
        if (hourStored !== null) {
            $('#hour-17').children().eq(1).val(hourStored);
        }
    }
    renderFive();

    // PAST, PRESENT, FUTURE CONDITIONALS

    // Parsing hour ID to isolate the number associated with each ID
    function hourConditionals() {
        var currentTime = dayjs().hour();
        $('.time-block').each(function () {
            var fieldHour = parseInt($(this).attr('id').split('-')[1]);

    // If comparisons to determine past, future, present
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