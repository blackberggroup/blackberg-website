import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light" aria-label="Main navigation">
                    <Link href="/" className="navbar-brand" aria-label="Home page">
                        Blackberg Group
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" className="nav-link" aria-label="Home page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/services" className="nav-link" aria-label="Services page">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/resources" className="nav-link" aria-label="Insights page">
                                    Insights
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/case-studies" className="nav-link" aria-label="Case Studies page">
                                    Case Studies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className="nav-link" aria-label="About page">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className="nav-link" aria-label="Contact page">
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