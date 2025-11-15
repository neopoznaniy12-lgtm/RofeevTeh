
const tg = window.Telegram.WebApp;

tg.expand();

document.body.style.backgroundColor = tg.backgroundColor;
document.body.style.color = tg.textColor;

const user = tg.initDataUnsafe?.user || null;

function sendToBot(data) {
    tg.sendData(JSON.stringify(data));
}

const buttons = document.querySelectorAll('.btn-small');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        sendToBot({ action: 'open_category', category: btn.innerText });
    });
});

const infoBtn = document.querySelector('.btn');
if (infoBtn) {
    infoBtn.addEventListener('click', () => {
        sendToBot({ action: 'more_info' });
    });
}
