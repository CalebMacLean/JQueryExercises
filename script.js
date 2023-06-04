// Part 1
console.log('Let\'s get ready to party with jQuery!');
$('article img').addClass('image-center');
$('article p:last-child').remove();
$('#title').css('font-size', Math.floor(Math.random() * 100) + 1);
$('ol').append('<li>This is my list item</li>');
$('aside').empty().append('<p>Sorry for that list earlier, it was stupid.</p>')

const inputs = $('input');
inputs.on('keypress', e => {
    $('body').css('background-color', `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`);
});

$('img').on('click', e => {
    e.target.remove();
})