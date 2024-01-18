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

const teamSelector = document.getElementById('teamSelector');
const teamSections = document.querySelectorAll('.team-section');

teamSelector.addEventListener('change', () => {
  const selectedTeam = teamSelector.value;

  // Verberg alle teamsecties
  teamSections.forEach(section => section.classList.remove('visible'));

  // Toon de geselecteerde teamsectie
  document.getElementById(selectedTeam).classList.add('visible');
});