function generateRandomColor() {
    var x = Math.ceil((Math.random() * 1000) % 256);
    var y = Math.ceil((Math.random() * 1000) % 256);
    var z = Math.ceil((Math.random() * 1000) % 256);
    var rgb = "rgb(" + x + "," + y + "," + z + ")";
    return rgb
}


function changeColor() {
    document.getElementById('canvas').style.backgroundColor = generateRandomColor()
    return false
}

document.getElementById('button').onclick = changeColor;