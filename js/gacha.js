var GachaBox = 0;
var Result = "";
document.getElementById('myGacha').onclick = function() {
	if (GachaBox == 0)
	{
		RandomGacha();
	}
	else
	{
		if (Number(document.getElementById('coin').value) >= 1000)
		{
			var Coin = 1000;
			document.getElementById('coin').value -= Coin;
			setTimeout(RandomGacha10, 0);
			setTimeout(CloseModal10, 5000);

			setTimeout(RandomGacha10, 5000);
			setTimeout(CloseModal10, 10000);

			setTimeout(RandomGacha10, 10000);
			setTimeout(CloseModal10, 15000);

			setTimeout(RandomGacha10, 15000);
			setTimeout(CloseModal10, 20000);

			setTimeout(RandomGacha10, 20000);
			setTimeout(CloseModal10, 25000);

			setTimeout(RandomGacha10, 25000);
			setTimeout(CloseModal10, 30000);

			setTimeout(RandomGacha10, 30000);
			setTimeout(CloseModal10, 35000);

			setTimeout(RandomGacha10, 35000);
			setTimeout(CloseModal10, 40000);

			setTimeout(RandomGacha10, 40000);
			setTimeout(CloseModal10, 45000);

			setTimeout(RandomGacha10, 45000);
			setTimeout(CloseModal10, 50000);
		}
		else
		{
			toast("คุณมี G ไม่พอ");
		}
	}
}

function RandomGacha(){
if (Number(document.getElementById('coin').value) >= 300)
{
setTimeout(DoRotateY180, 0);
setTimeout(DoRotateY0, 600);
document.getElementById('myGacha').style.display = "none";
var Coin = 300;
document.getElementById('coin').value -= Coin;

var IRandom = Math.floor(Math.random() * 101) + 1;
if (IRandom > 100)
{
Result = "คุณได้รับ ULR ";
setTimeout(PopupULR, 1000);
}
else if (IRandom < 101 && IRandom > 97)
{
Result = "คุณได้รับ SSR ";
setTimeout(PopupSSR, 1000);
}
else if (IRandom < 98 && IRandom > 94)
{
Result = "คุณได้รับ SR ";
setTimeout(PopupSR, 1000);
}
else if (IRandom < 95 && IRandom > 85)
{
Result = "คุณได้รับ S ";
setTimeout(PopupSG, 1000);
}
else if (IRandom <= 86)
{
Result = "เกลือ ";
setTimeout(PopupS, 1000);
}
}
else
{
toast("คุณมี G ไม่พอ");
}
}


function RandomGacha10(){
setTimeout(DoRotateY180, 0);
setTimeout(DoRotateY0, 600);
document.getElementById('myGacha').style.display = "none";

var IRandom = Math.floor(Math.random() * 101) + 1;
if (IRandom > 100)
{
Result = "คุณได้รับ ULR ";
setTimeout(PopupULR, 1000);
GaULR += 1;
}
else if (IRandom < 101 && IRandom > 97)
{
Result = "คุณได้รับ SSR ";
setTimeout(PopupSSR, 1000);
GaSSR += 1;
}
else if (IRandom < 98 && IRandom > 94)
{
Result = "คุณได้รับ SR ";
setTimeout(PopupSR, 1000);
GaSR += 1;
}
else if (IRandom < 95 && IRandom > 85)
{
Result = "คุณได้รับ S ";
setTimeout(PopupSG, 1000);
GaS += 1;
}
else if (IRandom <= 86)
{
Result = "เกลือ ";
setTimeout(PopupS, 1000);
Gs += 1;
}
setTimeout(DoAddGachaText, 2000);
}

function DoRotateY180(){
document.getElementById("gachaimg").style.transform = "rotateY(180deg)";
}

function DoRotateY0(){
document.getElementById("gachaimg").style.transform = "rotateY(0deg)";
}

document.getElementById('getCoin').onclick = function() {
var coins = 1000;
var stock = 0;
var store = 0;
var st = "";
stock = document.getElementById('coin').value;
store = stock;
coins += Number(store);
document.getElementById('coin').value = coins;
toast("คุณได้รับ 1000 G");
}
var myImageULR = ["./images/gacha/ulr.jpg"];

function PopupULR() {
	
document.getElementById('myModal').style.display = "block";
document.getElementById("img01").src = myImageULR[0];
document.getElementById("caption").innerHTML = Result;
}


var myImageSSR = ["./images/gacha/ssr1.jpg","./images/gacha/ssr2.jpg","./images/gacha/ssr3.jpg","./images/gacha/ssr4.jpg","./images/gacha/ssr5.jpg"];

function PopupSSR() {
	
document.getElementById('myModal').style.display = "block";
document.getElementById("img01").src = myImageSSR[Math.floor(Math.random() * myImageSSR.length)];
document.getElementById("caption").innerHTML = Result;
}


var myImageSR = ["./images/gacha/sr.jpg"];

function PopupSR() {
	
document.getElementById('myModal').style.display = "block";
document.getElementById("img01").src = myImageSR[0];
document.getElementById("caption").innerHTML = Result;
}


var myImageSG = ["./images/gacha/s6.jpg"];

function PopupSG() {
	
document.getElementById('myModal').style.display = "block";
document.getElementById("img01").src = myImageSG[0];
document.getElementById("caption").innerHTML = Result;
}


var myImageS = ["./images/gacha/s.jpg","./images/gacha/s2.jpg","./images/gacha/s3.jpg","./images/gacha/s4.jpg","./images/gacha/s5.jpg","./images/gacha/s6.jpg","./images/gacha/s7.jpg"];

function PopupS() {
	
document.getElementById('myModal').style.display = "block";
document.getElementById("img01").src = myImageS[Math.floor(Math.random() * 7)];
document.getElementById("caption").innerHTML = Result;
}

document.getElementsByClassName("close")[0].onclick = function() { 
	CloseModal();
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
		CloseModal();
    }
    else
    {
        DoAlphaNone();
    }
}

function CloseModal()
{
	if (GachaBox == 0)
	{
        document.getElementById('myModal').style.display = "none";
        document.getElementById('myGacha').style.display = "block";
	}
}
function CloseModal10()
{
	DoAlpha();
	document.getElementById('myModal').style.display = "none";
	document.getElementById('myGacha').style.display = "block";
}

var Gs = 0;
var GaS = 0;
var GaSR = 0;
var GaSSR = 0;
var GaULR = 0;

function DoAddGachaText()
{
	if (Gs > 0)
	{
		document.getElementsByClassName("storeGacha")[0].innerHTML = "เกลือ " + Gs;
	}
	if (GaS > 0)
	{
		document.getElementsByClassName("storeGachaS")[0].innerHTML = "S " + GaS;
	}
	if (GaSR > 0)
	{
		document.getElementsByClassName("storeGachaSR")[0].innerHTML = "SR " + GaSR;
	}
	if (GaSSR > 0)
	{
		document.getElementsByClassName("storeGachaSSR")[0].innerHTML = "SSR " + GaSSR;
	}
	if (GaULR > 0)
	{
		document.getElementsByClassName("storeGachaULR")[0].innerHTML = "ULR " + GaULR;
	}
}

function DoAlpha()
{
	if (Gs > 0)
	{
		document.getElementsByClassName("storeGacha")[0].style.display = "block";
	}
	if (GaS > 0)
	{
		document.getElementsByClassName("storeGachaS")[0].style.display = "block";
	}
	if (GaSR > 0)
	{
		document.getElementsByClassName("storeGachaSR")[0].style.display = "block";
	}
	if (GaSSR > 0)
	{
		document.getElementsByClassName("storeGachaSSR")[0].style.display = "block";
	}
	if (GaULR > 0)
	{
		document.getElementsByClassName("storeGachaULR")[0].style.display = "block";
	}
}


function DoAlphaNone()
{
	
		document.getElementsByClassName("storeGacha")[0].style.display = "none";

		document.getElementsByClassName("storeGachaS")[0].style.display = "none";
		
		document.getElementsByClassName("storeGachaSR")[0].style.display = "none";
	
		document.getElementsByClassName("storeGachaSSR")[0].style.display = "none";
	
		document.getElementsByClassName("storeGachaULR")[0].style.display = "none";
	
}

document.getElementById("myGachaBox").onclick = function() { 
	GachaBox = 0;
	toast("คุณได้เลือกตู้กาชา x1 ราคา 300 G");
	document.getElementById("gachaimg").src = "./images/gacha.jpg";
}


document.getElementById("myGachaBox10").onclick = function() { 
	GachaBox = 1;
	toast("คุณได้เลือกตู้กาชา x10 ราคา 1,000 G");
	document.getElementById("gachaimg").src = "./images/gacha10.png";
}

document.getElementById("IndexGacha").onclick = function() { 
	OpenGacha();
}

document.getElementById("BoxGacha").onclick = function() { 
	OpenGachaBox();
}

function OpenGacha()
{
	CloseGachaBox();
	document.getElementById('gachaimg').style.display = "block";
	document.getElementById('myGacha').style.display = "block";
	hideMenu();
	
}

function OpenGachaBox()
{
	document.getElementById('gachaimg').style.display = "none";
	document.getElementById('myGacha').style.display = "none";
	document.getElementById('GUIgachabox').style.display = "block";
	hideMenu();
}

function CloseGachaBox()
{
	document.getElementById('GUIgachabox').style.display = "none";
}

var menuElement = document.querySelector('.menu');
var menuOverlayElement = document.querySelector('.menu__overlay');
function hideMenu() {
menuElement.style.transform = "translateX(-110%)";
menuElement.classList.remove('menu--show');
menuOverlayElement.classList.remove('menu__overlay--show');
menuElement.addEventListener('transitionend', onTransitionEnd, false);
}