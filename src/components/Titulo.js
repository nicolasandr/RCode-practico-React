import React,{useState} from 'react';

const Titulo = (props) => {

    const [fromChangeState,setfromChangeState] = useState('');

    return (
        <div>
            <h1>Hello {props.agregado} {fromChangeState}!</h1>
            <button onClick={() => setfromChangeState('(from changed state)')}>
                <p>cambio de estado</p>
            </button>
        </div>
    );
};

export default Titulo;