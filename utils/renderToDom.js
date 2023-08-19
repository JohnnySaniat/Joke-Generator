const renderToDom = (divId, HTML) => {
  const div = document.querySelector(divId);
  div.innerHTML = HTML;
};

export default renderToDom;
