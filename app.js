// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?
/* async function exercise1() {
    console.log('I should log before the data!');
    const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
    const json = await res.json();
    console.log(json)
    console.log('I should log after the data!');
}

exercise1(); */

/* With .then
    console.log('I should log before the data!');
fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
    .then((res) => res.json()).then((json) => {
        console.log(json)
        console.log('I should log after the data!');
    })
*/

// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => console.log(json))
// console.log('I should be between the cats and dogs');
// fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
// .then((res) => res.json()).then((json) => console.log(json))
// console.log('I should be last');
/*
async function exercise2() {
    console.log('I should be before the cats data');
    const resCats = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no');
    const dataCats = await resCats.json();
    console.log(dataCats);
    console.log('I should be between the cats and dogs');
    const resDogs = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no');
    const dataDogs = await resDogs.json();
    console.log(dataDogs);
    console.log('I should be last');
}

exercise2();
*/

/* With .then
console.log('I should be before the cats data');
fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        console.log('I should be between the cats and dogs');
    })
    .then(fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            console.log('I should be last');
        }))
        */
/*
const successfulPromise = new Promise(function(resolve, reject) {

    setTimeout(resolve, 3000);
})
setTimeout(function() { console.log(successfulPromise, 's'); }, 1000);
setTimeout(function() { console.log(successfulPromise, 's'); }, 5000);

const unsuccessfulPromise = new Promise(function(resolve, reject) {
    setTimeout(reject, 3000);
})
setTimeout(function() {
    console.log(unsuccessfulPromise, 'u');
}, 5000) */

const conditionalPromise = (condition) => new Promise(function(resolve, reject) {
    if (condition % 2 === 0) {
        resolve(true);
    } else {
        reject(false);
    }
})


conditionalPromise(4).then(res => console.log(res)).catch(err => console.log(err))
conditionalPromise(5).then(res => console.log(res)).catch(err => console.log(err))

//attempting what fetch does

/*
function myFetch(url) {
    const myPromise = new Promise(function(resolve, reject) {
        const webData = somehowWeGetThis(url);
        if (webData.statuscode < 400) {
            resolve(webData);
        } else {
            reject(error);
        }
    })
    //return promise which is why you do .fetch(url).then(...).catch(...)
    return myPromise;

} */