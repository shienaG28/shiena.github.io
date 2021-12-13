const skill = document.getElementById('section');
const progbar = document.querySelectorAll('.innerspan');

  function showProgress() {
    progbar.forEach(progbar=> {
      const value = progbar.dataset.progress;
      progbar.style.opacity = 1;
      progbar.style.width = `${value}%`;
    });
  }

  function hideProgress() {
    progbar.forEach(p => {
      p.style.opacity = 0;
      p.style.width = 0;
    });
  }
window.addEventListener('scroll', () => {
  const sectionPos = skill.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if(sectionPos < screenPos){
    showProgress();
  }
  else {
    hideProgress();
  }
});
