$('#Input-submit').on('click', e => {
    e.preventDefault();
    const newDivTitle = $('#Input-title').val();
    const newDivRating = $('#Input-rating').val();
    if(newDivTitle.length >= 2 && newDivRating) {
        if(newDivRating > 0 && newDivRating <= 10) {
            const newDiv = $('<div>').append(`<span id="title">${newDivTitle}: </span>`, `<span id="rating">${newDivRating} </span>`,'<button>X</button>')
            $('#movie-gallery').append(newDiv); 
        }
    }
    console.log($('#movie-gallery').children().text());
});

$('#movie-gallery').on('click','div > button', e => {
    $(e.target).parent().remove();
});

$('#Sort-alphabetically').on('click', e => {
    function asc_sort(a,b) {
        return ($(b).text()) < ($(a).text()) ? 1 : -1;
    };

    $('#movie-gallery div').sort(asc_sort).appendTo('#movie-gallery');
});

$('#Sort-rating').on('click', e => {
    function dsc_sort(a,b) {
        return ($(b).children('#rating').text()) > ($(a).children('#rating').text()) ? 1 : -1;
    };

    $('#movie-gallery div').sort(dsc_sort).appendTo('#movie-gallery');
})