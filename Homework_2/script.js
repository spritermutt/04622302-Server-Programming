        function letterWaveCase(str) {
           
            if (str.length < 10 || !(str.match(/^[a-z]+$/))) {
                return ('กรุณาใส่ A-Z จำนวน 10 ตัวอักษรขึ้นไป');
            }
            let result = [];
            for (let i = 0; i < str.length; i++) {
                let word = '';
                for (let j = 0; j < str.length; j++) {
                    if (j === i) {
                        word += str[j].toUpperCase();
                    } else {
                        word += str[j].toLowerCase();
                    }
                }
                result.push('[' + word + ']');
            }
            return result;
            
        }
        word = prompt("Enter Word :");
        word = word.split(' ').join('');
            alert(letterWaveCase(word));
            alert(Array.isArray(letterWaveCase(word)));