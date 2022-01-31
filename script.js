const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
     
      if (entry.isIntersecting) {
        
        entry.target.classList.add('animation');
      }
    });
  });
  observer.observe(document.querySelector('.project-items'));