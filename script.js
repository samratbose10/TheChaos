document.getElementById('button1').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('button2').style.display = 'block';
});

document.getElementById('button2').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('emoImage').style.display = 'block';
    document.getElementById('button3').style.display = 'block';
});

document.getElementById('button3').addEventListener('click', function() {
    document.getElementById('audio1').play();
    document.getElementById('audio2').play();
    document.getElementById('audio3').play();
});