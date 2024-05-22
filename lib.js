function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

const mahasiswa = [];
for (let i = 0; i < 400; i++) {
  const jawabanBenar = getRandomInt(1, 5); // Random integer between 2 and 5 inclusive
  const waktuMembaca = getRandomFloat(4, 7.5, 2); // Random float between 4 and 7.5 with 2 decimal places
  mahasiswa.push({ jawabanBenar, waktuMembaca });
}

module.exports = mahasiswa;
