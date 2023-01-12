import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#fcdf03"}}>
                    <div className="container-fluid">

                        <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
                            <option value="bitcoin">Select Graph</option>
                            <option value="avalanche-2">Time Series Graph (TSG)</option>
                            <option value="binancecoin">Comparison Graph (CG)</option>
                        
                        </select>

                        <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/"> 
                            Dashboard</a>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header