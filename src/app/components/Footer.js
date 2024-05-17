import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-light py-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <span>Blackberg Group</span>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <span>2024</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;