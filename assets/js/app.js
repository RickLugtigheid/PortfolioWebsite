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
            node.style.display = 'block';
        });
    }
    else
    {
        localize('eng');
    }
}
localize(userlang);

// all <a> tags containing a certain rel=""
/**
 * @see https://stackoverflow.com/questions/15579070/how-to-keep-url-query-parameters-when-following-a-link#answer-15579157
 */
$("a[rel~='local']").click(function(e) {
    e.preventDefault();
    var params = window.location.search, dest = $(this).attr('href') + params;

    // Add the href after a short timeout to prevent bugs
    window.setTimeout(function() {
        window.location.href = dest;
    }, 100);
});