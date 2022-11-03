const readyIntersect = () => {
  /**
   * Helper Functions
   */

  const preload = (src) =>
    new Promise(function (resolve, reject) {
      const img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });

  /**
   * Options + Function
   */

  const options = {
    root: null,
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };

  const lazyInit = (element, fn) => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some(({ isIntersecting }) => isIntersecting)) {
        observer.disconnect();
        fn();
      }
    }, options);
    observer.observe(element);
  };

  // Observe: <Figure>

  const images = document.querySelectorAll('figure');

  if (images.length > 0) {
    [...images].forEach((figure) => {
      // target.addEventListener('click', () => {
      //   console.log("spread forEach worked");
      // });
      // io.observe(target);
      if (!figure.querySelector('img')) return;

      lazyInit(figure, () => {
        const image = figure.querySelector('img');
        const src = image.getAttribute('data-src');
        const srcset = image.getAttribute('data-srcset');

        preload(src)
          .then((obj) => {
            image.src = src;
            image.srcset = srcset;
            figure.classList.add('loaded');
          })
          .catch((err) => {
            console.error('Failed', err);
            image.src = '/broken-img.svg';
            image.classList.add('broken-img');
          });
      });
    });
  }

  // Observe: Slideshow

  const galleries = document.querySelectorAll('[class*="gallery-"]');

  [...galleries].forEach((gallery) => {
    // target.addEventListener('click', () => {
    //   console.log("spread forEach worked");
    // });
    // io.observe(target);
  });
};

// document.addEventListener('DOMContentLoaded', readyIntersect);
