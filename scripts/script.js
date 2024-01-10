document.getElementById('openMenu').addEventListener('click', function() {
  const menuOverlay = document.getElementById('menuOverlay');
  const menuContent = document.querySelector('.menu-content');

  menuOverlay.classList.add('show');
  menuContent.classList.add('show');
});

document.getElementById('closeMenu').addEventListener('click', function() {
  const menuOverlay = document.getElementById('menuOverlay');
  const menuContent = document.querySelector('.menu-content');

  menuOverlay.classList.remove('show');
  menuContent.classList.remove('show');
});

