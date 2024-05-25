import Link from 'next/link';
import React from 'react';

const Header = ({ nav }) => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" aria-label="Main navigation">
                <div class="container">
                    <button className="navbar-toggler collapsed pl-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-title d-inline-block ms-2">Menu</span>
                    </button>
                    <Link href="/" className="navbar-brand mx-0" aria-label="Home page">
                        <img src="/images/logo-light.svg" className="navbar-logo" alt="Blackberg Group Logo" />
                    </Link>
                    <Link href="/contact" 
                        className="btn btn-primary btn-sm d-flex d-lg-none"
                        aria-label="Contact page">
                        Contact Us
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" 
                                    className="nav-link"
                                    aria-label="Home page">
                                    Home
                                </Link>
                            </li>
                            {nav?.navigationLink?.map((item, index) => {
                            const hasMultiplePages = item.page.length > 1;
                            if (hasMultiplePages) {
                                return (
                                <li key={index} className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle"
                                        href={`/${item.url}`} 
                                        id={`navbarDropdown-${index}`} 
                                        role="button" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false">
                                        {item.displayText}
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${index}`}>
                                        {item.page.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link 
                                                    href={`/${item.url}/${subItem.slug}`} 
                                                    className="dropdown-item"
                                                    aria-label={`${subItem.title} page`}>
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
                                    <Link 
                                        href={`/${item.page[0].slug}`} 
                                        className="nav-link"
                                        aria-label={`${item.displayText} page`}>
                                        {item.displayText}
                                    </Link>
                                </li>
                                );
                            }
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;