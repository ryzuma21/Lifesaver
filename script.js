

      
     document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); 
    });
    document.addEventListener('keydown', function(event) {
      
        if (event.key === 'F12' || 
            (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) || 
            (event.ctrlKey && event.key === 'U') || 
            (event.metaKey && event.key === 'I')) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
    });
    


   document.querySelector('.verse').innerHTML = `
         <p class="arabic">وَتَمَّتْ كَلِمَتُ رَبِّكَ صِدْقًا وَّعَدْلًاۗ لَا مُبَدِّلَ لِكَلِمٰتِهٖ ۚوَهُوَ السَّمِيْعُ الْعَلِيْمُ </p>
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
        
        <p class="arabic">${verseData.arabic}</p>
        <p>${verseData.verse}</p>
        <p><em class="source">Source: ${verseData.source}</em></p>
        `;

    } else {
        document.querySelector('.verse').innerHTML = `<p>Coba lagi</p>`;

    }

    
}



