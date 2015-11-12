var i1 = 0, i2 = 0;
$('#cat-img1').click(function(e) {
    var catName = 'Tom';
    ++i1;
    $('#cat-p1').text('You\'ve poked ' + catName+ ' ' + i1 + ' times!!');
});
$('#cat-img2').click(function(e) {
    var catName = 'Tiger';
    ++i2;
    $('#cat-p2').text('You\'ve poked ' + catName + ' ' + i2 + ' times!!');
});


