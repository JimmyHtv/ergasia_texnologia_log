document.addEventListener('DOMContentLoaded', function () {
  const drumButtons = document.querySelectorAll('.drum-pad');
  const functionButtons = document.querySelectorAll('.function-button');
  const volumeSlider = document.getElementById('volumeSlider');

  // Function to load and play audio with volume control
  function playSound(soundName) {
    const audio = new Audio(`C:/Users/jimho/Desktop/DrumMachineProject/sounds/${soundName}.wav`);
    
    // Adjust the volume based on the slider value
    audio.volume = volumeSlider.value;

    // Adjust the effect level directly within the playSound function
    const effectLevel = volumeSlider.value * 100; // You can adjust this based on your needs

    // Use the effect level when processing sound effects (you can replace the console.log with actual sound processing)
    console.log('Effect Level:', effectLevel);

    audio.play();
  }

  // Function to handle button click
  function handleButtonClick() {
    const soundName = this.getAttribute('data-sound');
    playSound(soundName);

    // Add a class to indicate the button is in the pressed state
    this.classList.add('drum-pad-pressed');

    // Remove the class after a short delay to simulate the button returning to its starting position
    setTimeout(() => {
      this.classList.remove('drum-pad-pressed');
    }, 100);
  }

  // Event listeners for mouse clicks on drum buttons
  drumButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });

  // Event listener for keyboard interaction
  document.addEventListener('keydown', function (event) {
    // Get the key corresponding to the pressed key
    const key = event.key.toLowerCase();

    const keyMappings = {
      '1': 'kick-1',
      '2': 'kick-2',
      '3': 'kick-3',
      '4': 'kick-4',
      '5': 'kick-5',
      '6': 'kick-6',
      '7': 'kick-7',
      '8': 'kick-8',
      '9': 'kick-9',
      '0': 'kick-10',

      'q': 'snare-1',
      'w': 'snare-2',
      'e': 'snare-3',
      'r': 'snare-4',
      't': 'snare-5',
      'y': 'snare-6',
      'u': 'snare-7',
      'i': 'snare-8',
      'o': 'snare-9',
      'p': 'snare-10',

      'a': 'hihat-1',
      's': 'hihat-2',
      'd': 'hihat-3',
      'f': 'hihat-4',
      'g': 'hihat-5',
      'h': 'hihat-6',
      'j': 'hihat-7',
      'k': 'hihat-8',
      'l': 'hihat-9',
      ';': 'hihat-10',

      'z': 'tom-1',
      'x': 'tom-2',
      'c': 'tom-3',
      'v': 'tom-4',
      'b': 'tom-5',
      'n': 'tom-6',
      'm': 'tom-7',
      ',': 'tom-8',
      '.': 'tom-9'
    };

    // Find the corresponding button and simulate a click
    const targetButton = Array.from(drumButtons).find(button => {
      return button.getAttribute('data-sound').toLowerCase() === keyMappings[key];
    });

    if (targetButton) {
      handleButtonClick.call(targetButton);
    }
  });

  // Event listener for function buttons
  functionButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      // Prevent the default behavior of the function button
      event.preventDefault();

      // Add your custom logic for the function button here if needed
    });
  });

  // Event listener for volume slider changes
  volumeSlider.addEventListener('input', function () {
    // Update the volume for any currently playing sounds
    // This is useful if you want to change the volume dynamically while sounds are playing
    // You may also update the volume in the playSound function before playing the audio
    // (audio.volume = this.value;)
  });
});
