function saveRecord() {
  const name = document.getElementById("name").value.trim();
  const rollNo = document.getElementById("rollNo").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const year = document.getElementById("year").value;

  if (name === "" || rollNo === "" || branch === "") {
    alert("Name, Roll Number, and Branch cannot be empty.");
    return;
  }

  if (!isNaN(branch)) {
    alert("Branch should only contain alphabetic characters.");
    return;
  }

  const record = `Name: ${name}\nRoll Number: ${rollNo}\nBranch: ${branch}\nYear: ${year}\n\n`;

  const blob = new Blob([record], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "student_records.txt";
  a.click();
}