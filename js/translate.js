var IDM = IDM || {};

$(document).ready(function () {
  var language = document.getElementById('toggle-button');

  language.addEventListener('click', function () {
    var element = document.getElementById('toggle');

    if (element.className === 'es-flag') {
      changeLng('es');
    } else {
      changeLng('en');
    }
  });

  var userLang = navigator.language || navigator.userLanguage;

  i18next.init({
    lng: userLang,
    fallbackLng: ["en"],
    debug: true,
    resources: {
      en: {
        translation: IDM.en
      },
      es: {
        translation: IDM.es
      }
    }
  }, function(err, t) {
    // init set content
    updateContent();
  });
});


function updateContent() {
  var elements = document.querySelectorAll('[data-translation-key]');

  elements.forEach(element => {
    element.innerHTML = i18next.t(element.dataset.translationKey)
  });
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});