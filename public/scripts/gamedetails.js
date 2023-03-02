var indexClicked;

function gameDetails() {
  indexClicked = this.event.target.id;
  window.location.href = `/game-details?id=${indexClicked}`;
}
