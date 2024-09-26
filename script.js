function calculate(value) {
    if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = 'Error';
      }
    } else if (value === 'C') {
      display.value = '';
    } else if (value === 'DEL') {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  }
  
  function clearDisplay() {
    display.value = '';
  }
  
  function deleteChar() {
    display.value = display.value.slice(0, -1);
  }
  
  