function calculateAndDisplay() {
    // Get marks obtained and total marks for each subject.
    const sub1_marks = parseFloat(document.getElementById("sub1_marks").value);
    const sub2_marks = parseFloat(document.getElementById("sub2_marks").value);
    const sub3_marks = parseFloat(document.getElementById("sub3_marks").value);
    const sub4_marks = parseFloat(document.getElementById("sub4_marks").value);
    const sub5_marks = parseFloat(document.getElementById("sub5_marks").value);
    
    const sub1_total = parseFloat(document.getElementById("sub1_total").value);
    const sub2_total = parseFloat(document.getElementById("sub2_total").value);
    const sub3_total = parseFloat(document.getElementById("sub3_total").value);
    const sub4_total = parseFloat(document.getElementById("sub4_total").value);
    const sub5_total = parseFloat(document.getElementById("sub5_total").value);

    // Check for invalid input (not a number or marks > total).
    if (isNaN(sub1_marks) || isNaN(sub2_marks) || isNaN(sub3_marks) || isNaN(sub4_marks) || isNaN(sub5_marks) ||
        isNaN(sub1_total) || isNaN(sub2_total) || isNaN(sub3_total) || isNaN(sub4_total) || isNaN(sub5_total) ||
        sub1_marks > sub1_total || sub2_marks > sub2_total || sub3_marks > sub3_total || sub4_marks > sub4_total || sub5_marks > sub5_total) {
        
        document.getElementById("total-marks").textContent = "Invalid Input";
        document.getElementById("average-marks").textContent = "Invalid Input";
        document.getElementById("final-grade").textContent = "Invalid Input";
        return;
    }

    // Calculate total marks and total maximum marks.
    const totalMarksObtained = sub1_marks + sub2_marks + sub3_marks + sub4_marks + sub5_marks;
    const totalPossibleMarks = sub1_total + sub2_total + sub3_total + sub4_total + sub5_total;
    
    // Calculate the overall average percentage.
    const averagePercentage = (totalMarksObtained / totalPossibleMarks) * 100;

    // Determine the grade using conditional statements.
    let grade;
    if (averagePercentage >= 90) {
        grade = "A+";
    } else if (averagePercentage >= 80) {
        grade = "A";
    } else if (averagePercentage >= 70) {
        grade = "B";
    } else if (averagePercentage >= 60) {
        grade = "C";
    } else if (averagePercentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display the results.
    document.getElementById("total-marks").textContent = totalMarksObtained.toFixed(2);
    document.getElementById("average-marks").textContent = averagePercentage.toFixed(2) + "%";
    document.getElementById("final-grade").textContent = grade;
}