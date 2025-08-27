start();
const passwordsArry = ["12345678", "password", "twentyone"];
const emailsArry = ["12345678@gmail.com", "password@gmail.com", "twentyone@gmail.com"];
function start(){
    if(localStorage.getItem("cartValue") == null){
        localStorage.setItem("cartValue","0");
    }
    if(localStorage.getItem("oneAmt") == null){
        localStorage.setItem("oneAmt","0");
    }
    if(localStorage.getItem("twoAmt") == null){
        localStorage.setItem("twoAmt","0");
    }
    if(localStorage.getItem("threeAmt") == null){
        localStorage.setItem("threeAmt","0");
    }
    if(localStorage.getItem("fourAmt") == null){
        localStorage.setItem("fourAmt","0");
    }
    if(localStorage.getItem("fiveAmt") == null){
        localStorage.setItem("fiveAmt","0");
    }
    if(localStorage.getItem("sixAmt") == null){
        localStorage.setItem("sixAmt","0");
    }
    if(localStorage.getItem("sevenAmt") == null){
        localStorage.setItem("sevenAmt","0");
    }
    if(localStorage.getItem("eightAmt") == null){
        localStorage.setItem("eightAmt","0");
    }
    if(localStorage.getItem("nineAmt") == null){
        localStorage.setItem("nineAmt","0");
    }
    if(localStorage.getItem("tenAmt") == null){
        localStorage.setItem("tenAmt","0");
    }
    if(localStorage.getItem("elevenAmt") == null){
        localStorage.setItem("elevenAmt","0");
    }
    if(localStorage.getItem("twelveAmt") == null){
        localStorage.setItem("twelveAmt","0");
    }
}

(function(){//imediately invoked functions
    let isElementThere = document.getElementById('inputForm')
    if(isElementThere == null){
        //do nothing
    }
    else{
        document.getElementById('inputForm').addEventListener("submit", Sumbit, false);
    }

    if(document.getElementById('one') == null){
        //do nothing 
    }
    else{
        document.getElementById('one').addEventListener("click", One, false);
    }
    if(document.getElementById('two') == null){
        //do nothing 
    }
    else{
        document.getElementById('two').addEventListener("click", Two, false);
    }
    if(document.getElementById('three') == null){
        //do nothing 
    }
    else{
        document.getElementById('three').addEventListener("click", Three, false);
    }
    if(document.getElementById('four') == null){
        //do nothing 
    }
    else{
        document.getElementById('four').addEventListener("click", Four, false);
    }
    if(document.getElementById('five') == null){
        //do nothing 
    }
    else{
        document.getElementById('five').addEventListener("click", Five, false);
    }
    if(document.getElementById('six') == null){
        //do nothing 
    }
    else{
        document.getElementById('six').addEventListener("click", Six, false);
    }
    if(document.getElementById('seven') == null){
        //do nothing 
    }
    else{
        document.getElementById('seven').addEventListener("click", Seven, false);
    }
    if(document.getElementById('eight') == null){
        //do nothing 
    }
    else{
        document.getElementById('eight').addEventListener("click", Eight, false);
    }
    if(document.getElementById('nine') == null){
        //do nothing 
    }
    else{
        document.getElementById('nine').addEventListener("click", Nine, false);
    }
    if(document.getElementById('ten') == null){
        //do nothing 
    }
    else{
        document.getElementById('ten').addEventListener("click", Ten, false);
    }
    if(document.getElementById('eleven') == null){
        //do nothing 
    }
    else{
        document.getElementById('eleven').addEventListener("click", Eleven, false);
    }
    if(document.getElementById('twelve') == null){
        //do nothing 
    }
    else{
        document.getElementById('twelve').addEventListener("click", Twelve, false);
    }

    if(document.getElementById('clear') == null){
        //do nothing
    }
    else{
        document.getElementById('clear').addEventListener("click", Clearer, false);
    }

//below is my attempt at allowing the user to increse/decrease the amt of an item in the cart page
/*
    if(document.getElementById('DisplayItems') == null){
        //do nothing
    }
    else{
        if(document.getElementById('OneAmount') == null){
            //do nothing
        }
        else{
            document.getElementById('OneAmount').addEventListener("change", OneAmtChanged);
        }
    }
*/
}());
function OneAmtChanged(){//wont be used because i commented out a chunk of code above
    var newamt = document.getElementById('OneAmount').value;
    localStorage.setItem("oneAmt",newamt);
    console.log("one amount changed");
}
var option = "nothing";
function Login(){
    option = "login";
    console.log("login");
}
function Signup(){
    option = "signup";
    console.log("signup");
}
function Sumbit(event){
    event.preventDefault(); //stops page refresh which would break the code
    var temp = "no";
    if(option == "login"){
        const pass = document.getElementById('password').value;
        const mail = document.getElementById('email').value;
        for(var i = 0;i<emailsArry.length;i++){
            if(mail == emailsArry[i] && pass == passwordsArry[i]){
                console.log("accepted");////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                temp = "yes";
                correcter = document.getElementById("incorrected");
                const element = document.getElementById("inputForm");
                element.remove();
            }
        }
        if(i == emailsArry.length && temp == "no"){
            console.log("denied");
            correcter = document.getElementById("incorrected");
            correcter.textContent = "Incorrect email/password";
        }
    }
    else(
        console.log("signup")
    )
};
CartInit()
function CartInit(){
    const cartNumber = document.createElement('h3'); 
    cartNumber.style = "float: right; color: black;";
    cartNumber.id = "cartnumber";

    const temp = localStorage.getItem("cartValue");
    cartNumber.textContent = `${temp}`;

    const Cart = document.getElementById("cart");
    Cart.appendChild(cartNumber);
    //console.log("LOGGED");
}
function CartInc() {
    const cartElem = document.getElementById('cartnumber');
    cartVal = parseInt(localStorage.getItem("cartValue"));
    cartVal++;
    console.log(`${cartVal}incart`);
    localStorage.setItem("cartValue",cartVal);
    cartElem.textContent=`${cartVal}`;
}
function Clearer(){
    //console.log("LOGGED");
    localStorage.setItem("oneAmt","0");
    localStorage.setItem("twoAmt","0");
    localStorage.setItem("threeAmt","0");
    localStorage.setItem("fourAmt","0");
    localStorage.setItem("fiveAmt","0");
    localStorage.setItem("sixAmt","0");
    localStorage.setItem("sevenAmt","0");
    localStorage.setItem("eightAmt","0");
    localStorage.setItem("nineAmt","0");
    localStorage.setItem("tenAmt","0");
    localStorage.setItem("elevenAmt","0");
    localStorage.setItem("twelveAmt","0");
    localStorage.setItem("cartValue","0");
    cartVal = parseInt(localStorage.getItem("cartValue"));

    const cartElem = document.getElementById('cartnumber');
    cartElem.textContent="0";
    location.reload();
}

function One(){
    CartInc()

    temp = parseInt(localStorage.getItem("oneAmt"));
    temp++;
    console.log(`${temp}ones`);
    localStorage.setItem("oneAmt",temp);
}
function Two(){
    CartInc()

    temp = parseInt(localStorage.getItem("twoAmt"));
    temp++;
    console.log(`${temp}twos`);
    localStorage.setItem("twoAmt",temp);
}
function Three(){
    CartInc()

    temp = parseInt(localStorage.getItem("threeAmt"));
    temp++;
    console.log(`${temp}threes`);
    localStorage.setItem("threeAmt",temp);
}
function Four(){
    CartInc()

    temp = parseInt(localStorage.getItem("fourAmt"));
    temp++;
    console.log(`${temp}fours`);
    localStorage.setItem("fourAmt",temp);
}
function Five(){
    CartInc()

    temp = parseInt(localStorage.getItem("fiveAmt"));
    temp++;
    console.log(`${temp}fives`);
    localStorage.setItem("fiveAmt",temp);
}
function Six(){
    CartInc()

    temp = parseInt(localStorage.getItem("sixAmt"));
    temp++;
    console.log(`${temp}sixes`);
    localStorage.setItem("sixAmt",temp);
}
function Seven(){
    CartInc()

    temp = parseInt(localStorage.getItem("sevenAmt"));
    temp++;
    console.log(`${temp}sevens`);
    localStorage.setItem("sevenAmt",temp);
}
function Eight(){
    CartInc()

    temp = parseInt(localStorage.getItem("eightAmt"));
    temp++;
    console.log(`${temp}eights`);
    localStorage.setItem("eightAmt",temp);
}
function Nine(){
    CartInc()

    temp = parseInt(localStorage.getItem("nineAmt"));
    temp++;
    console.log(`${temp}nines`);
    localStorage.setItem("nineAmt",temp);
}
function Ten(){
    CartInc()

    temp = parseInt(localStorage.getItem("tenAmt"));
    temp++;
    console.log(`${temp}tens`);
    localStorage.setItem("tenAmt",temp);
}
function Eleven(){
    CartInc()

    temp = parseInt(localStorage.getItem("elevenAmt"));
    temp++;
    console.log(`${temp}elevens`);
    localStorage.setItem("elevenAmt",temp);
}
function Twelve(){
    CartInc()

    temp = parseInt(localStorage.getItem("twelveAmt"));
    temp++;
    console.log(`${temp}twelves`);
    localStorage.setItem("twelveAmt",temp);
}
let isMapThere = document.getElementById('mapid')
    if(isMapThere == null){
        //do nothing
    }
    else{
        var mymap = L.map('mapid').setView([54.2766, -8.4761], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);
var marker = L.marker([54.2766, -8.4761]).addTo(mymap);
    }
const container = document.getElementById("DisplayItems");
if(document.getElementById("DisplayItems") !== null){
    OneAmt = parseInt(localStorage.getItem("oneAmt"));
    TwoAmt = parseInt(localStorage.getItem("twoAmt"));
    ThreeAmt = parseInt(localStorage.getItem("threeAmt"));
    FourAmt = parseInt(localStorage.getItem("fourAmt"));
    FiveAmt = parseInt(localStorage.getItem("fiveAmt"));
    SixAmt = parseInt(localStorage.getItem("sixAmt"));
    SevenAmt = parseInt(localStorage.getItem("sevenAmt"));
    EightAmt = parseInt(localStorage.getItem("eightAmt"));
    NineAmt = parseInt(localStorage.getItem("nineAmt"));
    TenAmt = parseInt(localStorage.getItem("tenAmt"));
    ElevenAmt = parseInt(localStorage.getItem("elevenAmt"));
    TwelveAmt = parseInt(localStorage.getItem("twelveAmt"));


    if(OneAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/chair.jpg">
                <div class="card-body">
                  <h5 class="card-title">Chair</h5>
                  <p class="card-text">Bespoke wooden chair. Made in Ireland.</p>
                  <input type="number" id="OneAmount" min="0" max="99" value="99" style="max-width: 20%;">

                </div>
            </div>`);
        container.appendChild(newDiv);
        var inp = document.getElementById("OneAmount");
        inp.value = OneAmt;
    }
    if(TwoAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/table.jpg">
                <div class="card-body">
                  <h5 class="card-title">Table</h5>
                  <p class="card-text">Large wooden Table. Made in France.</p>
                  <input type="number" id="TwoAmount" min="0" max="99" value="99" style="max-width: 20%;">

                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("TwoAmount");
        inp.value = TwoAmt;

    }
    if(ThreeAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/wardrobe.jpg">
                <div class="card-body">
                  <h5 class="card-title">Wardrobe</h5>
                  <p class="card-text">Spacious wooden wardrobe. Made in Italy.</p>
                  <input type="number" id="ThreeAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("ThreeAmount");
        inp.value = ThreeAmt;

    }
    if(FourAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/sofa.jpg">
                <div class="card-body">
                  <h5 class="card-title">Sofa</h5>
                  <p class="card-text">Large and comfortable sofa. Made in Spain.</p>
                  <input type="number" id="FourAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("FourAmount");
        inp.value = FourAmt;

    }
    if(FiveAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/lamp.jpg">
                <div class="card-body">
                  <h5 class="card-title">Lamp</h5>
                  <p class="card-text">Bright lamp. Made in Ireland.</p>
                  <input type="number" id="FiveAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("FiveAmount");
        inp.value = FiveAmt;

    }
    if(SixAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/carpet.jpg">
                <div class="card-body">
                  <h5 class="card-title">Carpet</h5>
                  <p class="card-text">Large rugged carpet. Made in Germany.</p>
                  <input type="number" id="SixAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("SixAmount");
        inp.value = SixAmt;

    }
    if(SevenAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/stool.jpg">
                <div class="card-body">
                  <h5 class="card-title">Stool</h5>
                  <p class="card-text">Small stool suitable for a kitchen. Made in Greece.</p>
                  <input type="number" id="SevenAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("SevenAmount");
        inp.value = SevenAmt;

    }
    if(EightAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/painting.jpg">
                <div class="card-body">
                  <h5 class="card-title">Painting</h5>
                  <p class="card-text">Large scenic painting. Made in Ireland.</p>
                  <input type="number" id="EightAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("EightAmount");
        inp.value = EightAmt;

    }
    if(NineAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/bed.jpg">
                <div class="card-body">
                  <h5 class="card-title">Bed</h5>
                  <p class="card-text">Stable wooden bed frame. Made in England.</p>
                  <input type="number" id="NineAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("NineAmount");
        inp.value = NineAmt;

    }
    if(TenAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/endtable.jpg">
                <div class="card-body">
                  <h5 class="card-title">EndTable</h5>
                  <p class="card-text">Compact wooden endtable. Made in Ireland.</p>
                  <input type="number" id="TenAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("TenAmount");
        inp.value = TenAmt;

    }
    if(ElevenAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/television.jpg">
                <div class="card-body">
                  <h5 class="card-title">Television</h5>
                  <p class="card-text">Large 40k res tv. Made in America.</p>
                  <input type="number" id="ElevenAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("ElevenAmount");
        inp.value = ElevenAmt;

    }
    if(TwelveAmt > 0){
        var newDiv = document.createElement("div");
        newDiv.innerHTML=(`<div class="card">
                <img class="card-img-top" src="images/kettle.jpg">
                <div class="card-body">
                  <h5 class="card-title">Kettle</h5>
                  <p class="card-text">Handy kettle. Made in Ireland.</p>
                  <input type="number" id="TwelveAmount" min="0" max="99" value="99" style="max-width: 20%;">
                </div>
            </div>`);
            container.appendChild(newDiv);
        var inp = document.getElementById("TwelveAmount");
        inp.value = TwelveAmt;

    }
}
