
let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let second = document.getElementById("second_title");
let welcome = document.getElementById("welcome");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let abouttext = document.getElementById("about_text");


arabic.onclick = ()=>{
    setLanguage("arabic");
    localStorage.setItem("lang", "arabic");
};
english.onclick = ()=>{
    setLanguage("english");
    localStorage.setItem("lang", "english");
};

onload  = ()=>{
    setLanguage(localStorage.getItem("lang"));
};

function setLanguage(getLanguage) {
    if (getLanguage == "arabic") {
        second.innerHTML = "موقع متعدد اللغات";
        welcome.innerHTML = "مرحبا";
        about.innerHTML = "المزيد عنا";
        abouttext.innerHTML = "مع النص الداعم أدناه كمقدمة طبيعية لمحتوى إضافي";
        contact.innerHTML = "اذهب لاي مكان";
    }else if (getLanguage == "english") {
        second.innerHTML = "Multi Language Website";
        welcome.innerHTML = "welcome";
        about.innerHTML = "about us";
        abouttext.innerHTML = "With supporting text below as a natural lead-in to additional content.";
        contact.innerHTML = "Go somewhere";
    }   
}
