const urlParams = new URLSearchParams(window.location.search);
const userlang = urlParams.get('lang') || navigator.language || navigator.userLanguage;
/**
 * The localize function translates supported text to a local language,
 * or english if the language is not supported.
 * @param {string} language 
 */
function localize(language)
{
    if (['nl', 'eng'].includes(language)) 
    {
        let lang = ':lang(' + language + ')';
        let show = '[lang]' + lang;
        document.querySelectorAll(show).forEach(node => 
        {
            node.style.display = 'unset';
        });
    }
    else
    {
        localize('eng');
    }
}
localize(userlang);