// System preference listener
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

// Toggle theme function
function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Initial theme setup
function setupTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
        // Follow system preference if no saved theme
        document.documentElement.classList.toggle('dark', systemPreference.matches);

        // Listen for system theme changes
        systemPreference.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                document.documentElement.classList.toggle('dark', e.matches);
            }
        });
    }
}

// Initialize theme on page load
setupTheme();