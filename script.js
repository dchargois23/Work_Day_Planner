
//1. get time
var currentDate = moment().format("dddd, MMMM Do YYYY");
console.log(currentDate);
$("#currentDay").text(currentDate);
var currentHour = moment().format("H");
console.log(currentHour);
var hourArray = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

//Create for loop for array

for (var i = 0; i < hourArray.length; i++) {
    //create div in the DOM
    var div1 = $("<div>");
    //specify info in div1
    div1.attr("class", "row");
    //create row 2 for time block
    var div2 = $("<div>");
    //assign attriubutes for time block
    div2.attr("class", "col");
    div2.attr("id", "time-block");
    if (hourArray[i] <= 12) {
        if (hourArray[i] == 12) {
            div2.text(hourArray[i] + " PM");
        } else {
            div2.text(hourArray[i] + " AM");
        }
    } else {
        div2.text(hourArray[i] - 12 + " PM");
    }
    //<textarea></textarea>
    var textarea = $("<textarea>");

    if (hourArray[i] == currentHour) {
        textarea.attr("class", "form-control col-8 present");
    }
    if (hourArray[i] < currentHour) {
        textarea.attr("class", "form-control col-8 past");
    }
    if (hourArray[i] > currentHour) {
        textarea.attr("class", "form-control col-8 future");
    }
    textarea.attr("id", hourArray[i]);
    var div3 = $("<div>");
    div3.attr("class", "col saveBtn text-center fas fa-lock");
    div1.append(div2);
    div1.append(textarea);
    div1.append(div3);
    $(".container").append(div1);
}
//3. setting data local storage (recommended grab hour and set to userinput)
$(".saveBtn").click(function (event) {
    //Prevent the page from refreshing
    event.preventDefault();
    //alert($(this).attr("id"));
    //hour
    var hour = $(this).siblings(".form-control").attr("id");
    //var todoText = $("textarea").value.trim();
    //userinput
    var userinput = $(this).siblings(".form-control").val();
    //localstorage: hour:userinput
    localStorage.setItem(hour, userinput);

});


$("#6").val(localStorage.getItem("6"));
$("#7").val(localStorage.getItem("7"));
$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
$("#18").val(localStorage.getItem("18"));
$("#19").val(localStorage.getItem("19"));
$("#20").val(localStorage.getItem("20"));
$("#21").val(localStorage.getItem("21"));
$("#22").val(localStorage.getItem("22"));
$("#23").val(localStorage.getItem("23"));
//4. getting localstorage data and append to input area