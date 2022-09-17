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

items.forEach(e => {
    e.addEventListener('click', function(element) {
        let text = e.children[0].textContent;
        title.textContent = text;
        let index = Array.from(e.parentNode.children).indexOf(e);
        description.textContent = descriptions[index];
        document.getElementById("popup-1").classList.toggle('active');
    })
})

function togglePopup(){
    document.getElementById("popup-1").classList.toggle('active');
}






