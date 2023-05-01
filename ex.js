(function (ext) {

    // Define an array of colors to choose from
    var colors = ["red", "green", "blue", "yellow"];

    // Define a variable to hold the current color
    var currentColor = colors[0];

    // When the extension is first run, set the costume color to the default color
    ext._setStatus('connecting');
    ext._setStatus('connected');
    ext.setCostumeColor(currentColor);

    // Define a function to handle when the user clicks the "Change color" block
    ext.changeColor = function () {
        // Cycle through the colors array to select the next color
        var currentIndex = colors.indexOf(currentColor);
        if (currentIndex === colors.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        currentColor = colors[currentIndex];
        ext.setCostumeColor(currentColor);
    };

    // Define the blocks in the Scratch blocks editor
    var descriptor = {
        blocks: [
            [' ', 'Change color', 'changeColor']
        ],
        menus: {
            colors: colors
        },
        url: 'https://example.com/scratch-extension'
    };

    // Register the extension
    ScratchExtensions.register('Color Changer', descriptor, ext);

})(function(){});
