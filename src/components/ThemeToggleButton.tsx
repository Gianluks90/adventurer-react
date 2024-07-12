export default function ThemeToggleButton() {
    return (
        <button onClick={handleClick}>Toggle Theme</button>
    )
}

function handleClick() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
}