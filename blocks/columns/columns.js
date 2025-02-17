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

window.onscroll = function() {
  const parentDiv = document.querySelector('.columns > div');
  const stickyOffset = parentDiv.offsetTop;

  if (window.scroll >= stickyOffset) {
    parentDiv.classList.add('sticky');
  } else {
    parentDiv.classList.remove('sticky');
  }
};
