function productAlign() {
  document.getElementById("product--card--align").style.display = "block";
  document.getElementById("product--card--grid").style.display = "none";
  document.getElementById("span--alignment").style.color = "#7377ab";
  document.getElementById("span--app").style.color = "#000";
}
function productGrid() {
  document.getElementById("product--card--align").style.display = "none";
  document.getElementById("product--card--grid").style.display = "block";
  document.getElementById("span--alignment").style.color = "#000";
  document.getElementById("span--app").style.color = "#7377ab";
}
