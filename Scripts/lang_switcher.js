const inactiveColor = "rgb(70, 70, 70)";

let languages = {
    ru: {
        "lang_name":            "Егор Геронин",
        "lang_About":           "обо мне",
        "lang_Skills":          "навыки",
        "lang_Projects":        "опыт",
        "lang_Download":        "скачать",
        "lang_Junior_iOS":      "Junior+ iOS Разработчик",
        "lang_AboutHeader":     "Обо мне",
        "lang_Education":       "Образование:",
        "lang_EducationInfo":   "3-й курс (Бакалавр), Прикладная информатика, Национальный Исследовательский Университет Московский Институт Электронной Техники ('23)",
        "lang_Age":             "Возраст:",
        "lang_AgeInfo":         "21 год",
        "lang_Citizenship":     "Гражданство:",
        "lang_CitizenshipInfo": "Россия",
        "lang_SkillsHeader":    "Навыки",
        "lang_SoftwareStack":   "Мой Software Stack",
        "lang_ProLanguages":    "Языки программирования:",
        "lang_Programms":       "Программы:",
        "lang_Frameworks":      "Фреймворки:",
        "lang_WhatICan":        "Что я умею",
        "lang_ProLanguages2":   "Языки программирования:",
        "lang_Programms2":      "Программы:",
        "lang_Languages":       "Языки:",
        "lang_LanguagesList":   "Русский, Английский (Advanced), Французский (B2)",
        "lang_SDK":             "Имел опыт работы с и интегрирования SDK:",
        "lang_OS":              "Имел опыт работы с операционными системами:",
        "lang_Platforms":       "Выпускал свои проекты на:",
        "lang_Experience":      "Опыт",
        "lang_WhereIWorked":    "Где я работал",
        "lang_MyProjects":      "Мои проекты",
        "lang_AsJuniorDev":     "как Junior+ iOS Разработчик",
        "lang_GORA_dates":      "🗓️ Март 2022 - 🗓️ Сейчас"
    },
    en: {
        "lang_name":        "Yegor Geronin",
        "lang_About":       "about me",
        "lang_Skills":      "skills",
        "lang_Projects":    "experience",
        "lang_Download":    "download",
        "lang_Junior_iOS":    "Junior+ iOS Developer",
        "lang_AboutHeader": "About me",
        "lang_Education": "Education:",
        "lang_EducationInfo":   "3rd/junior year (Bachelor's degree), Computer Science, National Research University Moscow Institute of Electronic Technology ('23)",
        "lang_Age":       "Age:",
        "lang_AgeInfo":       "21 years old",
        "lang_Citizenship":     "Citizenship:",
        "lang_CitizenshipInfo": "Russia",
        "lang_SkillsHeader":    "Skills",
        "lang_SoftwareStack":   "My Software Stack",
        "lang_ProLanguages":    "Programming languages:",
        "lang_Programms":       "Programs:",
        "lang_Frameworks":      "Frameworks:",
        "lang_WhatICan":        "What I can",
        "lang_ProLanguages2":   "Programming languages:",
        "lang_Programms2":      "Programs:",
        "lang_Languages":       "Languages:",
        "lang_LanguagesList":   "Russian, English (Advanced), French (B2)",
        "lang_SDK":             "Experienced in working with and integrating the SDK:",
        "lang_OS":              "Experienced in working with operation systems:",
        "lang_Platforms":       "Released my projects on:",
        "lang_Experience":       "Experience",
        "lang_WhereIWorked":    "Where I worked",
        "lang_MyProjects":      "My projects",
        "lang_AsJuniorDev":     "as Junior+ iOS Developer",
        "lang_GORA_dates":      "🗓️ March 2022 - 🗓️ Present"
    }
};

var switchers;
var prevIndex = -1;

function setAllSwitchers() {
    console.log('set up');
    switchers = document.getElementsByClassName('language_switcher')
    let width_switcher =  100 / switchers.length - 2;
    document.getElementById('switcher').style.width = width_switcher+"%";

    for(index =0; index < switchers.length; index++) {
        switchers[index].setAttribute('id', 'switcher'+ index);
    }

    document.getElementById('switcher0').style.color = "white"

    switch (window.location.hash) {
        case "#ru":  moveSwitcher(0);
        case "#en":  moveSwitcher(1);
        default:    moveSwitcher(0);
    }
}

function moveSwitcher(index) {
    if (index == prevIndex) {
        return
    }

    let switcher = document.getElementById('switcher')
    switcher.style.left = (index * (100 / switchers.length) + 1) +  "%";

    if (prevIndex >= 0) {
        document.getElementById('switcher'+ prevIndex).style.color = inactiveColor
    }

    document.getElementById('switcher'+ index).style.color = "white"
    console.log(index);
    prevIndex = index

    changeLanguage(index)

}

function changeLanguage(index) {
    var language = languages.en;
    switch (index) {
        case    0:
            language = languages.ru;
            break;
        case    1:
            language = languages.en;
            break;    
    }
    for (var key in language) {
        // console.log(key + " ~> " + language[key]);
        var element = document.getElementById(key);
        if (element != null) {
            element.textContent = language[key];
        }
    }

    setHash(index)
}

function setHash(index){
    switch (index) {
        case 0:
            window.location.hash = "ru"
            break;
        case 1:
            window.location.hash = "en"
            break;
    }
}