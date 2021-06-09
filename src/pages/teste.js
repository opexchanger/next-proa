import { useState } from 'react';

export default function Teste() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input type="email" name="email" value={email} />
    </form>
  );
}
