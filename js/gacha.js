/*                           Field                           */
var Per = 0;
var Per2 = 0;

var StoneX = 0;
var StoneSSS = 0;
var StoneSS = 0;
var StoneS = 0;
var StoneA = 0;
var StoneB = 0;
var StoneC = 0;

var StoneXU = localStorage.getItem('StoneXU');
var StoneSSSU = localStorage.getItem('StoneSSSU');
var StoneSSU = localStorage.getItem('StoneSSU');
var StoneSU = localStorage.getItem('StoneSU');
var StoneAU = localStorage.getItem('StoneAU');
var StoneBU = localStorage.getItem('StoneBU');
var StoneCU = localStorage.getItem('StoneCU');

var GachaBox = 0;
var Result = "";
var myGacha = document.getElementById('myGacha');
var localCoin = localStorage.getItem('mycoin');
var mycoin = document.getElementById('coin');
var getCoin = document.getElementById('getCoin');

var myModal = document.getElementById('myModal');
var img01 = document.getElementById("img01");
var caption = document.getElementById("caption");

var myModalStone = document.getElementById('myModalStone');

var menuElement = document.querySelector('.menu');
var menuOverlayElement = document.querySelector('.menu__overlay');

var IndexGacha = document.getElementById("IndexGacha");
var BoxGacha = document.getElementById("BoxGacha");
var myGachaBox = document.getElementById("myGachaBox");
var myGachaBox10 = document.getElementById("myGachaBox10");
var gachaimg = document.getElementById("gachaimg");
var GUIgachabox = document.getElementById('GUIgachabox');

var Shop = document.getElementById('Shop');
var GUIshop = document.getElementById('GUIshop');
var Inventory = document.getElementById('Inventory');
var GUIinventory = document.getElementById('GUIinventory');

var myImageULR = ["./images/gacha/ulr.jpg"];
var myImageSSR = ["./images/gacha/ssr1.jpg","./images/gacha/ssr2.jpg","./images/gacha/ssr3.jpg","./images/gacha/ssr4.jpg","./images/gacha/ssr5.jpg"];
var myImageSG = ["./images/gacha/s6.jpg"];
var myImageS = ["./images/gacha/s.jpg","./images/gacha/s2.jpg","./images/gacha/s3.jpg","./images/gacha/s4.jpg","./images/gacha/s5.jpg","./images/gacha/s6.jpg","./images/gacha/s7.jpg"];
var myImageSR = ["./images/gacha/sr.jpg"];

/* Icon Collage */
var Gs = 0;
var GaS = 0;
var GaSR = 0;
var GaSSR = 0;
var GaULR = 0;
/*                           Method                           */

/* Icon Collage */
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

/* Coin */
function AddCoin(coins)
{
	mycoin.value += coins;
	localStorage.setItem("mycoin", mycoin.value);
}
function UseCoin(coins)
{
	mycoin.value -= coins;
	localStorage.setItem("mycoin", mycoin.value);
}

/* Stone */

function AddStone(stones)
{
	if (stones == "X")
	{
		StoneXU += 1;
		localStorage.setItem("StoneXU", StoneXU);
	}
	if (stones == "SSS")
	{
		StoneSSSU += 1;
		localStorage.setItem("StoneSSSU", StoneSSSU);
	}
	if (stones == "SS")
	{
		StoneSS += 1;
		localStorage.setItem("StoneSSU", StoneSSU);
	}
	if (stones == "S")
	{
		StoneSU += 1;
		localStorage.setItem("StoneSU", StoneSU);
	}
	if (stones == "A")
	{
		StoneAU += 1;
		localStorage.setItem("StoneAU", StoneAU);
	}
	if (stones == "B")
	{
		StoneBU += 1;
		localStorage.setItem("StoneBU", StoneBU);
	}
	if (stones == "C")
	{
		StoneCU += 1;
		localStorage.setItem("StoneCU", StoneCU);
	}
}
function UseStone(stones)
{
	if (stones == "X")
	{
		StoneXU -= 1;
		localStorage.setItem("StoneXU", StoneXU);
	}
	if (stones == "SSS")
	{
		StoneSSSU -= 1;
		localStorage.setItem("StoneSSSU", StoneSSSU);
	}
	if (stones == "SS")
	{
		StoneSS -= 1;
		localStorage.setItem("StoneSSU", StoneSSU);
	}
	if (stones == "S")
	{
		StoneSU -= 1;
		localStorage.setItem("StoneSU", StoneSU);
	}
	if (stones == "A")
	{
		StoneAU -= 1;
		localStorage.setItem("StoneAU", StoneAU);
	}
	if (stones == "B")
	{
		StoneBU -= 1;
		localStorage.setItem("StoneBU", StoneBU);
	}
	if (stones == "C")
	{
		StoneCU -= 1;
		localStorage.setItem("StoneCU", StoneCU);
	}
}


/* Open / Close */
function OpenGacha()
{
	CloseGachaBox();
	CloseShop();
	CloseInventory();
	gachaimg.style.display = "block";
	myGacha.style.display = "block";
	hideMenu();
	
}
function OpenGachaBox()
{
	gachaimg.style.display = "none";
	myGacha.style.display = "none";
	GUIshop.style.display = "none";
	GUIinventory.style.display = "none";
	GUIgachabox.style.display = "block";
	hideMenu();
}
function CloseGachaBox()
{
	GUIgachabox.style.display = "none";
}
function OpenShop()
{
	gachaimg.style.display = "none";
	myGacha.style.display = "none";
	GUIgachabox.style.display = "none";
	GUIshop.style.display = "block";
	GUIinventory.style.display = "none";
	hideMenu();
}
function CloseShop()
{
	GUIshop.style.display = "none";
}
function OpenInventory()
{
	gachaimg.style.display = "none";
	myGacha.style.display = "none";
	GUIgachabox.style.display = "none";
	GUIshop.style.display = "none";
	GUIinventory.style.display = "block";
	hideMenu();
}
function CloseInventory()
{
	GUIinventory.style.display = "none";
}
function CloseModal()
{
	if (GachaBox == 0)
	{
        myModal.style.display = "none";
        myGacha.style.display = "block";
	}
}
function CloseModal10()
{
	DoAlpha();
	myModal.style.display = "none";
	myGacha.style.display = "block";
	document.getElementsByClassName("close")[0].style.display = "block";
}
function hideMenu() 
{
	menuElement.style.transform = "translateX(-110%)";
	menuElement.classList.remove('menu--show');
	menuOverlayElement.classList.remove('menu__overlay--show');
	menuElement.addEventListener('transitionend', onTransitionEnd, false);
}

/* Gacha Popup */
function PopupULR() 
{
	myModal.style.display = "block";
	img01.src = myImageULR[0];
	caption.innerHTML = Result;
}

function PopupSSR() 
{
	myModal.style.display = "block";
	img01.src = myImageSSR[Math.floor(Math.random() * myImageSSR.length)];
	caption.innerHTML = Result;
}

function PopupSR() 
{
	myModal.style.display = "block";
	img01.src = myImageSR[0];
	caption.innerHTML = Result;
}

function PopupSG()
{
	myModal.style.display = "block";
	img01.src = myImageSG[0];
	caption.innerHTML = Result;
}

function PopupS()
{
	myModal.style.display = "block";
	img01.src = myImageS[Math.floor(Math.random() * 7)];
	caption.innerHTML = Result;
}

function DoRotateY180(){
gachaimg.style.transform = "rotateY(180deg)";
}

function DoRotateY0(){
gachaimg.style.transform = "rotateY(0deg)";
}

/* Random */
function RandomGacha()
{
	if (Number(mycoin.value) >= 300)
	{
		setTimeout(DoRotateY180, 0);
		setTimeout(DoRotateY0, 600);
		myGacha.style.display = "none";
		UseCoin("300");
		
		var ihard = Math.floor(Math.random() * 5) + 1;
		if (ihard == 1)
		{
			Per = 70;
		}
		else if (ihard == 2)
		{
			Per = 85;
		}
		else if (ihard == 3)
		{
			Per = 95;
		}
		else if (ihard == 4)
		{
			Per = 100;
		}
		else if (ihard == 5)
		{
			Per = 101;
		}
		Per2 = 1;
		
		/*Stone*/
		/*Stone X*/
		if (StoneX > 0)
		{
			Per = 20;
			Per2 = 86;
			StoneX -= 1;
			UseStone("X");
		}
		/*Stone SSS*/
		if (StoneSSS > 0)
		{
			Per = 20;
			Per2 = 80;
			StoneSSS -= 1;
			UseStone("SSS");
		}
		/*Stone SS*/
		if (StoneSS > 0)
		{
			Per = 20;
			Per2 = 78;
			StoneSS -= 1;
			UseStone("SS");
		}
		/*Stone S*/
		if (StoneS > 0)
		{
			Per = 20;
			Per2 = 75;
			StoneS -= 1;
			UseStone("S");
		}
		/*Stone A*/
		if (StoneA > 0)
		{
			Per = 20;
			Per2 = 70;
			StoneA -= 1;
			UseStone("A");
		}
		/*Stone B*/
		if (StoneB > 0)
		{
			Per = 20;
			Per2 = 68;
			StoneB -= 1;
			UseStone("B");
		}
		/*Stone C*/
		if (StoneC > 0)
		{
			Per = 20;
			Per2 = 67;
			StoneC -= 1;
			UseStone("C");
		}
		/* End Stone*/
		
		var IRandom = Math.floor(Math.random() * Per) + Per2;
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

function RandomGacha10()
{
	document.getElementsByClassName("close")[0].style.display = "none";
	
	setTimeout(DoRotateY180, 0);
	setTimeout(DoRotateY0, 600);
	myGacha.style.display = "none";

	var ihard = Math.floor(Math.random() * 5) + 1;
	if (ihard == 1)
	{
		Per = 70;
	}
	else if (ihard == 2)
	{
		Per = 85;
	}
	else if (ihard == 3)
	{
		Per = 95;
	}
	else if (ihard == 4)
	{
		Per = 100;
	}
	else if (ihard == 5)
	{
		Per = 101;
	}
	Per2 = 1;
	
	/*Stone*/
	/*Stone X*/
	if (StoneX > 0)
	{
		Per = 20;
		Per2 = 86;
		StoneX -= 1;
		UseStone("X");
	}
	/*Stone SSS*/
	if (StoneSSS > 0)
	{
		Per = 20;
		Per2 = 80;
		StoneSSS -= 1;
		UseStone("SSS");
	}
	/*Stone SS*/
	if (StoneSS > 0)
	{
		Per = 20;
		Per2 = 78;
		StoneSS -= 1;
		UseStone("SS");
	}
	/*Stone S*/
	if (StoneS > 0)
	{
		Per = 20;
		Per2 = 75;
		StoneS -= 1;
		UseStone("S");
	}
	/*Stone A*/
	if (StoneA > 0)
	{
		Per = 20;
		Per2 = 70;
		StoneA -= 1;
		UseStone("A");
	}
	/*Stone B*/
	if (StoneB > 0)
	{
		Per = 20;
		Per2 = 68;
		StoneB -= 1;
		UseStone("B");
	}
	/*Stone C*/
	if (StoneC > 0)
	{
		Per = 20;
		Per2 = 67;
		StoneC -= 1;
		UseStone("C");
	}
	/* End Stone*/
	
	var IRandom = Math.floor(Math.random() * Per) + Per2;
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

function DoRandom()
{
	if ((Number(StoneXU) || Number(StoneSSSU) || Number(StoneSSU) || Number(StoneSU) || Number(StoneAU) || Number(StoneBU) || Number(StoneCU)) > 0)
	{
		OpenStone();
	}
	else
	{
		RandomGacha();
	}
}

function DoRandom10()
{
	if ((Number(StoneXU) || Number(StoneSSSU) || Number(StoneSSU) || Number(StoneSU) || Number(StoneAU) || Number(StoneBU) || Number(StoneCU)) > 0)
	{
		OpenStone10();
	}
	else
	{
		if (Number(mycoin.value) >= 3000)
		{
			UseCoin("3000");
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

function OpenStone()
{
	if (Number(StoneXU) > 0)
	{
		document.getElementById('XStone').style.display = "block";
	}
	else
	{
		document.getElementById('XStone').style.display = "none";
	}
	if (Number(StoneSSSU) > 0)
	{
		document.getElementById('SSSStone').style.display = "block";
	}
	else
	{
		document.getElementById('SSSStone').style.display = "none";
	}
	if (Number(StoneSSU) > 0)
	{
		document.getElementById('SSStone').style.display = "block";
	}
	else
	{
		document.getElementById('SSStone').style.display = "none";
	}
	if (Number(StoneSU) > 0)
	{
		document.getElementById('SStone').style.display = "block";
	}
	else
	{
		document.getElementById('SStone').style.display = "none";
	}
	if (Number(StoneAU) > 0)
	{
		document.getElementById('AStone').style.display = "block";
	}
	else
	{
		document.getElementById('AStone').style.display = "none";
	}
	if (Number(StoneBU) > 0)
	{
		document.getElementById('BStone').style.display = "block";
	}
	else
	{
		document.getElementById('BStone').style.display = "none";
	}
	if (Number(StoneCU) > 0)
	{
		document.getElementById('CStone').style.display = "block";
	}
	else
	{
		document.getElementById('CStone').style.display = "none";
	}
	myModalStone.style.display = "block";
}

function OpenStone10()
{
	if (Number(StoneXU) > 0)
	{
		document.getElementById('XStone').style.display = "block";
	}
	else
	{
		document.getElementById('XStone').style.display = "none";
	}
	if (Number(StoneSSSU) > 0)
	{
		document.getElementById('SSSStone').style.display = "block";
	}
	else
	{
		document.getElementById('SSSStone').style.display = "none";
	}
	if (Number(StoneSSU) > 0)
	{
		document.getElementById('SSStone').style.display = "block";
	}
	else
	{
		document.getElementById('SSStone').style.display = "none";
	}
	if (Number(StoneSU) > 0)
	{
		document.getElementById('SStone').style.display = "block";
	}
	else
	{
		document.getElementById('SStone').style.display = "none";
	}
	if (Number(StoneAU) > 0)
	{
		document.getElementById('AStone').style.display = "block";
	}
	else
	{
		document.getElementById('AStone').style.display = "none";
	}
	if (Number(StoneBU) > 0)
	{
		document.getElementById('BStone').style.display = "block";
	}
	else
	{
		document.getElementById('BStone').style.display = "none";
	}
	if (Number(StoneCU) > 0)
	{
		document.getElementById('CStone').style.display = "block";
	}
	else
	{
		document.getElementById('CStone').style.display = "none";
	}
	myModalStone.style.display = "block";
}

function CloseStone()
{
	myModalStone.style.display = "none";
}

function CloseStone10()
{
	myModalStone.style.display = "none";
}

document.getElementById('stoC').onclick = function() 
{
	AddStone("C");
	toast("คุณได้รับ หิน C");
}
document.getElementById('stoB').onclick = function() 
{
	AddStone("B");
	toast("คุณได้รับ หิน B");
}
document.getElementById('stoA').onclick = function() 
{
	AddStone("A");
	toast("คุณได้รับ หิน A");
}
document.getElementById('stoS').onclick = function() 
{
	AddStone("S");
	toast("คุณได้รับ หิน S");
}
document.getElementById('stoSS').onclick = function() 
{
	AddStone("SS");
	toast("คุณได้รับ หิน SS");
}
document.getElementById('stoSSS').onclick = function() 
{
	AddStone("SSS");
	toast("คุณได้รับ หิน SSS");
}
document.getElementById('stoX').onclick = function() 
{
	AddStone("X");
	toast("คุณได้รับ หิน X");
}

document.getElementById('CStone').onclick = function() 
{
	StoneC = 1;
	if (GachaBox == 0)
	{
		CloseStone();
		DoStone();
	}
	else
	{
		CloseStone10();
		DoStone10();
	}
}

document.getElementById('BStone').onclick = function() 
{
	StoneB = 1;
	if (GachaBox == 0)
	{
		CloseStone();
		DoStone();
	}
	else
	{
		CloseStone10();
		DoStone10();
	}
}

document.getElementById('AStone').onclick = function() 
{
	StoneA = 1;
	if (GachaBox == 0)
	{
		CloseStone();
		DoStone();
	}
	else
	{
		CloseStone10();
		DoStone10();
	}
}

document.getElementById('SStone').onclick = function() 
{
	StoneS = 1;
	if (GachaBox == 0)
	{
		CloseStone();
		DoStone();
	}
	else
	{
		CloseStone10();
		DoStone10();
	}
}

document.getElementById('SSStone').onclick = function() 
{
	StoneSS = 1;
	if (GachaBox == 0)
	{
		CloseStone();
		DoStone();
	}
	else
	{
		CloseStone10();
		DoStone10();
	}
}

document.getElementById('SSSStone').onclick = function() 
{
	StoneSSS = 1;
	if (GachaBox == 0)
	{
		CloseStone();
		DoStone();
	}
	else
	{
		CloseStone10();
		DoStone10();
	}
}

document.getElementById('XStone').onclick = function() 
{
	StoneX = 1;
	if (GachaBox == 0)
	{
		CloseStone();
		DoStone();
	}
	else
	{
		CloseStone10();
		DoStone10();
	}
}

document.getElementById('NoStone').onclick = function() 
{
	if (GachaBox == 0)
	{
		CloseStone();
		DoStone();
	}
	else
	{
		CloseStone10();
		DoStone10();
	}
}

function DoStone()
{
	RandomGacha();
}

function DoStone10()
{
	if (Number(mycoin.value) >= 3000)
	{
		UseCoin("3000");
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

/* Event */
window.onload = function() {
	if (localCoin != null)
	{
		mycoin.value = localCoin;
	}
}

window.onclick = function(event){
    if (event.target == myModal) {
		CloseModal();
    }
    else
    {
        DoAlphaNone();
    }
}

document.getElementsByClassName("close")[0].onclick = function() { 
	CloseModal();
}

document.getElementsByClassName("closeStone")[0].onclick = function() { 
	if (GachaBox == 0)
	{
		CloseStone();
	}
	else
	{
		CloseStone10();
	}
}

getCoin.onclick = function(){
toast("คุณได้รับ 1000 G");
mycoin.value = Number(mycoin.value) + 1000;
localStorage.setItem("mycoin", mycoin.value);
}

myGachaBox.onclick = function(){ 
	GachaBox = 0;
	toast("คุณได้เลือกตู้กาชา x1 ราคา 300 G");
	gachaimg.src = "./images/gacha.jpg";
}

myGachaBox10.onclick = function(){ 
	GachaBox = 1;
	toast("คุณได้เลือกตู้กาชา x10 ราคา 3,000 G");
	gachaimg.src = "./images/gacha10.png";
}

IndexGacha.onclick = function(){ 
	OpenGacha();
}

BoxGacha.onclick = function(){ 
	OpenGachaBox();
}
/* Random */
myGacha.onclick = function(){
	if (GachaBox == 0)
	{
		DoRandom();
	}
	else
	{
		DoRandom10();
	}
}

Shop.onclick = function(){ 
	OpenShop();
}

Inventory.onclick = function(){ 
	OpenInventory();
}
