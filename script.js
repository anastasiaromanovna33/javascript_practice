
//checkbox
function fun1(){
    var checkb;
checkb = document.getElementById('one');
if(checkb.checked){
    alert('Выбран');
}
else
{
    alert('Не выбран');
}
}

//radiobutton
function fun2(){
    var radi = document.getElementsByName('r1');
    for(var i=0; i<radi.length; i++){
        if(radi[i].checked){
            alert('Выбран ' + i + ' элемент');
        }
    }
}

//select
function fun3(){
var sel = document.getElementById('mySelect').selectedIndex;
var options = document.getElementById('mySelect').options;
alert('Selected optional ' + options[sel].text);
}

//range
function fun4(){
    //p
    var rng = document.getElementById('r2');
    var p = document.getElementById('two');
    //input
    p.innerHTML = rng.value;
    var i1 = document.getElementById('i1');
    i1.value = rng.value;
    //div
    var div = document.getElementById('test');
    div.style.width=rng.value+ 'px';

}

//css generator

function fun5(){
    var rtl = document.getElementById('rtl').value;
    var rtr = document.getElementById('rtr').value;
    var rbl = document.getElementById('rbl').value;
    var rbr = document.getElementById('rbr').value;

    var ttl = document.getElementById('ttl');
    var tbl = document.getElementById('tbl');
    var ttr = document.getElementById('ttr');
    var tbr = document.getElementById('tbr');

    var block = document.getElementById('block');

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbl + 'px ' + rbr + 'px ';
}


//drop-down menu

document.getElementById('nav').onmouseover = function(event){
    var target = event.target;
    if(target.className == 'menu-item'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}
document.onmouseover = function(event){
    var target = event.target;
    console.log(event.target);
    if(target.className!='menu-item'&&target.className!='submenu'){
        closeMenu();
    }
    
}

function closeMenu(){
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for(var i=0; i<subm.length; i++){
        subm[i].style.display="none";
    }
}

//tabs
var tab;
var tabContent;
window.onload=function(){
    tabContent=document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1)   
}

function hideTabsContent(a){
    for(var i=a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick=function(event){
    var target = event.target;
    if(target.className == 'tab'){
        for(var i=0;i<tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b){
    if(tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

//modal window
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}


//animation
function myMove(){
    var elem = document.getElementById('myAnimation');
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame(){
        if (pos == 350){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos +'px';
            elem.style.left = pos +'px';
        }
    }
}


//carousel
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if(n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }

    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className =dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}

//filter
function filterfun(){
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName('li');

    for(i=0; i<li.length; i++){
        a=li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter)> -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
        }
    }



//calculator
function plus(){
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;


}

function minus(){
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById('out').innerHTML = result;

}
function mul(){
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById('out').innerHTML = result;

}
function dev(){
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;
    document.getElementById('out').innerHTML = result;

}

//api
function initMap() {
    const sydney = new google.maps.LatLng(-33.867, 151.195);
  
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
      center: sydney,
      zoom: 15,
    });
}

//modal img
var modal_1 = document.getElementById('myModal2');
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function(){
    modal_1.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHtml = this.alt;
}
var span = document.getElementsByClassName("class")[0];
span.onclick = function(){
    modal_1.style.display = "none";
}

//progress-bar
function move(){
    var elem = document.getElementById('mybar');
    var width =10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width>=100){
            clearInterval(id);
        } else{
            width++;
            elem.style.width = width+'%';
            document.getElementById('label').innerHTML = width*1 + '%';
        }
    }
}

//popup
function popup(){
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

//accordion
var acc = document.getElementsByClassName("accordion"),
    i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        for (j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.classList.remove("show");

            } else {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }

        }

    }
}