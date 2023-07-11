// This function only runs once all of the HTML elements are in place.
$(function () {
  
  // Displays today's date as Monday, July 10, 2023 (example)
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

  // Grabs the current hour in 2-digit format for comparison to each of the time-block classes 
  var currentHour = dayjs().format('H');

  // Grabs the id of the time-block, pairs it with the text entered, and stores them as a key-value pair in localStorage
  $('.saveBtn').on("click", function (event) {
    event.preventDefault();
    var chosenHour = $(this).parent().attr('id');
    var task = $(this).parent().find('.description').val();
    localStorage.setItem(chosenHour, task);
  });

  // This function keeps previously-entered tasks on the page by grabbing them from localStorage. It also grabs the 2-digit hour from the id and compares it to the current hour to see if it is in the past, present, or future.
  $('.time-block').each(function () {
    var thisHour = $(this).attr('id').split('-')[1];
    var enteredTask = localStorage.getItem($(this).attr('id'));
    var textEl = $(this).find('.description');
    textEl.val(enteredTask);

    if (thisHour < currentHour) {
      $(this).addClass('past');
    } else if (thisHour > currentHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
  });
});