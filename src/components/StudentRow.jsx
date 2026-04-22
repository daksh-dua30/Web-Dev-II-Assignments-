function StudentRow({ student, updateScore }) {
  const handleChange = (e) => {
    updateScore(student.id, Number(e.target.value));
  };

  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={student.score}
          min="0"  
          max="100"  
          onChange={handleChange}
        />
      </td>
      <td className={isPass ? "pass" : "fail"}>
        {isPass ? "Pass" : "Fail"}
      </td>
    </tr>
  );
}

export default StudentRow;