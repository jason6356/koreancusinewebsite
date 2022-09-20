const items = document.querySelectorAll('#item');
const title = document.querySelector('.content h1')
const description = document.querySelector('.content p');

const descriptions = [
    `Terms and Condition stuffs goes here :0`,
    `Location`,
    `Introduction`,
    `Social`,
    `Promises`,
    `Product`
]

const ids = [
    'popup-1',
    'popup-2',
    'popup-3',
    'popup-4',
    'popup-5',
    'popup-6'
]

let onGoingID = "";

items.forEach(e => {
    e.addEventListener('click', function(element) {
        let text = e.children[0].textContent;
        title.textContent = text;
        let index = Array.from(e.parentNode.children).indexOf(e);
        //description.textContent = descriptions[index];
        let divID = ids[index];
        document.getElementById(divID).classList.toggle('active');
        onGoingID = divID;
    })
})

function togglePopup(){
    document.getElementById(onGoingID).classList.toggle('active');
}






