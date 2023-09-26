
class Person {
    constructor(firstName, lastName, birthday, profileImage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.profileImage = profileImage;
        this.getFullName = function () {
            return this.firstName + " " + this.lastName
        }

        this.getAge = function () {
            let yearToday = new Date().getFullYear()
            let yearUser = this.birthday.substring(6, this.birthday.length)
            return yearToday - yearUser
        }
        this.canClub = function () {
            if (this.getAge() > 18){
                return true
            }
                return false
        }
        this.render = function () {
            return `<h1>${this.getFullName()}</h1>
            <h2>${this.getAge()}</h2>
            <p>${this.canClub()}</p>
            <img style='width:10vw;' src='${this.profileImage}''>`

        }
    }
}
class Student extends Person {
    constructor(firstName, lastName, birthday, profileImage, currentCourse, grades) {
        super(firstName, lastName, birthday, profileImage);
        this.currentCourse = currentCourse;
        this.grades = grades;
    }
    avgGrades() {
        let avg=0;
        this.grades.forEach(grade => {
            avg+=grade
        });
        return avg / this.grades.length;
    }
}

let student1 = new Student('yizak', 'alaluf', '22.03.2000', '', 'full stack', [100, 90, 95])
console.log(student1.avgGrades())

btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault()
    let studen=new Person(nameUser.value,lastNameUser.value,birthdayUser.value,profileUser.value)
    mainDiv.innerHTML+=studen.render()
})

class Teacher extends Person{
    constructor(firstName, lastName, birthday, profileImage,students) {
        super(firstName, lastName, birthday, profileImage);
        this.students=students;
    }
    render2(){
        return `<p>${this.students}</p>`
    }
}
const studentCollection=document.body.querySelectorAll('.students')


btnSubmiT2.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(studentCollection[0].value);
    let arrayStudent=[]
    for (const student of studentCollection) {
        arrayStudent.push(student.value)
    }
    console.log(arrayStudent);
    let teacher1=new Teacher('lior','cohen','22.02.2000','',arrayStudent)
    console.log(teacher1);
    teacher1.render2()
})