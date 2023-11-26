
// fetch('https://api.thecatapi.com/v1/images/search?limit=10')
   
//    .then(res => res.json())
//    .then((res => {
//       console.log(res)
//       for (i of res) {
//          console.log('[0]:', i.url)
            
//       }
//       
// function fetchAndDisplayImages() {
//    const endpoint = 'https://api.thecatapi.com/v1/images/search';


  
//
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




