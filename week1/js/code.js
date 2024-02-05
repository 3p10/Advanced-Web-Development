const container = document.createElement('div');
container.className = 'container';

const breeds = ['pitbull', 'doberman', 'eskimo', 'husky', 'pug'];

async function fetchWikiText(breedName) { //fetching text
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${breedName}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.extract;
}

// Create five wiki items
for (let i = 0; i < breeds.length; i++) {

  const wikiItem = document.createElement('div');
  wikiItem.className = 'wiki-item';

  const wikiHeader = document.createElement('h1');
  wikiHeader.className = 'wiki-header';
  wikiHeader.textContent = breeds[i];

  const wikiContent = document.createElement('div');
  wikiContent.className = 'wiki-content';

  const imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';

  const wikiImg = document.createElement('img');
  wikiImg.className = 'wiki-img';

  fetch(`https://dog.ceo/api/breed/${breeds[i]}/images/random`) //fetching image
    .then(response => response.json())
    .then(data => wikiImg.src = data.message);

  const wikiText = document.createElement('p');
  wikiText.className = 'wiki-text';

  fetchWikiText(breeds[i]).then(text => {
    wikiText.textContent = text;
  });

  imgContainer.appendChild(wikiImg);
  wikiContent.appendChild(imgContainer);
  wikiContent.appendChild(wikiText);

  wikiItem.appendChild(wikiHeader);
  wikiItem.appendChild(wikiContent);

  container.appendChild(wikiItem);
}

document.body.appendChild(container); //appending container div to the body
