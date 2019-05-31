const optionSelected = () => {
  let selects = document.getElementsByTagName("select");

  for (let select of selects) {
    if (select.getAttribute("value") != "") {
      let options = select.getElementsByTagName("option");

      for (let option of options) {
        if (select.getAttribute("value") == option.getAttribute("value")) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", optionSelected);
