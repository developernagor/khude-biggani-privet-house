
// Result section 
document.getElementById('resultForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Mock result data - Replace this with actual logic to fetch results from your database
    const rollNumber = document.getElementById('rollNumber').value;
    const results = {
        '1': {
            name: 'মোছাঃ জামিলা আক্তার আশা',
            roll: '1',
            subjects: [
                {name: 'বাংলা', marks: 29, grade: 'F'},
                {name: 'ইংরেজি', marks: 34, grade: 'D'},
                {name: 'গণিত', marks: 40, grade: 'C'},
                {name: 'বিজ্ঞান', marks: 35, grade: 'D'},
                {name: 'ইতিহাস', marks: 36, grade: 'D'}
            ],
            total: 174,
            average: 34.8,
            result: 'ফেল'
        },
        // Add more roll numbers and corresponding results here
    };

    const resultDisplay = document.getElementById('resultDisplay');
    
    if (results[rollNumber]) {
        const student = results[rollNumber];
        let resultHTML = `
            <h3>নাম: ${student.name}</h3>
            <h4>রোল নম্বর: ${student.roll}</h4>
            <table class="result-table">
                <thead>
                    <tr>
                        <th>বিষয়</th>
                        <th>নম্বর</th>
                        <th>গ্রেড</th>
                    </tr>
                </thead>
                <tbody>
        `;

        student.subjects.forEach(subject => {
            resultHTML += `
                <tr>
                    <td>${subject.name}</td>
                    <td>${subject.marks}</td>
                    <td>${subject.grade}</td>
                </tr>
            `;
        });

        resultHTML += `
                </tbody>
            </table>
            <p><strong>মোট নম্বর:</strong> ${student.total}</p>
            <p><strong>গড় নম্বর:</strong> ${student.average}</p>
            <p><strong>ফলাফল:</strong> ${student.result}</p>
        `;

        resultDisplay.innerHTML = resultHTML;
    } else {
        resultDisplay.innerHTML = '<p>রোল নম্বরটি সঠিক নয়।</p>';
    }

    resultDisplay.style.display = 'block';
});

