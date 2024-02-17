const hamburgerHandler = async (e) => {
  e.preventDefault();

  let slider = document.getElementById('nav-items');
  let isOpen = slider.classList.contains('slide-in');
  let open = document.getElementById('open');
  let close = document.getElementById('close');
  let navHeader = document.getElementById('nav-header');
  let footer = document.getElementById('homebtn-wrapper');

  if(isOpen) {
    slider.setAttribute('class', 'slide-out');
    open.setAttribute('style', 'display: inline');
    close.setAttribute('style', 'display: none');
    navHeader.classList.remove('nav-open');
    footer.setAttribute('style', 'display: inline');
  } else {
    slider.setAttribute('class', 'slide-in');
    open.setAttribute('style', 'display: none');
    close.setAttribute('style', 'display: inline');
    navHeader.classList.add('nav-open');
    footer.setAttribute('style', 'display: none!important');
  }
}

export default hamburgerHandler;

