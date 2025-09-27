// script.js


function loadResults() {
    const storedResults = JSON.parse(localStorage.getItem('examResults')) || [];
    const tbody = document.querySelector('#resultsTable tbody');
    tbody.innerHTML = '';
  
    storedResults.forEach((result, index) => {
      const row = document.createElement('tr');
      if (result.marks >= 90) row.classList.add('highlight');
  
      row.innerHTML = `
        <td>${result.studentName}</td>
        <td>${result.subject}</td>
        <td>${result.marks}</td>
        <td>
          <button onclick="editResult(${index})">Edit</button>
          <button onclick="deleteResult(${index})">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  function saveResult(result) {
    const results = JSON.parse(localStorage.getItem('examResults')) || [];
    results.push(result);
    localStorage.setItem('examResults', JSON.stringify(results));
  }
  
  function deleteResult(index) {
    const results = JSON.parse(localStorage.getItem('examResults')) || [];
    results.splice(index, 1);
    localStorage.setItem('examResults', JSON.stringify(results));
    loadResults();
  }
  
  function editResult(index) {
    const results = JSON.parse(localStorage.getItem('examResults')) || [];
    const result = results[index];
  
    document.getElementById('studentName').value = result.studentName;
    document.getElementById('subject').value = result.subject;
    document.getElementById('marks').value = result.marks;
  
    // Remove the old entry and wait for resubmission
    results.splice(index, 1);
    localStorage.setItem('examResults', JSON.stringify(results));
    loadResults();
  }
  
  document.getElementById('resultForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('studentName').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const marks = parseInt(document.getElementById('marks').value);
  
    if (!name || !subject || isNaN(marks)) return;
  
    const newResult = { studentName: name, subject, marks };
    saveResult(newResult);
    loadResults();
  
    document.getElementById('resultForm').reset();
  });
  
  loadResults();


  // students and teachers login
  // script.js

const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (!user) {
  alert('Please login first');
  window.location.href = 'login.html';
}

const isTeacher = user.role === 'teacher';


document.getElementById('resultForm').style.display = isTeacher ? 'block' : 'none';


row.innerHTML = `
  <td>${result.studentName}</td>
  <td>${result.subject}</td>
  <td>${result.marks}</td>
  <td>
    ${isTeacher ? `<button onclick="editResult(${index})">Edit</button>
                   <button onclick="deleteResult(${index})">Delete</button>` : ''}
  </td>
`;



  