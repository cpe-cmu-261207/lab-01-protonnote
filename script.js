var couter = 0

document.querySelector('#form').addEventListener('submit',function(event){
    event.preventDefault()

    let subject = []
    let code_subject =[]
    let term = []
    let gpa = []

    let sub  = document.getElementById('subject').value
    let code_sub  = document.getElementById('code-subject').value
    let gpa_in  = document.getElementById('gpa').value

    if(document.getElementById('term1').checked) { 
        let term1  = document.getElementById('term1').value
        term[couter] = term1
    } 
    if(document.getElementById('term2').checked){
        let term2  = document.getElementById('term2').value 
        term[couter] = term2
    }
    //console.log(term)

    /*************************************************************************/
    if(sub.length == 0 ){
        alert("โปรดกรอกชื่อวิชา !!")
        var ff = false
    }
    else if(isNaN(code_sub)){
        alert("โปรดกรอกเลขรหัสวิชา !!")
        ff = false
    }
    else if (code_sub.length < 6){
        alert("โปรดกรอกชื่อวิชา !!")
        ff = false
    }
    else if (term.length == 0 ){
        alert("โปรดเลือกภาคการศึกษา !!")
        ff = false
    }
    else ff = true

    

    /*************************************************************************/
    if(ff){
        
    subject[couter] = sub
    code_subject[couter] = code_sub
    gpa[couter] = gpa_in
    
    couter++
    alert("เพิ่มสำเร็จ !!")

    console.log(couter)
    console.log(subject)
    console.log(code_subject)
    console.log(term)
    console.log(gpa)

    document.getElementById('subject').value = null
    document.getElementById('code-subject').value = null

    }


},false)



