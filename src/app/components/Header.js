import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link href="/" className="navbar-brand">
                        Blackberg Group
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/resources" className="nav-link">
                                    Resources
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;