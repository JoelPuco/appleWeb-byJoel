import React, { Component } from 'react'

export class SectionOne extends Component {
    render() {
        return (
            <div>
                <div className="section_one">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cursoreact-d2c8e.appspot.com/o/apple_web%2F1.PNG?alt=media&token=f66d72c7-bdec-45d5-8573-07baae6eb0e5"></img>
                    <div className="text">
                        <h2>iPhone 12</h2>
                        <h3>Morado. Soñado.</h3>
                        <a href="#">
                            Mas información <i style={{fontSize : '15px'}} class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="section_one black">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cursoreact-d2c8e.appspot.com/o/apple_web%2F2.PNG?alt=media&token=322fbec2-4341-4cde-90fb-ccaf1a6c26a4"></img>
                    <div className="text">
                        <h2>iPad Pro</h2>
                        <h3>Con los superpoderes del chip M1 de Apple.</h3>
                        <a href="#">
                            Mas información <i style={{fontSize : '15px'}} class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="section_one">
                    <img src="https://firebasestorage.googleapis.com/v0/b/cursoreact-d2c8e.appspot.com/o/apple_web%2F3.PNG?alt=media&token=4b199b1b-7b2f-41b7-ae05-3c9006068577"></img>
                    <div className="text">
                        <h2>iMac</h2>
                        <h3>Dile hola.</h3>
                        <a href="#">
                            Mas información <i style={{fontSize : '15px'}} class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionOne
