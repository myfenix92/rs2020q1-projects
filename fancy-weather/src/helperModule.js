import { REFRESH } from './constModule';

function viewHelp() {
  document.querySelector('.help').style.display = 'block';
}

document.getElementById('helper').addEventListener('mouseover', viewHelp);
document.getElementById('helper').addEventListener('mouseout', () => {
  document.querySelector('.help').style.display = 'none';
});

function GetRandom() {
  const max = 1000000;
  const min = 1;
  return Math.floor(Math.random() * max + min);
}

function activeClassResresh() {
  REFRESH.classList.remove('active_refresh');
}

export { GetRandom, activeClassResresh };
