<script>
    // import daisyUI

    // declare a reactive variable for the theme
    let theme = localStorage.getItem("theme") === "dark" ? "dark" : "light";

    // set the data-theme attribute on the html tag
    $: document.documentElement.setAttribute("data-theme", theme);

    // define a function to toggle the theme
    function toggleTheme() {
        theme = theme === "my-theme" ? "synthwave" : "my-theme";
        localStorage.setItem("theme", theme);
    }
</script>

<!-- use daisyUI toggle component -->
<input type="checkbox" class="toggle" checked={theme === "my-theme"} on:click={toggleTheme} />