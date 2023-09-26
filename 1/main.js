//1
document.body.innerHTML+=`
<div id='mainDiv'></div>`
const mainDiv=document.body.querySelector(`#mainDiv`)


function Person(firstName,lastName,birthday,profileImage) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthday=birthday;
    this.profileImage=profileImage;
    this.getFullName=function(){
        return this.firstName+" "+this.lastName
    }
   
    this.getAge=function(){
        let yearToday=new Date().getFullYear()
        console.log(yearToday);
        let yearUser=this.birthday.substring(6,this.birthday.length)
        console.log(yearUser)
        return yearToday-yearUser
    }
    this.canClub=function() {
        if(this.getAge()>18)
        return true
    }
    this.render=function(){
        return `<h1>${this.getFullName()}</h1>
        <h2>${this.getAge()}</h2>
        <p>${this.canClub()}</p>
        <img style='width:10vw;' src='${this.profileImage}''>`

    }
}
const ARRAY_PERSON=[]

ARRAY_PERSON.push(new Person('yizak','alaluf','22/03/2000','https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'))

console.log(ARRAY_PERSON[0].getFullName());
console.log(ARRAY_PERSON[0].getAge());

ARRAY_PERSON.forEach(person => {
    mainDiv.innerHTML+=person.render()
});

//3
btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault()
    let studen=new Person(nameUser.value,lastNameUser.value,birthdayUser.value,profileUser.value)
    mainDiv2.innerHTML+=studen.render()
})









