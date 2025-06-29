// Toggle theme button
const toggleTheme = document.querySelector('.toggle-theme');
let isDark = true;

toggleTheme.addEventListener('click', () => {
    if (isDark) {
        document.body.style.background = '#fff';
        document.body.style.color = '#000';
        toggleTheme.textContent = '☀️';
    } else {
        document.body.style.background = 'linear-gradient(to right, #0f0c29, #302b63, #24243e)';
        document.body.style.color = '#fff';
        toggleTheme.textContent = '🌙';
    }
    isDark = !isDark;
});
