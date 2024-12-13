// Array to hold the customer queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to add a new customer to the queue
function addCustomer() {
    let customerName = prompt("Enter the customer's name:");
    customerQueue.push(customerName);
    alert(customerName + " added to the queue. Queue number: " + customerQueue.length);
}

// Function to service a customer
function serviceCustomer() {
    let customerNumber = parseInt(prompt("Enter the number of the customer to be serviced:")) - 1;
    if (customerNumber >= 0 && customerNumber < customerQueue.length) {
        let servicedCustomer = customerQueue[customerNumber];
        alert("Now servicing: " + servicedCustomer);
        customerQueue.splice(customerNumber, 1);
    } else {
        alert("Invalid number!");
    }
    console.log("Updated Queue: " + customerQueue.join(", "));
}

// Add initial customers to the queue (index+1)
customerQueue.forEach((customer, index) => {
    console.log("Customer: " + customer + " Queue number: " + (index + 1));
});

addCustomer();
serviceCustomer();
