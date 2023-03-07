var indexClicked;

function gameDetails() {
  indexClicked = this.event.target.id;
  window.location.href = `/game-details?id=${indexClicked}`;
}

function gameDetailsForAdmin() {
  indexClicked = this.event.target.id;
  window.location.href = `/request-game-details?id=${indexClicked}`;
}
