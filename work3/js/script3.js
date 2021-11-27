/*-----Все элементы на js------*/
let body = document.querySelector('body'); // обзявляем body для borderbox
let parent = document.querySelector('.parent'); // обзявляем родителя

/*---- Создаем детей ---*/
let header = document.createElement('div');
header.className = 'header';

let content = document.createElement('div');
content.className = 'content';

let footer = document.createElement('div');
footer.className = 'footer';

/*----Содаем стили для родителя---*/
let styleParent = {
    'with': parent.style.width = '100%',
    'height': parent.style.height = '100%',
    'border': parent.style.border = '1px solid rgba(20, 20, 20, 0.4)'
};
/*---------------------------Содаем стили для детей------------------------*/
let styleHeader = {
    'width': header.style.width = '100%',
    'height': header.style.height = '100px',
    'background': header.style.background = '#8aafcf',
    'border': header.style.border = '1px solid rgba(20, 20, 20, 0.4)',
    'margin': header.style.margin = 'auto auto 20px auto',
    'display': header.style.display = 'flex'
};
//
let styleContent = {
    'width': content.style.width = '80%',
    'height': content.style.height = '100px',
    'background': content.style.background = '#2aafcf',
    'border': content.style.border = '1px solid rgba(20, 20, 20, 0.4)',
    'margin': content.style.margin = 'auto auto 20px auto'
};
//
let styleFooter = { // фиксированный подвал
    'margin': footer.style.margin = '0',
    'left': footer.style.left = '0',
    'bottom': footer.style.bottom = '0',
    'width': footer.style.width = '100%',
    'height': footer.style.height = '80px',
    'background': footer.style.background = '#6aafcf',
    'border': footer.style.border = '1px solid rgba(20, 20, 20, 0.4)',
    'boxSizing': footer.style.boxSizing = 'border-box',
    'position': footer.style.position = 'fixed'
};
//----Добавляем детей на страницу-------
parent.appendChild(header);
parent.appendChild(content);
parent.appendChild(footer);