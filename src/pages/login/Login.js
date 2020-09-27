import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
    const [name, setName] = useState("");
    const history = useHistory();

    function gotoLab() {
        localStorage.setItem("name", name);
        history.push("/laboratory");
    }

    return (
        <div className="text-center">            
            <div className="card login-card text-center bg-danger text-white">
                <div className="card-header">
                    Begin your journey...
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-light" onClick={e => gotoLab()}>Gotta Catch 'Em All!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;