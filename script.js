var actualWin = "win1";

setInterval(refreshScreen, 5000);

function clearScreen() {
  document.getElementById("win1").hidden = true;
  document.getElementById("win2").hidden = true;
  document.getElementById("win3").hidden = true;
  document.getElementById("win4").hidden = true;
  document.getElementById("win5").hidden = true;
}

function refreshScreen() {
  if (actualWin === "win1") {
    actualWin = "win2";
    clearScreen();
    document.getElementById("win1").hidden = false;
  } else if (actualWin === "win2") {
    actualWin = "win3";
    clearScreen();
    document.getElementById("win2").hidden = false;
  } else if (actualWin === "win3") {
    actualWin = "win4";
    clearScreen();
    document.getElementById("win3").hidden = false;
  } else if (actualWin === "win4") {
    actualWin = "win5";
    clearScreen();
    document.getElementById("win4").hidden = false;
  } else if (actualWin === "win5") {
    actualWin = "win1";
    clearScreen();
    document.getElementById("win5").hidden = false;
  }
}
