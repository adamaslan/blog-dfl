<style>


    /* add any custom styles here */

    /* create a unique grid shape for desktop using grid-template-areas */
    .grid {
        display: grid;
        grid-template-areas:
      "header header header"
      "left main right"
      "footer footer footer";
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: auto 1fr auto;
        gap: 1rem;
        height: 100vh;
    }

    /* assign each element to a grid area using grid-area */
    h1 {
        grid-area: header;
        text-align: center;
    }

    p {
        margin: 0;
    }

    .left {
        grid-area: left;
        background-color: var(--primary);
        color: white;
        padding: 1rem;
    }

    .main {
        grid-area: main;
        background-color: var(--neutral);
        padding: 1rem;
    }

    .right {
        grid-area: right;
        background-color: var(--accent);
        color: white;
        padding: 1rem;
    }

    .footer {
        grid-area: footer;
        text-align: center;
        padding: 1rem;
    }

    /* use media queries to change the grid layout on smaller screens */
    @media (max-width: 768px) {
        .grid {
            grid-template-areas:
        "header"
        "left"
        "main"
        "right"
        "footer";
            grid-template-columns: 1fr;
            grid-template-rows: repeat(5, auto);
            height: auto;
        }
    }
</style>

<div class="grid">
    <h1 class="text-4xl font-bold">Welcome to the Drinks Food Life Blog</h1>

    <div class="left">
        <p>Visit <a href="https://www.drinksfoodlife.com" class="text-white underline">Drinks Food Life!</a> to see our main site :)</p>
        <p>This blog gives a bit of a behind the scenes view of Drinks Food Life Magazine and our branded content</p>
        <p>We love brands and their content</p>

        <details className="collapse bg-base-200">
            <summary className="collapse-title text-xl font-medium">Click to see our email</summary>
            <div className="collapse-content">
                <p>drinksfoodlife@gmail.com</p>
            </div>
        </details>

        <!-- use daisyUI menu component -->
        <nav class="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <!-- use daisyUI button component -->
        <button class="btn btn-primary">Subscribe</button>

    </div>

    <div class="main">

        <!-- use daisyUI card component -->
        <div class="card shadow-lg">
            <figure>
                <img src="/images/coffee.jpg" alt="Coffee">
            </figure>
            <div class="card-body">
                <h2 class="card-title">How to brew the perfect coffee</h2>
                <p>A guide to making delicious coffee at home with simple tools and techniques.</p>
                <div class="card-actions">
                    <a href="#" class="btn btn-primary">Read more</a>
                    <a href="#" class="btn btn-secondary">View source</a>
                </div>
            </div>
        </div>

    </div>
</div>
