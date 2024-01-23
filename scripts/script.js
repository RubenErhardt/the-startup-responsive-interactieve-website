function toggleMenu(show) {
  const menuOverlay = document.getElementById('menuOverlay');
  const menuContent = document.querySelector('.menu-content');
  const images = document.querySelectorAll('img');

  menuOverlay.classList.toggle('show', show);
  menuContent.classList.toggle('show', show);

  // Verberg alle afbeeldingen met vertraging
  images.forEach((img, index) => {
    img.style.transition = `opacity 0.5s ${index * 0.1}s`; // Aangepaste vertraging per afbeelding
    img.style.opacity = show ? '0' : '1';
  });
}

document.getElementById('openMenu').addEventListener('click', function() {
  toggleMenu(true);
});

document.getElementById('closeMenu').addEventListener('click', function() {
  toggleMenu(false);
});

document.getElementById('teamSelector').addEventListener('change', function () {
  var selectedTeam = this.value;
  var teamSections = document.querySelectorAll('.team-section');

  teamSections.forEach(function (section) {
    section.style.display = 'none';
  });

  if (selectedTeam === 'alle-teams') {
    teamSections.forEach(function (section) {
      section.style.display = 'flex';
    });
  } else {
    document.getElementById(selectedTeam).style.display = 'flex';
  }
});



//pijltje naar boven 
const footerArrow = document.querySelector('.footer-arrow');
const headerFull = document.querySelector('.header-full');

footerArrow.addEventListener('click', () => {

  headerFull.scrollIntoView({ behavior: 'smooth' }); // Scroll naar de header-full class
});
