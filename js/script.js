$(document).ready(function(){

    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const totalNoOfMonth = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    const currentMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const TotalDays = 365;
    const TotalWeeks = 52.143;
    const TotalMonths = 12;

    $('button').click(function () {
        let x = $("#Date").val();
        let monthValue = x.slice(5,7);
        let dateValue = x.slice(8,10);
        let yearValue = x.slice(0,4);
          
        if (month.includes(parseInt(monthValue))) {
            let daysRemaining = (TotalDays - totalNoOfMonth[monthValue-1] + (currentMonth[monthValue-1] - dateValue));
            let weeksRemaining = Math.round((daysRemaining * TotalWeeks) / TotalDays);
            let monthsRemaining = TotalMonths - parseInt(monthValue);
            let hoursRemaining = daysRemaining * 24;
            let minutesRemaining = hoursRemaining * 60;
            let secondsRemaining = minutesRemaining * 60;

            $("#year").html(yearValue);
            $("#day").html(daysRemaining + " days");
            $("#week").html(weeksRemaining + " weeks");
            $("#month").html(monthsRemaining + " months");
            $("#hour").html(hoursRemaining + " hours");
            $("#minute").html(minutesRemaining + " minutes");
            $("#second").html(secondsRemaining + " seconds");
            
            $("#year, #day, #week, #month, #hour, #minute, #second").fadeIn(300);
        } else {
            alert("Invalid date format, please use yyyy-mm-dd format.");
        }
    });
});
