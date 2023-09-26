//2
document.body.innerHTML+=`
<div id='mainDiv'></div>`
const mainDiv=document.body.querySelector(`#mainDiv`)

class Car{
    #CurrentSpeed=0;
    constructor(Model,Year,Brand,Price,MaximumSpeed,image){
        this.Model=Model;
        this.Year=Year;
        this.Brand=Brand;
        this.Price=Price;
        this.MaximumSpeed=+MaximumSpeed;
        this.image=image;
    }
   get getCurrentSpeed(){
        return this.#CurrentSpeed;
   }
   set accelerate(value){
        if(this.#CurrentSpeed+value<this.MaximumSpeed){
             return this.#CurrentSpeed+=value
        }
        return this.stop()
   }
   get getModel(){
        return this.Model
   }
   set setModel(value){
        this.Model=value
   }

   stop(){
    this.#CurrentSpeed=0
   }
   render(){
    return `<h1>brand: ${this.Brand}</h1>
            <h2>current speed: ${this.#CurrentSpeed}</h2>
            <h3>maximum speed: ${this.MaximumSpeed}</h3>`
   }
}

const car1=new Car('S',2023,'Tesla',80000,150,'')
console.log(car1.getCurrentSpeed);
const intervalSpeed=setInterval(() => {
   car1.accelerate=20 
   mainDiv.innerHTML=car1.render()
 
    // car1.stop()
   
}, 1000);

console.log(car1.getCurrentSpeed);


const car2=new Car('Camry',2022,'Toyota',30000,130,'url')
const ARRAY_CAR=[]
ARRAY_CAR.push(new Car('3 Series',2023,'BMW',45000,140,'url')) 
ARRAY_CAR.push(new Car('Mustang',2022,'Ford',50000,170,'url')) 
ARRAY_CAR.push(new Car('Civic',2022,'Honda',25000,120,'url')) 

car2.setModel='mazda'
console.log(car2);

ARRAY_CAR.forEach(car => {
    mainDiv2.innerHTML+=car.render()
});


btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault()
    let carUser=new Car(ModelUser.value,YearUser.value,BrandUser.value,PriceUser.value,MaximumSpeedUser.value,imageUser.value)
    divForm.innerHTML+=carUser.render()
}) 
// class Car{
//     #currentSpeed=40;
//     constructor(model,year,brand,price,maximumSpeed,image){
//             this.model=model;
//             this.year= year;
//             this.brand=brand;
//             this.price=price;
//             this.maximumSpeed=maximumSpeed;
//             this.image=image;
//     }
    
//     set accelerate(speed){
//        if(this.#currentSpeed<this.maximumSpeed){
//         this.#currentSpeed+=20 
//        }
//       setInterval(accelerate,1000)
//     }
//     get getModel1(){return this.model}
//     set setModel(newModel){this.model=newModel}
//     get getYear(){return this.year}
//     set setYear(newYear){this.year=newYear}
//     set stop(newSpeed){
//      this.#currentSpeed=initialSpeed
//     }
//         render() {
//         return `<div class="carInfo">
//                 <h2>${this.brand} ${this.model}</h2>
//                 <p>Year: ${this.year}</p>
//                 <p>Price: $${this.price}</p>
//                 <p>Maximum Speed: ${this.maximumSpeed} mph</p>
//                 <p>Current Speed: ${this.#currentSpeed} mph</p>
//                 <img src="${this.image}" alt="${this.brand} ${this.model}">
//             </div>`;
// }
//     }

// const myCar = new Car("Civic", 2022, "Honda", 25000, 120, "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg");


// myCar.startAccelerate();
// mainDiv.innerHTML+=myCar.render();



// class Car {
//     #currentSpeed = 40;
//     accelerationInterval = null;

//     constructor(model, year, brand, price, maximumSpeed, image) {
//         this.model = model;
//         this.year = year;
//         this.brand = brand;
//         this.price = price;
//         this.maximumSpeed = maximumSpeed;
//         this.image = image;
//     }
//     // set setCurrentSpeed(){

//     // }

//     // Start accelerating the car
//     startAccelerate() {
//              setInterval(() => {
//                 if (this.#currentSpeed < this.maximumSpeed) {
//                     this.#currentSpeed += 20;
//                 } else {
//                     clearInterval(this.accelerationInterval); // Stop accelerating when maximum speed is reached
//                 }
//                 this.render(); // Update the displayed speed
//             }, 1000);
//     }

//     // Stop the car
//     stop() {
//         clearInterval(this.accelerationInterval);
//         this.#currentSpeed = 0; // Set the speed to an initial value
//         this.render(); // Update the displayed speed
//     }

//     render() {
//         const mainDiv = document.getElementById('mainDiv');
//         mainDiv.innerHTML = `<div class="carInfo">
//             <h2>${this.brand} ${this.model}</h2>
//             <p>Year: ${this.year}</p>
//             <p>Price: $${this.price}</p>
//             <p>Maximum Speed: ${this.maximumSpeed} mph</p>
//             <p>Current Speed: ${this.#currentSpeed} mph</p>
//             <img src="${this.image}" alt="${this.brand} ${this.model}">
//         </div>`;
//     }
// }

// const myCar = new Car("Civic", 2022, "Honda", 25000, 120, "");

// // const startButton = document.getElementById('startButton');
// // const stopButton = document.getElementById('stopButton');

// // startButton.addEventListener('click', () => {
// //     myCar.startAccelerate();
// // });

// // stopButton.addEventListener('click', () => {
// //     myCar.stop();
// // });
// myCar.startAccelerate();
// myCar.render();






