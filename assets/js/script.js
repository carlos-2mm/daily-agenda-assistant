
$(document).ready(function() {
  const timeBlocks = $("#timeBlocks");
  $("#currentDay").text(new Date().toDateString());

  function saveToLocalStorage(hour, value) {
      localStorage.setItem(hour, value);
  }

  for (let i = 9; i <= 17; i++) {
      const hourLabel = i <= 12 ? `${i} AM` : `${i-12} PM`;
      const eventValue = localStorage.getItem(i.toString()) || "";

      // create a row for each hour
      const row = $(`<div class="row align-items-center mb-2"></div>`);
      
      // hour label
      row.append(`<div class="col-2 text-right">${hourLabel}</div>`);

      // input field
      const inputField = $(`<input class="form-control col-8" value="${eventValue}">`);
      row.append(inputField);

      // save button
      const saveBtn = $(`<button class="btn btn-primary col-2"></button>`);
      const saveIcon = $("<i>").addClass("fa-solid fa-floppy-disk");
      saveBtn.append(saveIcon)
      saveBtn.on("click", function() {
          localStorage.setItem(i.toString(), inputField.val());
      });
      row.append(saveBtn);

      // color coding
      const currentHour = new Date().getHours();
      if (i < currentHour) {
          inputField.addClass('past');
      } else if (i === currentHour) {
          inputField.addClass('present');
      } else {
          inputField.addClass('future');
      }

      timeBlocks.append(row);
  }
});