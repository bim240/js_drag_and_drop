
const item1 = document.querySelector('.item1');
const iten2 = document.querySelector('.item2');
const iten3 = document.querySelector('.item3');






item1.onmousedown = function(event) {

    let shiftX = event.clientX - item1.getBoundingClientRect().left;
    let shiftY = event.clientY - item1.getBoundingClientRect().top;
  
    item1.style.position = 'absolute';
    item1.style.zIndex = 1000;
    document.body.append(item1);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the item1 at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      item1.style.left = pageX - shiftX + 'px';
      item1.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the item1 on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the item1, remove unneeded handlers
    item1.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      item1.style.position = 'none';
      item1.style.zIndex = 'none';
      document.body.append(item1);
    };
  
  };
  
  item1.ondragstart = function() {
    return false;
  };


item1.addEventListener('onmousedown', doDragDrop);







































// const item1 = document.querySelector('.item1');
// var dragSrcEl = null;



// function handleDragStart(e) {
//     this.style.opacity = '0.4';  // this / e.target is the source node.

//     dragSrcEl = this;

//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.innerHTML);
// }

// function handleDragOver(e) {
//     if (e.preventDefault) {
//       e.preventDefault(); // Necessary. Allows us to drop.
//     }
  
//     e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  
//     // return false;
// }
// function handleDrop(e) {
//     // this / e.target is current target element.
  
//     if (e.stopPropagation) {
//       e.stopPropagation(); // stops the browser from redirecting.
//     }
  

//   // Don't do anything if dropping the same column we're dragging.
//   if (dragSrcEl != this) {
//     // Set the source column's HTML to the HTML of the column we dropped on.
//     dragSrcEl.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData('text/html');
//   }
//     // See the section on the DataTransfer object.
  
//     // return false;
// }
// function handleDragEnter(e) {
//     // this / e.target is the current hover target.
//     this.classList.add('over');
// }
  
// function handleDragLeave(e) {
//     this.classList.remove('over');  // this / e.target is previous target element.
// }

// item1.addEventListener('dragstart', handleDragStart);
// item1.addEventListener('dragenter', handleDragEnter);
// item1.addEventListener('dragover', handileDragOver);
// item1.addEventListener('dragleave', handleDragLeave);

// item1.addEventListener('drop', handleDrop);