export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}

// let lastScrollY = window.scrollY; // Track the last scroll position

// window.onscroll = function() {
//   const parentDiv = document.querySelector('.columns > div');
//   const stickyOffset = parentDiv.offsetTop;
//   const currentScrollY = window.scrollY;

//   // Check if scrolling up
//   if (currentScrollY < lastScrollY) {
//     // Add sticky class when scrolling up and past the sticky offset
//     if (currentScrollY >= stickyOffset) {
//       parentDiv.classList.add('sticky');
//     } else {
//       parentDiv.classList.remove('sticky');
//     }
//   } else {
//     // Remove sticky class when scrolling down
//     parentDiv.classList.remove('sticky');
//   }

//   // Update the last scroll position
//   lastScrollY = currentScrollY;
// };

let lastScrollY = window.scrollY; // Track the last scroll position

window.onscroll = function() {
  const parentDiv = document.querySelector('.columns > div');
  const stickyOffset = parentDiv.offsetTop;
  const currentScrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const stickyThreshold = pageHeight - viewportHeight * 0.3; // Last 30% of the page

  // Check if scrolling up
  if (currentScrollY < lastScrollY) {
    // Add sticky class when scrolling up and past the sticky threshold
    if (currentScrollY >= stickyThreshold) {
      parentDiv.classList.add('sticky');
    } else {
      parentDiv.classList.remove('sticky');
    }
  } else {
    // Remove sticky class when scrolling down
    parentDiv.classList.remove('sticky');
  }

  // Update the last scroll position
  lastScrollY = currentScrollY;
};
