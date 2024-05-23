
import Link from 'next/link';
import React from 'react';

const Header = ({ nav }) => {

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

                            {nav.navigationLink.map((item, index) => {
                            const hasMultiplePages = item.page.length > 1;
                            if (hasMultiplePages) {
                                return (
                                <li key={index} className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href={item.url} id={`navbarDropdown-${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.displayText}
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${index}`}>
                                        {item.page.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={subItem.slug} className="dropdown-item" aria-label={`${subItem.title} page`}>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                );
                            } else {
                                return (
                                <li key={index} className="nav-item">
                                    <Link href={item.page[0].slug} className="nav-link" aria-label={`${item.displayText} page`}>
                                        {item.displayText}
                                    </Link>
                                </li>
                                );
                            }
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;