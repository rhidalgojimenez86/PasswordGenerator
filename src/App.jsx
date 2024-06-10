import { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(4);
  const [chars, setChars] = useState("");
  const [passwords, setPasswords] = useState([]);

  const generatePassword = (length, chars) => {
    let result = "";
    const charactersLength = chars.length;
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPasswords = [];
    for (let i = 0; i < 5; i++) {
      newPasswords.push(generatePassword(length, chars));
    }
    setPasswords(newPasswords);
  };

  return (
    <>
      <h1>Password Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="length">Longitud de la contraseña</label>
        <input
          id="length"
          type="number"
          required
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="chars">Caracteres permitidos</label>
        <input
          id="chars"
          type="text"
          required
          value={chars}
          onChange={(e) => {
            setChars(e.target.value);
          }}
        />

        <section>
          <button type="button" onClick={handleSubmit}>
            Generar
          </button>
        </section>
      </form>
      <h2>Contraseñas generadas</h2>
      <ul>
        {passwords.map((pass, index) => (
          <li key={index}>{pass}</li>
        ))}
      </ul>
    </>
  );
};

export default PasswordGenerator;
