import React from 'react'
import {Link} from 'react-router-dom'
import { connect} from 'react-redux'

class Header extends React.Component{
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light text-white mb-3 border-light w-nav">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand mr-0 mr-md-2 text-light border p-2" to="/" aria-label="pxmusic">
                PXMusic
            </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Inicio</Link>
                        </li>
                        <li>
                        <Link className="nav-link" to="/generos/reggaeton">Reggaeton</Link>
                        </li>
                        <li>
                        <Link className="nav-link" to="/generos/variada">Musica Variada</Link>
                        </li>
                        <li>
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                  {/*   <div className="float-right"><Link to="/admin" className="btn btn-light btn-sm">Admin</Link></div> */}
                </div>
 
            </nav>

        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        authenticated: state.auth.authenticated
    }
}


export default connect(mapStateToProps)(Header)