
const AboutHero = () => {
    return (
        <div className="container">
            <div className="about__wrapper">
                <div className="about__left">
                    <h1 className="about__title">
                        We know how valuable a house is.
                    </h1>
                    <p className="about__description">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <hr />
                    <div className="about__statistics">
                        <div className="about__statistics--item">
                            <h3>60M+</h3>
                            <p>In Property Sales</p>
                        </div>
                        <div className="about__statistics--item">
                            <h3>10k+</h3>
                            <p>Global Customers</p>
                        </div>
                        <div className="about__statistics--item">
                            <h3>1500+</h3>
                            <p>Successfull Sales</p>
                        </div>
                        <div className="about__statistics--item">
                            <h3>10</h3>
                            <p>Years experience</p>
                        </div>
                    </div>
                </div>
                <div className="about__right">
                    <div className="about__card">
                        <img src="/placeholder.svg" alt="" />
                    </div>
                    <div className="about__card">
                        <img src="/placeholder.svg" alt="" />
                    </div>
                    <div className="about__card">
                        <img src="/placeholder.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
