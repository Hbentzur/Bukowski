let arr;
let textclean;
let randomnum = 0;

function poettxt() {

    let textfromfile = jQuery.get('Bukowski.txt', function (txt) {
        textclean = textfromfile.responseText;
        arr = textclean.split("\n");

        console.log(typeof textclean);
        console.log(arr);

        randomnum = Math.floor(Math.random() * arr.length);

        $('#poetline').text(arr[randomnum]);

    });

};


