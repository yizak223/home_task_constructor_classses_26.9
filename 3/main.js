btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    mainDiv.innerHTML += `
        <h1>${nameUser.value}<h1>
        <h2>${lastName.value}</h2>`
})

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
            console.log(yearToday);
            let yearUser = this.birthday.substring(6, this.birthday.length)
            console.log(yearUser)
            return yearToday - yearUser
        }
        this.canClub = function () {
            if (this.getAge() > 18)
                return true
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