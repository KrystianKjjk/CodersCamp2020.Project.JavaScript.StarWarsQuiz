function displayText(text) {
  if (typeof text !== 'string') {
    throw Error('This text area needs to have string data types only');
  }

  const gameRules = document.createElement('div');
  gameRules.id = 'howToPlay';
  const headerDiv = document.createElement('div');
  headerDiv.className = 'headerDiv';

  const image = document.createElement('i');
  image.className = 'fas fa-graduation-cap';
  headerDiv.appendChild(image);

  const header = document.createElement('p');
  header.innerText = 'Mode Rules';
  headerDiv.appendChild(header);
  gameRules.appendChild(headerDiv);

  const rules = document.createElement('p');
  rules.className = 'gameRulesP';
  rules.innerText = text;
  gameRules.appendChild(rules);

  return gameRules;
}

export default displayText;
