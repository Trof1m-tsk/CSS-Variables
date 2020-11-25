const inputs = document.querySelectorAll(`.controls input`);

function updateHandle () {
  const units = this.dataset.sizing || ``;
  document.documentElement.style.setProperty(`--${this.name}`, this.value + units);
}

inputs.forEach( function(input) {
  input.addEventListener(`change`, updateHandle);
});

inputs.forEach( function(input) {
  input.addEventListener(`mousemove`, updateHandle);
});

  
