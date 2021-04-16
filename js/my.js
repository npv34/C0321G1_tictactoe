let arr = [];
let player = 1;

function draw() {
    let html = '';

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            arr[i][j] = '*';
            html += '<td id="' + i + '-' + j + '" onclick="play(' + i + ',' + j + ')">';
            html += '</td>';
        }
        html += '</tr>';
    }
    document.getElementById('game').innerHTML = html;
}

draw();

function play(x, y) {
    if (player === 1) {
        document.getElementById(x + '-' + y).innerHTML = 'O';
        player = 2;
        arr[x][y] = 'O';
    } else {
        document.getElementById(x + '-' + y).innerHTML = 'X';
        player = 1;
        arr[x][y] = 'X'
    }
    console.log(arr)
}

function checkWin(){
    // check ngang


    // check doc


    //check cheo trai


    // check cheo phai
}
