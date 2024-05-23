
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Header = ({ nav }) => {

    const pathname = usePathname();
    const currentPath = pathname.split('/').pop();
    console.log('Current Path', currentPath);

    return (
        <header className="bg-primary">
            <div className="container h-100">
                <nav className="navbar navbar-expand-lg navbar-dark h-100" aria-label="Main navigation">
                    <Link href="/" className="navbar-brand" aria-label="Home page">
                        <img src="/images/logo-light.svg" className="navbar-logo" alt="Blackberg Group Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" 
                                    className={`nav-link ${currentPath === '' ? 'active' : ''}`} 
                                    aria-label="Home page"
                                    aria-current={`${currentPath === '' ? 'page' : 'false'}`}>
                                    Home
                                </Link>
                            </li>

                            {nav?.navigationLink?.map((item, index) => {
                            const hasMultiplePages = item.page.length > 1;
                            if (hasMultiplePages) {
                                return (
                                <li key={index} className="nav-item dropdown">
                                    <Link 
                                        className={`nav-link dropdown-toggle ${currentPath === item.url ? 'active' : ''}`} 
                                        href={`/${item.url}`} 
                                        id={`navbarDropdown-${index}`} 
                                        role="button" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        aria-current={`${currentPath === item.url ? 'page' : 'false'}`}>
                                        {item.displayText}
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown-${index}`}>
                                        {item.page.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link 
                                                    href={`${item.url}/${subItem.slug}`} 
                                                    className={`dropdown-item ${currentPath === subItem.slug ? 'active' : ''}`} 
                                                    aria-label={`${subItem.title} page`}
                                                    aria-current={`${currentPath === subItem.slug ? 'page' : 'false'}`}>
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
                                        className={`nav-link ${currentPath === item.page[0].slug ? 'active' : ''}`} 
                                        aria-label={`${item.displayText} page`}
                                        aria-current={`${currentPath === item.page[0].slug ? 'page' : 'false'}`}>
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