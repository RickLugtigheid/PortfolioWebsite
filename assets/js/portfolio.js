const container = document.getElementById('portfolio-container');

/* Sorting system */
// this overrides `contains` to make it case insenstive
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};
/**
 * Filters our cards using the given string as filter
 * @param {String} filter 
 */
function filterCards(filter, filterTarget)
{
    // Reset our visable cards by removing the 'd-none' class on all cards
    $('.card').removeClass('d-none');

    // Add the 'd-none' class to all cards where the filter doesn't aply
    $('.card-deck').find('.card .card-body ' + filterTarget + ':not(:contains("' + filter + '"))').parent().parent().addClass('d-none');
}
$('.btn-sort').click(e => {
    console.log('sorting: ' + e.currentTarget.value);
    filterCards(e.currentTarget.value, '.tags');
});
$('#btn-sort-all').click(e => {
    // Reset our visable cards by removing the 'd-none' class on all cards
    $('.card').removeClass('d-none');
});

/* Loading system */
/**
 * @type {Object.<string, {tags: Array.<'c#'|'js'|'web'>}>}
 */
const data = {
    'Hello World': { tags: ['c#', 'web'] },
    'Hello 2': { tags: ['js', 'web'] }
}
function loadData()
{
    for (let item in data)
    {
        showProject(item, data[item]);
    }
}
function showProject(titleText, data)
{
    let card = document.createElement('div');
    card.className = "card card-shadow text-center";

    let cardBody = document.createElement('div');
    cardBody.className = "card-body";

    let title = document.createElement('h4');
    title.className = "card-title text-black";
    title.innerText = titleText;

    let tags = document.createElement('div');
    tags.className = "tags";
    tags.hidden = true;

    data.tags.forEach(tagName => {
        let tag = document.createElement('p');
        tag.innerText = tagName;
        tags.appendChild(tag);
    });

    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(tags);
    container.appendChild(card);
}
loadData();