import React from 'react';
import {connect} from "react-redux";
import {changeHandler, decodeMessage, encodeMessage} from "../../store/actions/coderActions";

const Coder = (props) => {
    const changeHandler = event => {
        props.changeHandler(event);
    };

    const encodeMessage = () => {
        const message = {
          "message": props.decoded,
          "password": props.password
        };
        if (props.password) {
            props.encodeMessage(message);
        } else {
            alert('Invalid Password');
        }
    };

    const decodeMessage = () => {
        const message = {
            "message": props.encoded,
            "password": props.password
        };
        if (props.password) {
            props.encodeMessage(message);
        } else {
            alert('Invalid Password');
        }
    };

    return (
        <div style={{maxWidth: '1000px', margin: '40px auto'}}>
            <div className="card">
                <div className="card-body">
                    <div className="form-group row align-items-center">
                        <label className="col-2" htmlFor="decoded">Decoded Message</label>
                        <textarea value={props.decoded} onChange={changeHandler} name='decoded' className="form-control col-6" id="decoded" rows="3"/>
                    </div>
                    <div className="form-group row" style={{margin: '30px 0'}}>
                        <label htmlFor="password" className="col-form-label col-2">Password</label>
                        <div className='col-6 row'>
                            <div className='col-7'>
                                <input value={props.password} onChange={changeHandler} type="text" name='password' className="form-control" id="password" style={{height: '45px'}}/>
                            </div>
                            <button type="button" className="btn btn-outline-success mr-3 ml-1" onClick={encodeMessage}>Encode</button>
                            <button type="button" className="btn btn-outline-primary" onClick={decodeMessage}>Decode</button>
                        </div>
                    </div>
                    <div className="form-group row align-items-center">
                        <label className="col-2" htmlFor="encoded">Encoded Message</label>
                        <textarea value={props.encoded} onChange={changeHandler} className="form-control col-6" name='encoded' id="encoded" rows="3"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    encoded: state.message.encoded,
    decoded: state.message.decoded,
    password: state.message.password
});

const mapDispatchToProps = dispatch => ({
    encodeMessage: (message) => dispatch(encodeMessage(message)),
    decodeMessage: (message) => dispatch(decodeMessage(message)),
    changeHandler: event => dispatch(changeHandler(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Coder);