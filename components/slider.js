export default function Slider({ data }) {
    return (
        <>
        {/* Start Slider content */ }
        <div className="slider-main">
            <Slide />
            <Slide />
            <Slide />
            <Slide />
        </div>
        {/* End Slider content */ }
        </>
    )
}

export function Slide({ darta }) {
    return (

        <div className="slide-area fix" data-stellar-background-ratio=".4">
            <div className="display-table">
                <div className="display-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="slide-content">
                                    <h2 className="title2">Invierte en fondos de inversión</h2>
                                    <p>Los Fondos de Inversión Abiertos se convierten en una alternativa a través la diversificación de la conformación de los portafolios de inversión.</p>
                                    <div className="layer-1-3">
                                        <a href="#" className="ready-btn left-btn" >Simula tu inversión</a>
                                        <div className="video-content">
                                            <a href="#" className="video-play vid-zone">
                                                <i className="fa fa-envelope"></i>
                                                <span>Haz tu consulta</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}