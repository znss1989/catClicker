// Version MVO

// Note: 1) The fixed structures like some tags can be included in the html files, so that the click event will be bond to that id only once. 2) The poke-count update & display could be further separated from the big-cat image for performance enhancement. 3) Calling of data of model in view can be transferred into octopus. 4) The selection click event should be separated from the poke click event (Modified).

var model = {
    catData: [
        {
            'cat-name': 'Tom',
            'cat-icon-url': 'images/cat1-180.jpg',
            'cat-img-url': 'images/cat1.jpg',
            'poke-count': 0
        },
        {
            'cat-name': 'Tiger',
            'cat-icon-url': 'images/cat2-180.jpg',
            'cat-img-url': 'images/cat2.jpg',
            'poke-count': 0
        },
        {
            'cat-name': 'Waiter',
            'cat-icon-url': 'images/cat3-180.jpg',
            'cat-img-url': 'images/cat3.jpg',
            'poke-count': 0
        },
        {
            'cat-name': 'Chaplin',
            'cat-icon-url': 'images/cat4-180.jpg',
            'cat-img-url': 'images/cat4.jpg',
            'poke-count': 0
        },
        {
            'cat-name': 'Coffee',
            'cat-icon-url': 'images/cat5-180.jpg',
            'cat-img-url': 'images/cat5.jpg',
            'poke-count': 0
        },
    ], // The information of all cats

    catSelected: 0, 

    init: function () {
        for (var i = 0; i < model.catData.length; ++i) {
            model.catData[i]['poke-count'] = 0;
        }
        model.catSelected = 0;
    }, // Reset all the poke counts and set the selection to null

    sel: function (iCopy) {
        model.catSelected = iCopy;
    },

    increment: function () {
        (model.catData[model.catSelected]['poke-count'])++;
    }
};

var view = {
    init: function () {
        $('.cat-list').append('<ul id="list"></ul>');
        for (var i = 0; i < model.catData.length; ++i) {
            $('#list').append('<li id="cat' + (i+1) + '"><h6>' + model.catData[i]['cat-name'] + '</h6><img src="' + model.catData[i]['cat-icon-url'] + '" alt="cat' + (i+1) + '"></li>');
        }    
    },

    updateSel: function () {
        for (var i = 0; i < model.catData.length; ++i) {
            $('#cat' + (i+1)).click((function (iCopy, e) {
                return function () {
                    octopus.sel(iCopy);
                }
            })(i));
        } // If user selects one cat
    },
    updateClick: function () {
        $('#big-cat').click(function (e) {
            octopus.poke();
        }); // If user pokes the displayed cat
    },

    disp: function () {
        $('.cat-disp').empty(); // Clear the display area
        var catName = model.catData[model.catSelected]['cat-name'];
        var catImgUrl = model.catData[model.catSelected]['cat-img-url'];
        var catPokeCount = model.catData[model.catSelected]['poke-count']; // Prepare all data needed
        $('.cat-disp').append('<h3>' + catName + '</h3>');
        $('.cat-disp').append('<img id ="big-cat" src="' + catImgUrl + '" alt="cat ' + catName + '-big">');
        $('.cat-disp').append('<p>You\'ve poked ' + catName + ' ' + catPokeCount + ' times!!</p>'); // Append all contents on the display area
    }
};

var octopus = {
    init: function () {
        model.init(); // Initialize the data model
        view.init(); // Initialize the viewing content
        view.updateSel();
    },

    sel: function (iCopy) {
        model.sel(iCopy);
        view.disp();
        view.updateClick();
    },

    poke: function () {
        model.increment();
        view.disp();
        view.updateClick();
    }
};

octopus.init();


// Version Natural
// var counts = [0, 0, 0, 0, 0];
// for (var i = 1; i <= 5; ++i) {
//     $('#cat'+i).click(function (iCopy, e) {
//         return function() {
//             $('.cat-disp').empty(); // Clear the display area
//             var catName = $('#cat'+iCopy).find('h6').text();
//             $('.cat-disp').append('<h3 id="selected-cat-name">' + catName + '</h3>'); // Add the cat name on the display area
//             var imgAddress = 'images/cat' + iCopy + '.jpg';
//             $('.cat-disp').append('<img id="selected-cat-img" src="' + imgAddress + '" alt="cat' + iCopy + '-big">' + '<p id="selected-cat-p"></p>'); // Show the big picture of selected cat
//             var count = counts[iCopy-1];
//             $('#selected-cat-img').click(function () {
//                 ++count;
//                 counts[iCopy-1] = count;
//                 $('#selected-cat-p').text('You\'ve poked ' + catName + ' ' + count + ' times!');
//             }); // Show the times poked
//         }
//     }(i)); // Use closure to implement the event listeners
// }

// Version naive
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


