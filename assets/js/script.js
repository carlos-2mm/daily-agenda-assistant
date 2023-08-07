
$(document).ready(function() {
  const timeBlocks = $("#timeBlocks");
  $("#currentDay").text(new Date().toDateString());

  for (let i = 9; i <= 17; i++) {
      const hourLabel = i <= 12 ? `${i} AM` : `${i-12} PM`;
      const eventValue = localStorage.getItem(i.toString()) || "";

      // create a row for each hour
      const row = $(`<div></div>`);
      
      // hour label
      row.append(`<div>${hourLabel}</div>`);

      // input field
      const inputField = $(`<input value="${eventValue}">`);
      row.append(inputField);

      // save button
      const saveBtn = $(`<button>Save</button>`);
      saveBtn.on("click", function() {
          localStorage.setItem(i.toString(), inputField.val());
      });
      row.append(saveBtn);

      // color coding
      const currentHour = new Date().getHours();
      if (i < currentHour) {
          inputField.addClass();
      } else if (i === currentHour) {
          inputField.addClass();
      } else {
          inputField.addClass();
      }

      timeBlocks.append(row);
  }
});