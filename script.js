


// fetch('https://api.thecatapi.com/v1/images/search')
//   .then((response) => response.json())
//   .then((data) => {
//       console.log(data)
//   })


function fetchAndDisplayCatImage() {
      const endpoint = 'https://api.thecatapi.com/v1/images/search';

      fetch(endpoint)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(images => {
          displayCatImage(images[0].url);
        })
        .catch(error => console.error('Error fetching cat image:', error));
          
                                             
    }

    function displayCatImage(imageUrl) {
      const catImage = document.getElementById('catImage');
      catImage.src = imageUrl;
    }





