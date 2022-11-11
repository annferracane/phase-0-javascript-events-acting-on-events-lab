// Your code here

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight() {
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    console.log(rightNumbers);
    console.log("Hello");
    if (right > 0) {
      dodger.style.right = `${right + 1}px`;
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