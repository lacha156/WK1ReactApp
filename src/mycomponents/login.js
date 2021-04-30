import React from 'react';

export default class Login extends React.Component{
    render() {
        return (
            <form>
                <div className="form-row">
                    <h3> Log in </h3>
                </div>
                <div className="form-row">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Password"></input>
                    </div>
                    
                </div>

            </form>

        );
    }
}