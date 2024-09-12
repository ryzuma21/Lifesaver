document.querySelector('.verse').innerHTML = `
        <p>Telah sempurna kalimat Tuhanmu (Al-Qur’an) dengan (mengandung) kebenaran dan keadilan. Tidak ada (seorang pun) yang dapat mengubah kalimat-kalimat-Nya. Dia Maha Mendengar lagi Maha Mengetahui.</p>
        <p><em class="source">Source: Al'Anam, Ayat 115</em></p>
        `;

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
        document.querySelector('.verse').innerHTML = `<p>Coba lagi</p>`;

    }

    
}



