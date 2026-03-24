export const HowItWorksSection = () => {
    return (
        <section className="section" id="how">
            <div className="container mx-auto">

                <div className="section-head center">
                    <div className="section-label ml">How It Works</div>
                    <h2>From Cameras to Operational Intelligence</h2>
                    <p className="pb-15">
                        MetaCiti works with existing roadway infrastructure to provide AI-driven traffic awareness.
                    </p>
                </div>

                <div className="steps">

                    <div className="step">
                        <div className="step-no">1</div>
                        <h3>Connect Infrastructure</h3>
                        <p>
                            Integrate roadway cameras and selected sensors into the MetaCiti platform.
                        </p>
                    </div>

                    <div className="step">
                        <div className="step-no">2</div>
                        <h3>AI Interprets Activity</h3>
                        <p>
                            AI models analyze traffic flow, incidents, and movement patterns.
                        </p>
                    </div>

                    <div className="step">
                        <div className="step-no">3</div>
                        <h3>Operators Receive Alerts</h3>
                        <p>
                            Traffic operators see alerts, analytics, and digital twin visualization.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}