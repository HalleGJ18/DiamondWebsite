function burgerMenu() {
    var x = document.getElementById("links");
    if (x.className === "navbar") {
      x.className = " mobile";
    } else {
      x.className = "navbar";
    }
  }