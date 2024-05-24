const HeroSection = () => {
    return (
            <section id="hero-section" className="home-page-hero-section">
                <div className="container">
                    <div className="col-12">
                        <div className="hero-title">
                            <h1 className="display-2 text-white">Where Strategy <span className="d-block">Meets <span className="text-gradient">Creativity</span>.</span></h1>
                        </div>
                    </div>
                    <img src="/images/home/homehug.webp" className="hero-image" />
                </div>
            </section>
    );
};

export default HeroSection;