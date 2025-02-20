async function fetchTestContentFragment() {
    const response = await fetch('/content/cq:graphql/global/endpoint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        {
          testContentFragmentList {
            items {
              title
              _path
              imagePath {
                __typename
                ... on ImageRef {
                  _path
                }
              }
              description {
                plaintext
              }
            }
          }
        }
        `,
      }),
    });
    const { data } = await response.json();
    console.log('Fetched data:', data);
    return data.testContentFragmentList.items[0]; // Fetch the first item
  }
  
  async function renderTestContentFragment() {
    console.log('Start rendering Test Content');
  
    const heroData = await fetchTestContentFragment();
    const hero = document.createElement('div');
    hero.classList.add('hero-image');
    hero.innerHTML = `
      <img src="${heroData.imagePath._path}" alt="${heroData.title}" />
      <h2>${heroData.title}</h2>
      <p>${heroData.description.plaintext}</p>
    `;
    document.body.append(hero);
  }
  
  // Run the function when the page loads
  window.onload = async function () {
    console.log('Page fully loaded');
    await renderTestContentFragment();
  };