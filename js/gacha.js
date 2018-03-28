
var Result = "";
document.getElementById('myGacha').onclick = function() {
if (Number(document.getElementById('coin').value) >= 300)
{
document.getElementById("gachaimg").style.msTransform = "rotateY(180deg)";
document.getElementById("gachaimg").style.transform = "rotateY(180deg)";
document.getElementById('myGacha').style.display = "none";
var Coin = 300;
document.getElementById('coin').value -= Coin;
var IRandom = Math.floor(Math.random() * 101) + 1;
if (IRandom > 100)
{
Result = "คุณได้รับ ULR " + IRandom + "%";
setTimeout(PopupULR, 1000);
}
else if (IRandom < 100 && IRandom > 97)
{
Result = "คุณได้รับ SSR " + IRandom + "%";
setTimeout(PopupSSR, 1000);
}
else if (IRandom < 97 && IRandom > 74)
{
Result = "คุณได้รับ SR " + IRandom + "%";
setTimeout(PopupSR, 1000);
}
else if (IRandom < 74 && IRandom > 70)
{
Result = "คุณได้รับ S " + IRandom + "%";
setTimeout(PopupSG, 1000);
}
else if (IRandom <= 70)
{
Result = "เกลือ " + IRandom + "%";
setTimeout(PopupS, 1000);
}
}
else
{
toast("you don't have more G");
}
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
    document.getElementById('myModal').style.display = "none";
    document.getElementById('myGacha').style.display = "block";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
        document.getElementById('myGacha').style.display = "block";
    }
}