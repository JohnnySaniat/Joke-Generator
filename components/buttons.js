import renderToDom from '../utils/renderToDom';

const jokeBtn = () => {
  const domString = '<button type="button" class="btn btn-primary">GET A JOKE</button>';
  renderToDom('#joke-btn', domString);
};

const punchlineBtn = () => {
  const domString = '<button type="button" class="btn btn-primary">GET THE PUNCHLINE</button>';
  renderToDom('#punchline-btn', domString);
};

const resetBtn = () => {
  const domString = '<button type="button" class="btn btn-primary">GET ANOTHER JOKE</button>';
  renderToDom('#reset-btn', domString);
};

export { jokeBtn, punchlineBtn, resetBtn };
