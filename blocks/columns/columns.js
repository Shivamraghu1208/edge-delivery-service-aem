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

// let lastScrollY = window.scrollY; // Track the last scroll position

// window.onscroll = function() {
//   const parentDiv = document.querySelector('.columns > div');
//   const stickyOffset = parentDiv.offsetTop;
//   const currentScrollY = window.scrollY;
//   const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const threshold = pageHeight * 0.7; // 70% of the page height (last 30%)

//   // Check if scrolling up
//   if (currentScrollY < lastScrollY) {
//     // Add sticky class when scrolling up and past the sticky offset and threshold
//     if (currentScrollY >= stickyOffset && currentScrollY >= threshold) {
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


// let lastScrollY = window.scrollY; // Track the last scroll position

// window.onscroll = function() {
//   const parentDiv = document.querySelector('.columns > div');
//   const stickyOffset = parentDiv.offsetTop;
//   const currentScrollY = window.scrollY;
//   const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const threshold = pageHeight * 0.4; // 50% of the page height (mid of the page)

//   // Check if scrolling up
//   if (currentScrollY < lastScrollY) {
//     // Add sticky class when scrolling up and past the sticky offset and threshold
//     if (currentScrollY >= stickyOffset && currentScrollY >= threshold) {
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

// let lastScrollY = window.scrollY; // Track the last scroll position

// window.onscroll = function() {
//   const parentDiv = document.querySelector('.columns > div');
//   const currentScrollY = window.scrollY;
//   const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
//   const threshold = pageHeight * 0.5; // 50% of the page height (mid of the page)

//   // Check if scrolling up
//   if (currentScrollY < lastScrollY) {
//     // Add sticky class when scrolling up and past the threshold (mid of the page)
//     if (currentScrollY >= threshold) {
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


// window.addEventListener('scroll', function() {
//   const parent = document.querySelector('.columns > div');
//   const scrollPosition = window.scrollY + window.innerHeight; // Current scroll position plus viewport height
//   const documentHeight = document.documentElement.scrollHeight;

//   const last20Percent = documentHeight * 0.8; // The point where the last 20% of the page starts

//   if (scrollPosition >= last20Percent) {
//     parent.classList.add('sticky'); // Add sticky class when within the last 20%
//   } else {
//     parent.classList.remove('sticky'); // Remove sticky class when above the last 20%
//   }
// });

// let lastScrollTop = 0; // To track the last scroll position

// window.addEventListener('scroll', function() {
//   const parent = document.querySelector('.columns > div');
//   const currentScroll = window.scrollY; // Current scroll position
//   const documentHeight = document.documentElement.scrollHeight;
//   const twentyPercent = documentHeight * 0.1; // Calculate the top 20% of the page height

//   if (currentScroll < lastScrollTop) { // If the user is scrolling up
//     if (currentScroll <= twentyPercent) {
//       parent.classList.add('sticky'); // Add sticky class when top 20% is reached
//     }
//   } else {
//     parent.classList.remove('sticky'); // Remove sticky class when scrolling down
//   }

//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update the last scroll position
// });

let lastScrollTop = 0; // To track the last scroll position

window.addEventListener('scroll', function () {
  const parent = document.querySelector('.columns > div');
  const height=360;
  const currentScroll = window.scrollY || window.pageYOffset; // Cross-browser scroll position
  const heroHeight = document.querySelector('.hero').offsetHeight - height; // Get the height of the hero component
  const twentyPercent = document.documentElement.scrollHeight * 0.1; // Calculate the top 10% of the page height

  console.log(`Current Scroll: ${currentScroll}, Hero Height: ${heroHeight}, 20% Height: ${twentyPercent}`); // Debugging

  if (currentScroll < lastScrollTop) {
    // User is scrolling up
    if (currentScroll <= twentyPercent) {
      parent.classList.add('sticky'); // Add sticky class when in the top 10% of the page
      console.log('Sticky added (scrolling up)'); // Debugging
    }
  } else {
    // User is scrolling down
    if (currentScroll > heroHeight) {
      console.log(`Scrolling past hero: ${currentScroll} > ${heroHeight}`); // Debugging
      parent.classList.remove('sticky'); // Remove sticky class when scrolling past the hero component
      console.log('Sticky removed (scrolling down)'); // Debugging
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update the last scroll position
});
