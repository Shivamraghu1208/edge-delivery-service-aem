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
    console.log('Fetched data:', heroData);
    console.log('Hero element:', hero);
    return data.heroImageList.items[0]; // Fetch the first Hero Image
  }

  async function renderTestContentFragment() {
    const heroData = await fetchTestContentFragment();
    const hero = document.createElement('div');
    hero.classList.add('hero-image');
    hero.innerHTML = `
      <img src="${heroData.image._path}" alt="${heroData.title}" />
      <h2>${heroData.title}</h2>
      <p>${heroData.description}</p>
    `;
    document.body.append(hero);
  }
  
  renderTestContentFragment();
  