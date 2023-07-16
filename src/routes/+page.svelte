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
    </div>

    <div class="main">
        <p>Some dummy text</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem tincidunt sagittis. Mauris euismod lacus id augue aliquet, quis tincidunt nisl malesuada. Fusce vitae leo sit amet justo luctus consequat. Donec quis diam ut nisl sagittis tristique. Morbi id massa vitae justo lacinia aliquet. Cras at arcu vel nisi malesuada rutrum.</p>
        <p>Some more dummy text</p>
        <p>Phasellus quis lorem quis magna tincidunt ullamcorper. Curabitur ac eros at augue ultrices mattis. Sed eget sapien et massa commodo viverra. Quisque sit amet urna vitae neque ultricies vehicula. In hac habitasse platea dictumst. Suspendisse potenti. Mauris id leo sed elit condimentum blandit.</p>
    </div>

    <div class="right">
        <p>Some dummy text</p>
        <p>Nunc nec lorem sit amet velit sagittis eleifend. In hac habitasse platea dictumst. Proin ut dolor et elit rutrum fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sed lacus id nisi consectetur mollis.</p>
        <p>Some more dummy text</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ut eros sed arcu luctus aliquet. Sed quis nisl vitae lorem lacinia tincidunt. Donec quis leo sit amet justo luctus consequat. Donec quis diam ut nisl sagittis tristique.</p>
    </div>

    <div class="footer">
        <p>© 2023 by Drinks Food Life. Proudly created with daisyUI.</p>
    </div>
</div>