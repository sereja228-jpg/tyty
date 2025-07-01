
document.querySelectorAll('.stars').forEach(el => {
    const rating = el.dataset.rating;
    el.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  });

  document.getElementById('downloadBtn').addEventListener('click', e => {
    e.preventDefault();
    alert('Скачивание резюме...');
  });
  
  
  const photo = document.querySelector('.photo');
  photo.onmouseenter = () => photo.style.transform = 'scale(1.05)';
  photo.onmouseleave = () => photo.style.transform = 'scale(1)';