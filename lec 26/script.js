let start = confirm("do you want to start student management system")

if(start){

    let totalStudent = Number(prompt("how many student do you want to enter"));

    let passedStudent = 0;
    let failedStudent = 0;

    let highestmarks = 0;
    let lowestMarks = 100;
    let totalMarks = 0;

    let result = ""

    for(let i = 1; i <= totalStudent ; i++){
        let name = prompt("enter student" + i + "name")

        let marks = parseFloat(prompt("enter marks for" + name + "0-100"));

        if(isNaN(marks) || marks < 0 || marks > 100){
            alert("invalid marks pleae enter valid marks")
         
            i--;
        
            continue;
        
        }


        totalMarks = totalMarks + marks;

        if(marks > highestmarks){
            highestmarks = marks
        }

        if(marks < lowestMarks){
            lowestMarks = marks
        }

       let grade;

       if(marks >= 90){
        grade = "A+"
       }

       else if(marks>= 80){
        grade = "A"
       }

        else if(marks>= 70){
        grade = "B"
       }

        else if(marks>= 60){
        grade = "C"
       }

        else if(marks>= 50){
        grade = "D"
       }

       else{
        grade = "F"
       }

       let status;

       if (marks >= 50){
        status = "pass"
        passedStudent++

       }
       else{
        status = "fail"
        failedStudent++
       }

       result += 
        "<h3>Student " + i + "</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Marks: " + marks + "</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p>Status: " + status + "</p>";
       
    }


    if(totalStudent > 0){

        let averageMarks = totalMarks / totalStudent 

        document.getElementById("result").innerHTML = result

        document.getElementById("summary").innerHTML = 

       "<p>Total Students: " + totalStudent + "</p>" + 
       "<p>Passed Students: " + passedStudent + "</p>" + 
       "<p>Failed Students: " + failedStudent + "</p>" + 
       "<p>Highest Marks: " + highestmarks + "</p>" + 
       "<p>Lowest Marks: " + lowestMarks + "</p>" + 
       "<p>Average Marks: " + averageMarks.toFixed(2) + "</p>"
        
       
    }

    else{
        alert("no student enter")
    }

}
else{
    alert("student management system cancel")
}