// initialize the script once the document is ready
$(document).ready(function() {
    // reference to the main container where time blocks will be appended
    const timeBlocks = $("#timeBlocks");
    // get the current hour for time comparison
    const currentHour = new Date().getHours();
    
    // function to save data to local storage
    function saveToLocalStorage(hour, value) {
        localStorage.setItem(hour, value);
    }
  
    // determine the color class for the hour block based on the current time
    function getColorClass(hour) {
        if (hour < currentHour) return 'past';
        if (hour === currentHour) return 'present';
        return 'future';
    }
  
    // display current date on the header
    $("#currentDay").text(new Date().toDateString());
  
    // loop to create rows for each working hour (from 9 AM to 5 PM)
    for (let hour = 9; hour <= 17; hour++) {
        // format hour for display
        const displayHour = hour <= 12 ? `${hour} AM` : `${hour-12} PM`;
        // retrieve saved data for the hour, if any
        const eventValue = localStorage.getItem(hour.toString()) || "";
  
        // create a new row for the hour
        const row = $('<div class="row align-items-center mb-2"></div>');
        // append the formatted hour to the row
        row.append(`<div class="col-2 hour-label">${displayHour}</div>`);
  
        // create and append an input field with saved data (if any)
        const inputField = $(`<input class="form-control col-8" value="${eventValue}">`)
          .addClass(getColorClass(hour));
        row.append(inputField);
  
        // create and append the save button with its icon
        const saveIcon = $("<i>").addClass("fa-solid fa-floppy-disk");
        const saveBtn = $('<button class="btn btn-primary col-2" aria-label="Save"></button>')
          .append(saveIcon)
          .on("click", function() {
              saveToLocalStorage(hour.toString(), inputField.val());
          });
        row.append(saveBtn);
  
        // append the complete row to the main container
        timeBlocks.append(row);
    }
});
