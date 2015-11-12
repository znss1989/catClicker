var i = 0;
$('#cat-img').click(function(e) {
    ++i;
    $('#poke-count').text('You\'ve poked this little cute kitten ' + i + ' times!!');
});
