import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Main navigation">
                <div className="container">
                    <Link href="/" className="navbar-brand" aria-label="Home page">
                        <img src="/images/logo-light.svg" className="navbar-logo" alt="Blackberg Logo" />
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
                                <Link href="/case-studies" className="nav-link" aria-label="Services page">
                                    Case Studies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/resources" className="nav-link" aria-label="Insights page">
                                    Insights
                                </Link>
                            </li>
                            {/* <li className="nav-item">
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
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;