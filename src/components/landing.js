function Landing() {
    return(
        <div id="landing-container">
            <div id="landing-img">
                <img src="https://img.freepik.com/free-photo/happy-family-silhouette-sunset_1303-22466.jpg?w=996&t=st=1702738018~exp=1702738618~hmac=c50a0c51ca56c330fbc4be76054b1b3304085f1c5e925cada5f0c0edbae09df7" />
            </div>
            <div id="landing-cta">
                <h1>Think Health. Think Massage.</h1>
                <p>
                    We are open 9 am to 6pm; Monday through Sunday. If you would lie to schedule an appointment with us, please call us at 987-654-3210
                </p>
                <div className="btn-container">
                    <button id='learnbtn'>LEARN MORE ABOUT US</button>
                    <button id='contactbtn'>CONTACT US TODAY</button>
                </div>
            </div>
            <div id="landing-para">
                    <p>
                    Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage. 
                    </p>
                    <p>
                        We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balarised approach to a healthy lifestyle Enhance your health and improve your performance with our treatements.
                    </p>
                    <p>
                        We welcome you to come explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.
                    </p>
            </div>
            
            <hr style={{width:"100%", textAlign:"center", marginLeft:"0"}}/>

            <div id="landing-contact">
                <h2>FAMILY WELLNESS MASSAGE THERAPY</h2>
                <p>9876 Main Street, Suite13, Mainland, ML12345 <br/>Phone:9876543210</p>
            </div>
        </div>
    );
}

export default Landing;