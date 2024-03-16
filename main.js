function scrollToCommand(commandId) {
  const element = document.getElementById(commandId);
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
      link.classList.remove('active');
    });

    const clickedLink = document.querySelector(`.links a[href="#${commandId}"]`);
    if (clickedLink) {
      clickedLink.classList.add('active');
    }
}

