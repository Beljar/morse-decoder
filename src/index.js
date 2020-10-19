const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodingTable = {"**********":" "};
    Object.keys(MORSE_TABLE).map((itm) => {
        let code = itm
        .split("")
        .map(char => (char == "." ? "10" : '11'))
        .join("")
        .padStart(10,"0");
        decodingTable[code] = MORSE_TABLE[itm];
    });
    let re = /[10*]{10}/g;
    let chunk;
    let decoded = [];
    while (chunk = re.exec(expr)){
        decoded.push(decodingTable[chunk]);
    };
    return decoded.join("");
}
//console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));

module.exports = {
    decode
}