document.getElementById('div1').addEventListener('click', function() {
    this.classList.add('hidden');
});

document.getElementById('div2').addEventListener('click', function() {
    document.getElementById('div1').classList.remove('hidden');
});