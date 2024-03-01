// Function to open the specified website in a new tab after a delay
function openWebsiteInNewTab() {
    window.open('https://ivucb4t.github.io/Loop-web/', '_blank'); // Specify the URL you want to open in a new tab
}

// Loop to open the website in a new tab 7 times with a delay between each tab opening
for (let i = 0; i < 7; i++) {
    setTimeout(openWebsiteInNewTab, i * 1000); // Delay increases for each iteration (e.g., 1000ms = 1 seconds)
}
