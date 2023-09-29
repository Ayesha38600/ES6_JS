//inheritance ki help sy ek class dusri class ki properties and methods use krskty h jo class kisi class ki methods and properties use kregy usy derived class kahengy and jo jis class ki use ki jy gy usy base class kahengy

//multi level inheritance : its the part of an OOPS and iska matlb h let suppose if class C , claas A and B dono ki methods and properties use kry usy  /multi level inheritance khty hyn.


//super(); ye krega k chk krega k parent class(employee class) mai koi constructor h k ni agr h to usko call krega


//inheritance = sub classing
//extend keyword is used for inheritance implementation







// class vehicle {
//     constructor()
//     {
//         console.log("vehicle constructor called");
//     }
//     start(){
//         console.log("Engine started");
//     }
// }

// class bike extends vehicle{

// }


// let object = new bike();
// object.start();

// (bike , vehile ka inheritance h and object of bike called krega constructor of vehile ko yad rkhna bike ka object vehicle k tamam members ko call krega)

// start() method is accessible by the object of child class which is bike class 






















// constructor in bike class 


// class vehicle {
//     constructor()
//     {
//         console.log("vehicle constructor called");
//     }
//     start(){
//         console.log("Engine started");
//     }
// }

// class bike extends vehicle{
    
//     constructor()
//     {
//         super();
//         console.log("bike constructor called");
//     }
// }


// let object = new bike();
// object.start();

//this keyword ya constructor jab v child class mai call krngy to super() lazmi likhna





















class vehicle {
    constructor()
    {
        console.log("vehicle constructor called");
    }
    start(){
        console.log("Engine started");
    }
}

class bike extends vehicle{
    
    constructor()
    {
        super();
        console.log("bike constructor called");
    }
    ignite(){
        super.start();   //ignite , start method of vehicle ko call kra   
    }
}


// let object = new bike();
// object.ignite();
//ignite is actually calling the start method
// super is also be used to refer to the parent class method inside the child class 














































