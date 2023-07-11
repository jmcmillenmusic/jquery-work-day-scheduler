// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // Grabs the current hour in 2-digit format for comparison to each of the time-block classes 
  var currentHour = dayjs().format('H');
  console.log(currentHour);
  
  // This function grabs the 2-digit hour from the id and compares it to the current hour to see if it is in the past, present, or future.
  $('.time-block').each(function () {
    var thisHour = $(this).attr('id').split('-')[1];
    console.log(thisHour);
    if (thisHour < currentHour) {
      $(this).addClass('past');
    } else if (thisHour > currentHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
  });
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // Displays today's date as Monday, July 10, 2023 (example)
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

});

// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am-5pm
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist