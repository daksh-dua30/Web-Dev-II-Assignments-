import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "John", score: 50 },
    { id: 2, name: "Alice", score: 30 }
  ]);

  const updateScore = (id, newScore) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, score: newScore } : student
    );
    setStudents(updatedStudents);
  };

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;