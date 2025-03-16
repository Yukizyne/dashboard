const content = document.querySelector('.content');
const title = document.querySelector('.title');
const buttonGroup = document.querySelector('.btn-group');
const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');

yesBtn.addEventListener('click', () => {
    title.innerHTML = 'I knew it heheh!';
    buttonGroup.style.display = 'none';
});

noBtn.addEventListener('mouseover', () => {
    const contentRect = content.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const i = Math.floor(Math.random() * (contentRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (contentRect.height - noBtnRect.height));

    noBtn.style.position = 'absolute';
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
