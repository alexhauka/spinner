const spinner = function(rotations) {
  let spin = "|/-\\|/-\\|"; // --> string of spin positions
  rotations *= 9; // --> 9 is the number of positions for spinner as shown above
  let time = 100;
  for (let i = 0, j = 0; i < rotations; i++, j++) {
    if (j === spin.length) { // --> if it counts outside of the length of spin, it resets that variable to wrap around
      j = 0; // --> moment of wrap
    } else {
      setTimeout(() => {
        process.stdout.write(`\r${spin[j]} `);
      }, time += 200);
    }
  }
};

spinner(3); // --> call function passing param as number of full rotations you'd like (try changing 3!)