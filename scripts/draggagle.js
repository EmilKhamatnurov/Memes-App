// (document.querySelector('div[data-textoutput]'));

// console.log(outputFields);


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (elmnt) {
    elmnt.addEventListener('mousedown', dragMouseDown);
    elmnt.addEventListener('touchstart', dragTouchStart);
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function dragTouchStart(e) {
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    elmnt.addEventListener('touchmove', elementTouchMove);
    elmnt.addEventListener('touchend', closeDragTouch);
  }

  function elementTouchMove(e) {
    e.preventDefault();
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragTouch() {
    elmnt.removeEventListener('touchmove', elementTouchMove);
    elmnt.removeEventListener('touchend', closeDragTouch);
  }
}
