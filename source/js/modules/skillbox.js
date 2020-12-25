const skillboxList = document.querySelectorAll('.skillbox');

const setBarWidth = (item, value) => {
  item.style.width = value;
};

const initSkillbox = (skillbox) => {
  const progressBar = skillbox.querySelector('.skillbox__progress');
  const value = progressBar.dataset.value;

  setBarWidth(progressBar, value);
};

export {initSkillbox, skillboxList};
