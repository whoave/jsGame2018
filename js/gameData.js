// oyun Bilgisi
const gameName = "Ender Online";
const gameVer = "0.0.001";
document.title = gameName + " | " + gameVer;
const gameWidth = 770;
const gameHeight = window.innerHeight;

// Karakter bilgileri
const warriorOnload = "img/Warrior/0.png";
const mageOnload = "img/Mage/0.png";
const archerOnload = "img/Archer/0.png";

//hikaye öğeleri
const plusPlus = "<img style='width:4px;' src='img/GUI/pointerPlusPlus.png'>";

// mage Hikaye
const mageStory = "Dünyaya düşen göktaşlarından gelen enerjiyi emmenin yolunu buldular. Onlar için yok etmek artık çocuk oyuncağı. Yalnızca yeteneklerini kullanmak için zamana ihtiyaçları var.<br>" +
"<div class='abilityGiris'>"
+ "HIZ: "+plusPlus+
" HASAR: "+ plusPlus+plusPlus+plusPlus+
" SAVUNMA: " + plusPlus + plusPlus+
"</div> ";

// warrior Hikaye
const warriorStory = "Dünyaya adaleti yaymayı amaç edinen savaşçılar için korku diye bir şey yok. Onları engelleyebilecek tek şey, üzerlerindeki zırhın ağırlığı.<br> " + 
"<div class='abilityGiris'>"
+ "HIZ: "+plusPlus+
" HASAR: "+ plusPlus+plusPlus+
" SAVUNMA: " + plusPlus + plusPlus + plusPlus+
"</div> ";

// archer Hikaye
const archerStory = "Okçular, ormanların ve arsız hırsızların korkulu belası haline geldiklerinden bu yana güçlerine güç katarak, öfkelerini yaylarında biriktirdiler. Onları göremezseniz, ölürsünüz.<br> "+
"<div class='abilityGiris'>"
+ "HIZ: "+plusPlus+plusPlus+plusPlus+
" HASAR: "+ plusPlus+
" SAVUNMA: " + plusPlus +plusPlus+
"</div> ";

// onload Olayları
onload = function () {
    document.getElementById("mainBorder").style.width=gameWidth+"px";
    document.getElementById("mainBorder").style.height=gameHeight+"px";
    document.body.style.cursor = "url('img/GUI/pointer.png'), auto";

    document.getElementById("gameInfo").getElementsByTagName("h1")[0].innerHTML=gameName;
    document.getElementById("gameInfo").getElementsByTagName("h2")[0].innerHTML="Online";
    document.getElementById("gameInfo").getElementsByTagName("h3")[0].innerHTML=gameVer;
    // onload Karakter Görselleri
        document.getElementById("mageImg").src = mageOnload;
        document.getElementById("warriorImg").src = warriorOnload;
        document.getElementById("archerImg").src = archerOnload;
    // onload Karakter Bilgileri
    document.getElementById("mageStory").innerHTML=mageStory;
    document.getElementById("warriorStory").innerHTML=warriorStory;
    document.getElementById("archerStory").innerHTML=archerStory;
};
