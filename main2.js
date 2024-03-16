function scrollToCommand(commandId) {
  const element = document.getElementById(commandId);
  if (element) {
    const viewportHeight = window.innerHeight;
    const elementHeight = element.offsetHeight;
    const elementTop = element.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the desired scroll position
    let scrollToPosition = elementTop - scrollTop - (viewportHeight / 2) + (elementHeight / 2);

    // Ensure the scroll position is within the bounds of the page
    scrollToPosition = Math.max(0, Math.min(scrollToPosition, document.body.scrollHeight - viewportHeight));

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });

    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
      link.classList.remove('active');
    });

    const clickedLink = document.querySelector(`.links a[href="#${commandId}"]`);
    if (clickedLink) {
      clickedLink.classList.add('active');
    }
  }
}



