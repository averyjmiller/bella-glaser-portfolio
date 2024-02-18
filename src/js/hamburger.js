const hamburgerHandler = async (e) => {
  e.preventDefault();

  let body = document.getElementById('body')
  let hamburger = document.getElementById('hamburger-wrapper')
  let slider = document.getElementById('nav-items');
  let isOpen = slider.classList.contains('slide-in');
  let open = document.getElementById('open');
  let close = document.getElementById('close');
  let navHeader = document.getElementById('nav-header');

  if(hamburger.offsetParent === null) {
    return;
  }

  if(isOpen) {
    body.setAttribute('style', 'overflow: auto');
    slider.setAttribute('class', 'slide-out');
    open.setAttribute('style', 'display: inline');
    close.setAttribute('style', 'display: none');
    navHeader.classList.remove('nav-open');
  } else if(e.target .id != 'name' && e.target .id != 'profession') {
    body.setAttribute('style', 'overflow: hidden');
    slider.setAttribute('style','display: block');
    slider.setAttribute('class', 'slide-in');
    open.setAttribute('style', 'display: none');
    close.setAttribute('style', 'display: inline');
    navHeader.classList.add('nav-open');
  }
}

export default hamburgerHandler;

