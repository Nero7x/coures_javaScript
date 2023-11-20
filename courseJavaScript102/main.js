class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseID) {
      super(name, id, dateOfBirth);
      this.licenseID = licenseID;
    }
  }
  
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationID) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationID = reservationID;
    }
  }
  
  let reservations = [];
  
  let car1 = new Car('Car1', 'Toyota', 1, 'Gas');
  let car2 = new Car('Car2', 'Honda', 2, 'Electric');
  let car3 = new Car('Car3', 'Ford', 3, 'Gas');
  
  let plane1 = new Plane('Plane1', 'Boeing', 4, 'Commercial');
  let plane2 = new Plane('Plane2', 'Airbus', 5, 'Private');
  
  function makeReservation(employeeId, vehicleId) {
    const employee = reservations.find(res => res.employeeId === employeeId);
    const vehicle = reservations.find(res => res.vehicleId === vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log('Mismatch: Pilot cannot drive a car.');
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
      console.log('Mismatch: Driver cannot pilot a plane.');
    } else {
      const reservationID = reservations.length + 1;
      reservations.push(new Reservation(new Date(), employeeId, vehicleId, reservationID));
      console.log('Reservation successful!');
    }
  }
  
  makeReservation(1, 1); 
  makeReservation(4, 2); 
  makeReservation(1, 4); 
  
  
  console.log('Reservations:', reservations.map(res => res));
  