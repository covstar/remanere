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
      


    //   For january
      if(monthValue == month[0]){
        let Days_remaining = (TotalDays - totalNoOfMonth[0] + (currentMonth[0] - dateValue));
        let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
        let Weeks_remaining = Math.round(Weeks);
        let months_remaining = (TotalMonths - month[0]);
        $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
      }
   

      //   For fabruary
      else if (monthValue == month[1]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[1] + (currentMonth[1] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[1]);
        $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
      } 

      //   For march
     else if (monthValue == month[2]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[2] + (currentMonth[2] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[2]);
          $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $('#year, #day, #week, #month').fadeIn(300);
      } 

      //   For April
     else if (monthValue == month[3]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[3] + (currentMonth[3] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[3]);
       $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
      } 

      //   For May
     else if (monthValue == month[4]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[4] + (currentMonth[4] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[4]);
        $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
      } 

      //   For June
      else if (monthValue == month[5]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[5] + (currentMonth[5] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[5]);
        $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
      } 

      //   For July
     else if (monthValue == month[6]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[6] + (currentMonth[6] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[6]);
       $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
      }

      //   For August
     else if (monthValue == month[7]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[7] + (currentMonth[7] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[7]);
        $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
      }

      //   For September
     else if (monthValue == month[8]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[8] + (currentMonth[8] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[8]);
       $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
       }

      //   For October
     else if (monthValue == month[9]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[9] + (currentMonth[9] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[9]);
        $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
        }

      //   For November
     else if (monthValue == month[10]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[10] + (currentMonth[10] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[10]);
        $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
        }

      //   For December
     else if (monthValue == month[11]) {
          let Days_remaining = (TotalDays - totalNoOfMonth[11] + (currentMonth[11] - dateValue));
          let Weeks = ((Days_remaining * TotalWeeks) / TotalDays);
          let Weeks_remaining = Math.round(Weeks);
          let months_remaining = (TotalMonths - month[11]);
       $("#year").html(yearValue);
          $("#day").html(Days_remaining + " days");
          $("#week").html(Weeks_remaining + " weeks");
          $("#month").html(months_remaining + " months")
          $("#year, #day, #week, #month").fadeIn(300);
       }
       else {
                  $('#year, #day, #week, #month').html("");
      }
    })
})
