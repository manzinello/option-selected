const optionSelected = () => {
  let selects = document.getElementsByTagName("select");

  selects.forEach(select => {
    if (select.value != "") {
      let options = select.getElementsByTagName("option");
      options.forEach(option => {
        if (select.value === option.value) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", optionSelected);
