<script>
    let showMobileMenu = false;

    const navItems = [
        { label: 'Drinks Food Life Blog', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Subscribe', href: '/subscribe' },


    ];
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabIndex={0} class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                    {#each navItems as item}
                        <li>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    {/each}

            </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl" href="/">Drinks Food Life Blog</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            {#each navItems as item}
                <li>
                    <a href={item.href}>{item.label}</a>
                </li>
            {/each}
<!--            <li><a>About</a></li>-->
<!--            <li><a>Subscribe</a></li>-->
<!--            <li tabIndex={0}>-->
<!--                <details>-->
<!--                    <summary>Parent</summary>-->
<!--                    <ul class="p-2">-->
<!--                        <li><a>Submenu 1</a></li>-->
<!--                        <li><a>Submenu 2</a></li>-->
<!--                    </ul>-->
<!--                </details>-->
<!--            </li>-->
<!--            <li><a>Contact Us</a></li>-->
        </ul>
    </div>
    <div class="navbar-end">
        <a class="btn"  href='contact'>Advertise</a>
    </div>
</div>
