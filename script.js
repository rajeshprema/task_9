

function fetchAndDisplayImage(url) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.blob();
                })
                .then(blob => {
            
                    var objectURL = URL.createObjectURL(blob);
                    
                    document.getElementById("catImage").src = objectURL;
                })
                .catch(error => console.error("Fetch error:", error));
        }


        fetchAndDisplayImage("https://cdn2.thecatapi.com/images/GAmy2bg8G.jpg");