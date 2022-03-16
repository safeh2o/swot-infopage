<script>
  const init = () => {
    const mainNav = document.getElementById('menu-main');
    const toggleButton = document.getElementsByClassName('toggler')[0];
    const closeButton = document.getElementsByClassName('btn-close')[0];

    toggleButton.addEventListener('click', () => {
      mainNav.classList.toggle('show-mobile-nav');
    });

    closeButton.addEventListener('click', () => {
      mainNav.classList.toggle('show-mobile-nav');
    });
  }
  window.addEventListener('DOMContentLoaded', () => {
    init()
  });
</script>