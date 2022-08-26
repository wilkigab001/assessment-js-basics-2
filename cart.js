///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => {
    const {price} = curr
    console.log(price)
    return acc + price}, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax){
    let finalTotal = (cartTotal * (1 + tax)) + cartTotal - couponValue
    return finalTotal
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    My customer object would need a customers name so that we make sure we are giving the right order to the right person. 
    It would need a credit card property so we can charge them when their order is finished
    It would need a phone number so that we would be able to contact them.

    These three above would be a string because the name is obviously a string, the credit card is a 16 digit number with spaces inbetween making it a string, and the phone number would be formatted as (XXX)xxx-xxxx, making it hard for a number to be read like that.
    finally it would need an address so that we can deliver it to the right place if they would let us.

    the address would be a string as well because it has numbers combined with letters

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name : 'John',
    creditCard : '1234 5678 9098 7654',
    phoneNumber : '(801)318-3404',
    address :'1234 abcde way'
}