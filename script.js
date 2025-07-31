    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const icon = header.querySelector('.accordion-icon');

        item.classList.toggle('active');
        header.classList.toggle('active');

        // Toggle +/-
        if (item.classList.contains('active')) {
          icon.textContent = '-';
        } else {
          icon.textContent = '+';
        }
      });
    });