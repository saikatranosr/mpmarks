  
  
  
   
    function marks () {
    let input1 = Number(document.getElementById('input-1').value)
    let input2 = Number(document.getElementById('input-2').value)
    let input3 = Number(document.getElementById('input-3').value)
    let input4 = Number(document.getElementById('input-4').value)
    let input5 = Number(document.getElementById('input-5').value)
    let input6 = Number(document.getElementById('input-6').value)
    let input7 = Number(document.getElementById('input-7').value)
    return [input1, input2, input3, input4, input5, input6, input7]
  }
  function project () {
    let project1 = Number(document.getElementById('project-1').value)
    let project2 = Number(document.getElementById('project-2').value)
    let project3 = Number(document.getElementById('project-3').value)
    let project4 = Number(document.getElementById('project-4').value)
    let project5 = Number(document.getElementById('project-5').value)
    let project6 = Number(document.getElementById('project-6').value)
    let project7 = Number(document.getElementById('project-7').value)
    return [project1, project2, project3, project4, project5, project6, project7]
  }
  
  function percent(marks, project){
   return Math.round((marks+10*project)/2)
  }
 
 function total() {
   return [
   (marks()[0]+marks()[1]+marks()[2]+marks()[3]+marks()[4]+marks()[5]+marks()[6])/7 ,
   (project()[0]+project()[1]+project()[2]+project()[3]+project()[4]+project()[5]+project()[6])/7
   ]
 }
  
  function grade(marks, project) {
    let p = (marks+10*project)/2
    if (p<25) {
      return "D"
    }
    else if (p<35){
    return "C"
  }
    else if (p<45){
    return "B"
  }
    else if (p<60){
    return "B+"
  }
    else if (p<80){
    return "A"
  }
    else if (p<90){
    return "A+"
  }
    else{
    return "AA"
  }}
  
  let subjects = ["Bengali", "English", "Mathematics", "Physical Science", "Life Science", "History", "Geography"]
  

  function conlog(){
 let table = `
     <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Sl</th>
          <th scope="col">Subject</th>
          <th scope="col">Percentage</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>${subjects[0]}</td>
          <td>${percent(marks()[0], project()[0])}</td>
          <td>${grade(marks()[0], project()[0])}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>${subjects[1]}</td>
          <td>${percent(marks()[1], project()[1])}</td>
          <td>${grade(marks()[1], project()[1])}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>${subjects[2]}</td>
          <td>${percent(marks()[2], project()[2])}</td>
          <td>${grade(marks()[2], project()[2])}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>${subjects[3]}</td>
          <td>${percent(marks()[3], project()[3])}</td>
          <td>${grade(marks()[3], project()[3])}</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>${subjects[4]}</td>
          <td>${percent(marks()[4], project()[4])}</td>
          <td>${grade(marks()[4], project()[4])}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>${subjects[5]}</td>
          <td>${percent(marks()[5], project()[5])}</td>
          <td>${grade(marks()[5], project()[5])}</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>${subjects[6]}</td>
          <td>${percent(marks()[6], project()[6])}</td>
          <td>${grade(marks()[6], project()[6])}</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Total</td>
          <td>${percent(total()[0], total()[1])}</td>
          <td>${grade(total()[0], total()[1])}</td>
        </tr>
      </tbody>
    </table>`
    console.log(total())
    document.getElementById('tableCont').innerHTML = table
  return table
 
}

let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
  keyboard: false
})
myModal.show()
