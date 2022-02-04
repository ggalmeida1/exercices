import React, {useState} from 'react';


type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
const App = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    
    const handleNameInput = (event: InputChangeEvent) => {
        setName(event.target.value);
    }
    
    const handleSurnameInput = (event: InputChangeEvent) => {
        setSurname(event.target.value);
    }
    
    const handleAgeInput = (event: InputChangeEvent) => {
        setAge(event.target.value);
    }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleNameInput} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={surname} onChange={handleSurnameInput} />
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={handleAgeInput} />
      </div>

      <hr/>

      Olá {name} {surname}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;