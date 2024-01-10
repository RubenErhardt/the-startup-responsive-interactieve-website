document.getElementById('openMenu').addEventListener('click', function() {
  const menuOverlay = document.getElementById('menuOverlay');
  const menuContent = document.querySelector('.menu-content');
  const images = document.querySelectorAll('.groepsfoto img');

  menuOverlay.classList.add('show');
  menuContent.classList.add('show');

  // Hide images
  images.forEach(img => {
    img.style.display = 'none';
  });
});

document.getElementById('closeMenu').addEventListener('click', function() {
  const menuOverlay = document.getElementById('menuOverlay');
  const menuContent = document.querySelector('.menu-content');
  const images = document.querySelectorAll('.groepsfoto img');

  menuOverlay.classList.remove('show');
  menuContent.classList.remove('show');

  // Show images
  images.forEach(img => {
    img.style.display = 'block';
  });
});
