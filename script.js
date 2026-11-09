async function getJoke() {
    const setup = document.getElementById("jokeSetup");
    const punchline = document.getElementById("jokePunchline");

    // Show loading state
    setup.textContent = "Loading Funny jokes...";
    punchline.textContent = "";
    punchline.classList.remove("opacity-100");
    punchline.classList.add("opacity-0");

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        
        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();

        // Display setup
        setup.textContent = data.setup;

        //punchline
        setTimeout(() => {
            punchline.textContent = data.punchline;
            punchline.classList.remove("opacity-0");
            punchline.classList.add("opacity-100");
        }, 600);

    } catch (error) {
        setup.textContent = "Oops! Could not fetch a joke. Try again.";
        console.error(error);
    }
}