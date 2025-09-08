import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);


    return (
        <div>
            <p>Has hecho {count} veces</p>
            <button onClick={() => setCount(count +1)}>sumar</button>
        </div>
    );
}

export default Counter;