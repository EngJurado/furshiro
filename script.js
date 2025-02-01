// Theme Switch Logic
const themeSwitch = document.getElementById('themeSwitch');
    
// Function to set the theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update the button icon based on the theme
    if (theme === 'dark') {
        themeSwitch.textContent = '🌙'; // Dark mode icon
    } else {
        themeSwitch.textContent = '☀️'; // Light mode icon
    }
}

// Check if a theme is saved in localStorage, default to 'dark' if not set
const currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme); // Set the initial theme

// Toggle theme on button click
themeSwitch.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme); // Switch to the new theme
});