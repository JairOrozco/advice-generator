const adviceCard = document.querySelector('#adviceCard');
const adviceNumber = document.querySelector('#adviceNumber');
const adviceContent = document.querySelector('#adviceContent');
const adviceDice = document.querySelector('#adviceDice');

const url_base = 'https://api.adviceslip.com/advice';

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

let getAdvice = async (url) => {
    let response = await getData(url);
    let advice = await response.slip;
    adviceNumber.textContent = `#${advice.id}`
    adviceContent.textContent = `"${advice.advice}"`;
}
getAdvice(url_base);

adviceDice.addEventListener('click', function() {
    getAdvice(url_base);
});