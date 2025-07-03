function diceGameSimulation(numSimulations) {
  simulations = [];
  for (let i = 0; i < numSimulations; i++) {
    sim = {};
    sim.dice1 = Math.floor(Math.random() * (6 - 2) + 1);
    sim.dice2 = Math.floor(Math.random() * (6 - 2) + 1);
    sim.sum = sim.dice1 + sim.dice2;
    if (sim.sum === 7 || sim.sum === 11) {
      sim.result = "win";
    } else if (sim.sum === 2 || sim.sum === 3 || sim.sum === 12) {
      sim.result = "lose";
    } else {
      sim.result = "roll again";
    }
    simulations.push(sim);
  }
  return simulations;
}

module.exports = diceGameSimulation;
