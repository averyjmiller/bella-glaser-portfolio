const hamburgerHandler = async (e) => {
  e.preventDefault();

  let slider = document.getElementById('nav-items');
  let isOpen = slider.classList.contains('slide-in');

  slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
}

export default hamburgerHandler;

