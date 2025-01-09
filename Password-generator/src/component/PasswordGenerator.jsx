import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let charSet = "";

    if (includeUppercase) charSet += upperCaseChars;
    if (includeLowercase) charSet += lowerCaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet === "") {
      setPassword("Select at least one option!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", background: "#1e1e2f", color: "#fff", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Generate Password</h2>
      <div style={{ marginBottom: "20px" }}>
        <label>Generated Password:</label>
        <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
          <input
            type="text"
            value={password}
            readOnly
            style={{
              flex: 1,
              background: "#2a2a3e",
              color: "#fff",
              padding: "10px",
              border: "1px solid #444",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={() => navigator.clipboard.writeText(password)}
            style={{ marginLeft: "10px", background: "#5a5af0", color: "#fff", border: "none", borderRadius: "4px", padding: "10px 15px" }}
          >
            Copy
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Character Length: {length}</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ width: "100%", marginTop: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Settings:</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            Include uppercase letters
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            Include lowercase letters
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Include numbers
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            Include symbols
          </label>
        </div>
      </div>
      <button
        onClick={generatePassword}
        style={{
          width: "100%",
          background: "#a855f7",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "15px",
        }}
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
