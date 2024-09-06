import Link from 'next/link';

const Footer = ({ props }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-cta text-center pt-7 pt-lg-9">
                    {props.footerCta !== false &&
                    <>
                    <div className="container-title">
                        <span className="text-headline-label text-headline-label--secondary text-uppercase">Contact</span>
                        <h3 className="text-headline display-5 mb-3 mb-lg-5">Let&lsquo;s work together.</h3>
                    </div>
                    <Link href="/contact/" className="btn btn-secondary" aria-label="Contact us">
                        Get In Touch
                        <img src="/images/message-icon-dark.svg" width="20" height="20" className="ms-2" alt="" />    
                    </Link>
                    </>
                    }
                    <div className="sdvosb-logo py-5 py-lg-8">
                        <img src="/images/SDVOSB-logo.png" width="100" height="100" alt="Service-Disabled, Veteran-Owned Small Business logo" />
                    </div>
                </div>
                <div className="footer-navigation">
                    <ul className="nav justify-content-center flex-column flex-md-row">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/services/">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/insights/">Insights</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about/">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact/">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-copyright pt-6 pt-md-7 pb-2 pb-md-3">
                    <div className="row">
                        <div className="col-12 col-md-4 order-3 order-md-1 year">
                            &copy;{currentYear} Blackberg Group LLC.
                        </div>
                        <div className="col-12 col-md-4 order-1 order-md-2 pb-4 pb-md-0 social-media">
                            <Link href="https://www.linkedin.com/company/blackberg-group">
                                <img src="/images/linkedin.svg" className="social-media-icon" width="24" height="24" alt="LinkedIn Account" />
                            </Link>
                        </div>      
                        <div className="col-12 col-md-4 order-2 order-md-3 privacy-policy">
                            <Link href="/privacy-policy/">Privacy Policy</Link>
                        </div>                  
                    </div>
                </div>
            </div>
            <div className="footer-logo">
                <img src="/images/logo-light.svg" className="unselectable" alt="" />
            </div>
        </footer>
    )
}

export default Footer;