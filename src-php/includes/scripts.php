<script src="public/js/intersect.js"></script>
<script src="public/js/media-audio-video.js"></script>
<script>
  const init = () => {
    const body = document.body;
    const mainNav = document.getElementById('menu-main');
    const openButton = document.getElementsByClassName('menu-open')[0];
    const closeButton = document.getElementsByClassName('menu-close')[0];

    let actionBuffer = false
    const toggleNav = (fn) => {
      if (!actionBuffer) {
        actionBuffer = true
        body.classList.toggle('overflow-hidden')
        mainNav.classList.toggle('show-mobile-nav')
        setTimeout(() => {
          actionBuffer = false
        }, 300)
      }
    }

    openButton.addEventListener('click', () => {
      toggleNav();
    });

    closeButton.addEventListener('click', () => {
      toggleNav();
    });



    // Scroll JS
    var scrollObject = {};
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        scrollPos();
      });
    }, true);

    const scrollPos = () => {
      scrollObject = {
        x: window.pageXOffset,
        y: window.pageYOffset
      }
      // If you want to check distance
      if (scrollObject.y > 100) {
        document.body.classList.add('scrolling');
      } else {
        document.body.classList.remove('scrolling');
      }
    }
  }
  window.addEventListener('DOMContentLoaded', () => {
    init()
  });
</script>