let notAllowed = ['Wheat', 'Bread']

module.exports = function(req, res, next) {
    while ( notAllowed.find( word => req.body.text.includes(word) ) ) { 
        const badWord = notAllowed.find( word => req.body.text.includes(word) ); //.includes() will return true or false based off whether or not the item passed in is in the array. If the req.body.text includes a badWord it will then be replaced with a * based off of the length of the bad word. 
        req.body.text = req.body.text.replace( badWord, '*'.repeat( badWord.length ) );
        }
        // req.body.text = req.body.text.replace( badWord, 'Rainbows & Sunshine' );
        // }

    next()
}