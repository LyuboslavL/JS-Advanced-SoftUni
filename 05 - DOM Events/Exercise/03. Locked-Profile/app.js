// // function lockedProfile() {
// //     let showMoreButton = document.querySelectorAll('button');
// //     for (let button of showMoreButton) {
// //         button.addEventListener('click', function (e) {
// //             let unlockedCheck = e.currentTarget.parentNode.querySelector('.profile input[type=radio]:checked');
// //             let hiddenPart = unlockedCheck.parentNode.querySelector('.profile div');
// //             if (unlockedCheck.value === 'unlock') {
// //                 if (button.textContent === 'Show more') {
// //                     hiddenPart.style.display = 'block';
// //                     button.textContent = 'Hide it';
// //                 } else if (button.textContent === 'Hide it') {
// //                     hiddenPart.style.display = 'none';
// //                     button.textContent = 'Show more';
// //                 }
// //             }
// //         })
// //     }
// // }

// function lockedProfile() {
//     document.getElementById('main').addEventListener('click', (e) => {
//         if (e.target.tagName === 'BUTTON') {
//             const profile = e.target.parentNode;
//             const isLocked = profile.querySelector('input[type=radio]:checked').value === 'lock';

//             if (isLocked) {
//                 return;
//             }

//             let div = profile.querySelector('div');
//             let isVisible = div.style.display === 'block';
//             div.style.display = isVisible ? 'none' : 'block';
//             e.target.textContent = !isVisible ? 'Hide it' : 'Show more'; 
//         }
//     })
// }

function lockedProfile() {
    let showMoreButtons = document.querySelectorAll('button');
    for (let button of showMoreButtons) {
        button.addEventListener('click', function(e) {
            let wholeParent = e.target.parentElement;
            let hiddenPart = wholeParent.querySelector('div');
            if (wholeParent.querySelector('.profile input[type=radio]:checked').value === 'unlock') {
                let isVisible = hiddenPart.style.display === 'block';
                hiddenPart.style.display = isVisible ? 'none' : 'block';
                button.textContent = isVisible ? 'Show more' : 'Hide it';
            }
        })
    }
}