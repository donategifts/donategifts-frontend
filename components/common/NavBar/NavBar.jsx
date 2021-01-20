const NavBar = () => {
    return (
        <div>
            <nav className="">
                <ul className="">
                    <li><a href="/wishcards">Wish Cards</a></li>
                    <li><a href="/mission">Mission</a></li>
                    <li><a href="/howto">How To</a></li>
                    <li><a href="/community">Community</a></li>
                    <li><a href="/users/signup">Sign Up</a></li>
                    <li><a href="/users/login">Log In</a></li>
                </ul>
            </nav>
        </div>    
    );
};

export default NavBar;