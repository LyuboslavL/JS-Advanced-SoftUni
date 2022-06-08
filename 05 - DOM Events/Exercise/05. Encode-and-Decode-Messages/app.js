// function encodeAndDecodeMessages() {
//     let textareas = document.querySelectorAll('textarea');
//     let buttons = document.querySelectorAll('button');

//     // let mapObj = {
//     //     encode: {
//     //         textarea: textareas[0],
//     //         btn: buttons[0],
//     //         transformChar(char) {
//     //             return String.fromCharCode(char.charCodeAt(0) + 1)
//     //         }
//     //         // func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
//     //     },
//     //     decode: {
//     //         textarea: textareas[1],
//     //         btn: buttons[1],
//     //         transformChar(char) {
//     //             return String.fromCharCode(char.charCodeAt(0) - 1)
//     //         }
//     //         // func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
//     //     }
//     // }

//     // document.getElementById('main').addEventListener('click', function(e) {
//     //     if (e.target.tagName !== 'BUTTON') {
//     //         return;
//     //     }

//     //     let type = e.target.textContent.toLowerCase().includes('encode') ? 'encode' : 'decode';

//     //     let message = mapObj[type].textarea.value
//     //                             .split('').map(mapObj[type].transformChar).join('');
        
//     //     mapObj.encode.textarea.value = '';
//     //     mapObj.decode.textarea.value = message;
//     // })

//     buttons[0].addEventListener('click', function(e) {
//         let message = textareas[0].value.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
//         textareas[0].value = '';
//         textareas[1].value = message;
//     });

//     buttons[1].addEventListener('click', function(e) {
//         let message = textareas[1].value.split('').map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
//         textareas[1].value = message;
//     })
// }

function encodeAndDecodeMessages() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let textAreas = Array.from(document.getElementsByTagName('textarea'));

    for (let btn of buttons) {
        btn.addEventListener('click', function(e) {
            if (btn.textContent.toLowerCase().includes('encode')) {
                let textToEncode = textAreas[0].value;
                textAreas[1].value = textToEncode.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
                textAreas[0].value = '';
            } else {
                let textToDecode = textAreas[1].value;
                textAreas[1].value = textToDecode.split('').map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
            }
        })
    }
}