feather.replace();
      
     document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); 
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


function copyText() {
    const verseElement = document.querySelector('.verse');
    
    
    if (verseElement.innerText) {
        const verseText = verseElement.innerText     
        navigator.clipboard.writeText(verseText).then(() => {
            console.log("Verse copied to clipboard successfully!");
        }).catch(err => {
            console.error("Error copying text: ", err);
        });
    } else {
        console.log("No verse available to copy.");
    }
}

