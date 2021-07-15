var prizes = [0, 0, 0, 1, 5, 10, 25, 50, 100];

function clicked() {
  const reward = document.getElementById("reward");
  console.log(prizes.length, Math.floor(Math.random() * (prizes.length - 1)));
  let prize = prizes[Math.floor(Math.random() * prizes.length)];

  reward.classList = "";

  if (prize == 0) {
    reward.innerHTML = `Better luck next time, you got ${prize}$`;
    reward.classList.add("red-text");
  } else if (prize == 100) {
    reward.innerHTML = `Congratulations 🎉, you got the lottery 🍀 and won ${prize}$`;
    reward.classList.add("green-text");
  } else {
    reward.innerHTML = `Congratulations 🎉, you won ${prize}$`;
    reward.classList.add("blue-text");
  }
}
