function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const date = now.toDateString();

  const timeString = `${hours}:${minutes}:${getFormattedSeconds(seconds)}`;
  document.getElementById('time').innerText = timeString;
  document.getElementById('date').innerText = date;
}

function getFormattedSeconds(seconds) {
  return seconds.replace(/./g, char => {
    const superscripts = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹'];
    const digit = parseInt(char);
    return isNaN(digit) ? char : superscripts[digit];
  });
}

function startClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

startClock();
