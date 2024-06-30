document.getElementById('button1').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('button2').style.display = 'bloc';
});

document.getElementById('button2').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('emoImage').style.display = 'block';
    