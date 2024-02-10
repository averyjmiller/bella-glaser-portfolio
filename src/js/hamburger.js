const hamburgerHandler = async (e) => {
  e.preventDefault();

  let slider = document.getElementById('nav-items');
  let isOpen = slider.classList.contains('slide-in');
  let open = document.getElementById('open');
  let close = document.getElementById('close');

  if(isOpen) {
    slider.setAttribute('class', 'slide-out');
    open.setAttribute('style', 'display: inline');
    close.setAttribute('style', 'display: none');
  } else {
    slider.setAttribute('class', 'slide-in');
    open.setAttribute('style', 'display: none');
    close.setAttribute('style', 'display: inline');
  }
}

export default hamburgerHandler;

