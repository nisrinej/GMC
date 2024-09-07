
document.addEventListener('DOMContentLoaded', () => {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
  
    // Function to generate a random color in hexadecimal
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Event listener for the button click
    changeColorBtn.addEventListener('click', () => {
      // Change the background color of the color-box to a random color
      colorBox.style.backgroundColor = getRandomColor();
    });
  });
  