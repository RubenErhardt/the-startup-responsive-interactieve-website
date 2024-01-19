document.getElementById('openMenu').addEventListener('click', function() {
  const menuOverlay = document.getElementById('menuOverlay');
  const menuContent = document.querySelector('.menu-content');
  const images = document.querySelectorAll('img');

  menuOverlay.classList.add('show');
  menuContent.classList.add('show');

  // Verberg alle afbeeldingen met vertraging
  images.forEach((img, index) => {
    img.style.transition = `opacity 0.5s ${index * 0.1}s`; // Aangepaste vertraging per afbeelding
    img.style.opacity = '0';
  });
});

document.getElementById('closeMenu').addEventListener('click', function() {
  const menuOverlay = document.getElementById('menuOverlay');
  const menuContent = document.querySelector('.menu-content');
  const images = document.querySelectorAll('img');

  menuOverlay.classList.remove('show');
  menuContent.classList.remove('show');

  // Maak alle afbeeldingen weer zichtbaar met vertraging
  images.forEach((img, index) => {
    img.style.transition = `opacity 0.5s ${index * 0.1}s`; // Aangepaste vertraging per afbeelding
    img.style.opacity = '1';
  });
});

//kiezen welk team je wilt zien

document.getElementById('teamSelector').addEventListener('change', function () {
  var selectedTeam = this.value;
  var teamSections = document.querySelectorAll('.team-section');

  teamSections.forEach(function (section) {
    section.style.display = 'none';
  });

  document.getElementById(selectedTeam).style.display = 'flex';
});


//pijltje naar boven 
const footerArrow = document.querySelector('.footer-arrow');
const headerFull = document.querySelector('.header-full');

footerArrow.addEventListener('click', () => {

  headerFull.scrollIntoView({ behavior: 'smooth' }); // Scroll naar de header-full class
});
