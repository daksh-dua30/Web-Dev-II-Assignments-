import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || score === "") return;

    const numScore = Number(score);

    if (numScore < 0 || numScore > 100) {
        alert("Score must be between 0 and 100");
        return;
    }

    addStudent(name, numScore);

    setName("");
    setScore("");
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter score"
        value={score}
        min="0"
        max="100"
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;