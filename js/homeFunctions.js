// anasayfa karakter seçim fonksiyonu
addSelection = function(selection){
    switch(selection){
        case warrior:
        document.getElementById("mage").style.opacity=0.6;
        document.getElementById("archer").style.opacity=0.6;
        document.getElementById("warrior").style.opacity=1;
        break;

        case archer:
        document.getElementById("mage").style.opacity=0.6;
        document.getElementById("warrior").style.opacity=0.6;
        document.getElementById("archer").style.opacity=1;
        break;

        case mage:
        document.getElementById("warrior").style.opacity=0.6;
        document.getElementById("archer").style.opacity=0.6;
        document.getElementById("mage").style.opacity=1;
        break;

        default: 
        break;
    }
}