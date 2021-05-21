import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar_list">
                    <li style={{fontSize : '20px'}} >
                        <a href="#">
                            <i class="fab fa-apple"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Mac
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            iPad
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            iPhone
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Watch
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            TV
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Music
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Soporte
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Dónde comprar
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://firebasestorage.googleapis.com/v0/b/cursoreact-d2c8e.appspot.com/o/apple_web%2Fsearch.png?alt=media&token=6da68d60-9195-4b13-8a50-fc75e690bb5b"></img>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar


