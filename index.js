// Write your solution in this file!

const driver ={};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
}
//This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
} 
// this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.

function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
} 
// It should delete the key/value pair for the key that was passed in from the driver Object. 
// This should all not actually mutate the driver passed in.

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
} 
// this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. 

// Be sure and consider whether dot-notation or bracket-notation might affect your solution.