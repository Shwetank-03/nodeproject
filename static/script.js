document.addEventListener('DOMContentLoaded', function(event){
  let elm = document.getElementById("selected");
  if (elm){
    elm.click()
  }
  // let errField = document.getElementById('err_msg');
  // if (errField){
  //   errField.innerHTML=""
  // }
})

document.addEventListener('click', function(event){
  let elm = event.target.innerText;
  if (elm == 'View Records'){
    fetch('/teacher/viewall')
    .then(response => response.json())
    .then(data => {
      if (data['err_msg'] != ''){
        alert ("No records found!")
      }
      else{
        let tdata = data['data'];
        let trows = ''
        tdata.forEach(element => {
          trows += `<tr><th scope="row">${element.rollno}</th>
          <td>${element.name}</td>
          <td>${element.dob}</td>
          <td>${element.score}</td>
          <td><a href="/teacher/edit/${element.rollno}">Edit</a>    <a href="/teacher/delete/${element.rollno}">Delete</a></td></tr>`;
        })
        document.getElementById('tbody').innerHTML = trows;
      }
    })
  }
})

function openProfile(evt, profile) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(profile).style.display = "block";
    evt.currentTarget.className += " active";
  }