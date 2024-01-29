document.getElementById('fetchButton').addEventListener('click', function() {
    const inscription = document.getElementById('inscriptionInput').value;
    const url = `https://ordinals.com/content/${inscription}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contentDisplay').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            document.getElementById('contentDisplay').innerHTML = 'Failed to fetch content.';
        });
});
