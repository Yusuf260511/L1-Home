let body = document.body;
let header = document.createElement('header');
body.appendChild(header);
let nav = document.createElement('nav');
    header.appendChild(nav);
    let logo = document.createElement('img');
    logo.src = 'img/LOGO.png';
    nav.appendChild(logo);
    let ulbtn = document.createElement('div');
    nav.appendChild(ulbtn);
    let navUl = document.createElement('ul');
    ulbtn.appendChild(navUl);
        let li = document.createElement('li');
        navUl.appendChild(li);
        li.textContent = 'Home';
        let li1 = document.createElement('li');
        navUl.appendChild(li1);
        li1.textContent = 'About us';
        let li2 = document.createElement('li');
        navUl.appendChild(li2);
        li2.textContent = 'Portfolio';
    let btn = document.createElement('div');
    ulbtn.appendChild(btn);
        let btn1 = document.createElement('button');
        btn.appendChild(btn1);
        btn1.textContent = 'LightMode';
        let btn2 = document.createElement('button');
        btn.appendChild(btn2);
    btn2.textContent = 'DarkMode';
let headerContent = document.createElement('div');
header.appendChild(headerContent);
let HCText = document.createElement('div');
headerContent.appendChild(HCText);
    let h1 = document.createElement('h1');
    HCText.appendChild(h1);
    h1.textContent = 'Work that we produce for our clients'
    let p = document.createElement('p');
    HCText.appendChild(p);
    p.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`;
    let btn3 = document.createElement('button');
    HCText.appendChild(btn3);
    btn3.textContent = 'Get more details';
let img = document.createElement('img');
img.src = 'img/img.png';
headerContent.appendChild(img);



btn2.addEventListener("click", function() {
    body.style.backgroundColor = '#020100';
    body.style.color = 'white';
    btn1.style.color = 'white';
    btn1.style.backgroundColor = '#C4B5A5';
    btn2.style.color = 'white';
    btn2.style.backgroundColor = '#FB982F';
    btn3.style.color = 'white';
    logo.src = 'img/LOGO1.png';
})
btn1.addEventListener("click", function() {
    body.style.backgroundColor = '#C4B5A5';
    body.style.color = 'black';
    btn1.style.color = 'black';
    btn1.style.backgroundColor = '#FB982F';
    btn2.style.color = 'white';
    btn2.style.backgroundColor = 'black'
    btn3.style.color = 'black';
    logo.src = 'img/LOGO.png';
})



body.style.transition = 'all 0.5s';
body.style.backgroundColor = '#C4B5A5';
body.style.height = '831px';
body.style.boxSizing = 'border-box';
body.style.padding = '54px 42px 0 119px';
body.style.fontFamily = 'Poppins, serif';

nav.style.display = 'flex';
nav.style.alignItems = 'center';
nav.style.justifyContent = 'space-between';

logo.style.width = '82px';

navUl.style.listStyleType = 'none';
navUl.style.fontSize = '16px';
navUl.style.fontWeight = '400';
navUl.style.display = 'flex';
navUl.style.gap = '88px';

ulbtn.style.display = 'flex';
ulbtn.style.alignItems = 'center';
ulbtn.style.gap = '21.92px';

btn.style.display = 'flex';
btn.style.gap = '16.23px';

btn1.style.backgroundColor = '#FB982F';
btn1.style.border = 'none';
btn1.style.width = '131.77px';
btn1.style.height = '41.34px';
btn1.style.borderRadius = '6px';
btn1.style.fontFamily = 'Poppins, serif';
btn1.style.fontWeight = '700';

btn2.style.backgroundColor = '#000000';
btn2.style.border = 'none';
btn2.style.width = '131.77px';
btn2.style.height = '41.34px';
btn2.style.borderRadius = '6px';
btn2.style.fontFamily = 'Poppins, serif';
btn2.style.fontWeight = '700';
btn2.style.boxShadow = '0px 4px 4px 0px #00000040;';
btn2.style.color = 'white';

headerContent.style.marginTop = '83px';
headerContent.style.display = 'flex';
headerContent.style.alignItems = 'center';
headerContent.style.justifyContent = 'space-between';

HCText.style.display = 'flex';
HCText.style.flexDirection = 'column';
HCText.style.gap = '77px';

h1.style.width = '420px';
h1.style.fontSize = '36px';
h1.style.fontWeight = '700';
h1.style.lineHeight = '55.87px';

p.style.width = '426px';
p.style.fontSize = '16px';
p.style.fontWeight = '500';

btn3.style.border = 'none';
btn3.style.backgroundColor = '#FB9E3C';
btn3.style.width = '195px';
btn3.style.height = '53px';
btn3.style.borderRadius = '40px';
btn3.style.fontSize = '16px';
btn3.style.fontWeight = '500';
btn3.style.fontFamily = 'Poppins, serif';

img.style.width = '739px';