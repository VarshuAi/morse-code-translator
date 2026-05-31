
            const map = { 'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/' };
            const inp = document.getElementById('morse-inp');
            const res = document.getElementById('morse-res');
            inp.addEventListener('input', () => {
                const text = inp.value.toUpperCase();
                let coded = [];
                for(let i=0; i<text.length; i++) {
                    if(map[text[i]]) coded.push(map[text[i]]);
                }
                res.innerText = coded.join(' ');
            });
        