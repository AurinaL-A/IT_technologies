document.addEventListener("DOMContentLoaded", function() {
    function updateButtonText() {
      const button = document.getElementById("int_btn");
      if (button) { // Проверяем, что button не null
        if (window.innerWidth <= 1250) {
          button.textContent = "Начать зарабатывать";
        } else {
          button.textContent = "Начните зарабатывать прямо сейчас";
        }
      } else {
        console.error("Кнопка с id 'int_btn' не найдена!");
      }
    }
  
    updateButtonText();
    window.addEventListener("resize", updateButtonText);
  });