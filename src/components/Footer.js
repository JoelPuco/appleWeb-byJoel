import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="text">
                        <p>
                        1. $4.99 al mes al finalizar el periodo de prueba gratis. Sin compromisos. 
                        El plan se renovará automáticamente hasta que se cancele. Los precios están 
                        expresados en dólares estadounidenses y pueden variar por país. Se requiere 
                        una tarjeta de crédito internacional para completar la suscripción.
                        </p>
                        <p>
                        2. La prueba gratis de Apple One incluye sólo los servicios que no estés 
                        usando actualmente mediante una prueba gratis o suscripción. El plan se 
                        renovará automáticamente hasta que se cancele. Sujeto a restricciones y otros términos.
                        </p>
                        <p>
                        3. Apple TV+ cuesta $4.99 al mes al finalizar el periodo de prueba gratis. 
                        Una suscripción por grupo de Compartir en Familia. Promoción válida durante 
                        3 meses después de la activación de un dispositivo elegible. El plan se renovará 
                        automáticamente hasta que se cancele. Sujeto a restricciones y otros términos. 
                        Los precios están expresados en dólares estadounidenses y pueden variar por país.
                         Se requiere una tarjeta de crédito internacional para completar la suscripción.
                        </p>
                        <hr></hr>
                        <div className="list_info">
                            <p className="title">Descubrir</p>
                            <p>Mac</p>
                            <p>iPad</p>
                            <p>iPhone</p>
                            <p>Watch</p>
                            <p>TV</p>
                            <p>Music</p>
                            <p>AirPods</p>
                            <p>iPod touch</p>
                        </div>
                        <div className="list_info">
                            <p className="title">Servicios</p>
                            <p>Apple Music</p>
                            <p>Apple TV+</p>
                            <p>Apple Arcade</p>
                            <p>iCloud</p>
                            <p>Apple One</p>
                            <p>Apple Books</p>
                            <p>App Store</p>
                            <p className="title">Cuenta</p>
                            <p>Administrar tu Apple ID</p>
                            <p>iCloud.com</p>                            
                        </div>
                        <div className="list_info">
                            <p className="title">Para la empresa</p>
                            <p>Apple y la empresa</p>
                        </div>
                        <div className="list_info">
                            <p className="title">Valores de Apple</p>
                            <p>Accesibilidad</p>
                            <p>Medio ambiente</p>
                            <p>Privacidad</p>
                            <p className="title">Acerca de Apple</p>
                            <p>Newsroom</p>
                            <p>Directivos de Apple</p>
                            <p>Oportunidades de empleo</p>
                            <p>Inversionistas</p>
                            <p>Ética y cumplimiento de políticas</p>
                            <p>Eventos</p>
                            <p>Contactar a Apple</p>
                        </div>
                        <p><a href="">Busca un distribuidor</a> cerca de ti.</p>
                        <hr></hr>
                        <div className="bottom_info">
                            <p>Copyright © 2021 Apple Inc. Todos los derechos reservados</p>
                        </div>
                        <div className="bottom_info">
                            <p style={{textAlign: 'center'}}>Política de privacidad | Aviso legal | Mapa del sitio</p>
                        </div>
                        <div className="bottom_info">
                            <p style={{textAlign: 'rigth'}}>América Latina y el Caribe | English</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
