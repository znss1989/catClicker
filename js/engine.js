// var i1 = 0, i2 = 0;
// $('#cat-img1').click(function(e) {
//     var catName = 'Tom';
//     ++i1;
//     $('#cat-p1').text('You\'ve poked ' + catName+ ' ' + i1 + ' times!!');
// });
// $('#cat-img2').click(function(e) {
//     var catName = 'Tiger';
//     ++i2;
//     $('#cat-p2').text('You\'ve poked ' + catName + ' ' + i2 + ' times!!');
// });
var counts = [0, 0, 0, 0, 0];
for (var i = 1; i <= 5; ++i) {
    $('#cat'+i).click(function (iCopy, e) {
        return function() {
            $('.cat-disp').empty(); // Clear the display area
            var catName = $('#cat'+iCopy).find('h6').text();
            $('.cat-disp').append('<h3 id="selected-cat-name">' + catName + '</h3>'); // Add the cat name on the display area
            var imgAddress = 'images/cat' + iCopy + '.jpg';
            $('.cat-disp').append('<img id="selected-cat-img" src="' + imgAddress + '" alt="cat' + iCopy + '-big">' + '<p id="selected-cat-p"></p>'); // Show the big picture of selected cat
            var count = counts[iCopy-1];
            $('#selected-cat-img').click(function () {
                ++count;
                counts[iCopy-1] = count;
                $('#selected-cat-p').text('You\'ve poked ' + catName + ' ' + count + ' times!');
            }); // Show the times poked
        }
    }(i)); // Use closure to implement the event listeners
}
