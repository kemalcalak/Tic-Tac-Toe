import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
    console.log("Edit button clicked");
  }
  function handleChange(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
