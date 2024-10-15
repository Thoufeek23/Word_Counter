document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value.trim();
    const words = text ? text.split(/\s+/) : [];
    document.getElementById('wordCount').innerText = words.length;
});
