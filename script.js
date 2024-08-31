


async function getVerse() {

            

    const response = await fetch('./content.json');
    const data = await response.json();


    const mood = document.getElementById('mood').value;
    const filteredVerses = data.verses.filter(verse => verse.mood === mood);

    if (filteredVerses.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredVerses.length)
        const verseData = filteredVerses[randomIndex];

        document.querySelector('.verse').innerHTML = `
        <p>${verseData.verse}</p>
        <p><em class="source">Source: ${verseData.source}</em></p>
        `;

    } else {
        document.querySelector('.verse').innerHTML = `<p>No verse for this mood yet.</p>`;

    }
}