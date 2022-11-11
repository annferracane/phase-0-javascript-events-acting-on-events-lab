// Your code here

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 400) {
      dodger.style.right = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    /*
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    */
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});