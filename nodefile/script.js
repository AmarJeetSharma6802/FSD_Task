const fs = require('fs');

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile("output.txt", data.toUpperCase(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('File saved as uppercase.');
            }
        });
    }
});
