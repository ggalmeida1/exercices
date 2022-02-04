import { useState } from "react";

const App = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
       setShow( !show );
    }

    return (
        <div>
            <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>

            {show &&

            <div>Bla Bla Bla</div>
            }
        </div>

    );
}

export default App;