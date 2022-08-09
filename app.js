// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
// Ans: জাভাস্ক্রিপ্ট হল একটি ক্লায়েন্ট সাইড স্ক্রিপ্টিং বা ব্রাউজার স্ক্রিপ্টিং ল্যাংগুয়েজ। জাভাস্ক্রিপ্ট (সংক্ষেপে JS বলা হয়) একটি প্রোটোটাইপ-ভিত্তিক স্ক্রিপ্টিং ল্যাংগুয়েজ যাতে পরিবর্তনশীল, দুর্বল টাইপ এবং প্রথম শ্রেণীর ফাংশন আছে। এটি একটি অবজেক্ট ওরিয়েন্টেড, কার্যকরী প্রোগ্রামিং শৈলী সমর্থনকারী ভাষা।

// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে?
// Ans: জাভাস্ক্রিপ্ট একটি স্ক্রিপ্টিং ল্যাঙ্গুয়েজ। ওয়েভসাইটের ক্লায়েন্ট পর্যায়ে অর্থাৎ ব্রাউজারে বিহেভিয়ার কন্ট্রোলের লক্ষ্য নিয়ে একে ডিজাইন করা হয়েছে। তবে বর্তমানে এটি ব্রাউজার ছাড়াও যে কোন অপারেটিং সিস্টেমে রান করে এবং অন্যান্য হাই লেভেল প্রোগ্রামিং ল্যাঙ্গুয়েজের মত সমস্ত বৈশিষ্ট্য এতে বিদ্যমান।

// // ৩. ভেরিয়েবল কি জিনিস?
// Ans: ভেরিয়েবল বলতে এমন কিছুকে বোঝানো হয়ে থাকে যার মান সময়ের সাথে সাথে বদলানো যায়। যার মান সময়ের সাথে সাথে বিভিন্ন ভাবে প্রভাবিত হতে পারে এবং গাণিতিক মান কিংবা কোন কিছু প্রকাশ করার ক্ষেত্রে ব্যবহার করা যেতে পারে।  

// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে? 
// ans var variableName = "value";

// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
// ans:  var variableName = "value";
// variableName = "newValue";

// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
// ans: 

// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। 
// ans: Primitive:
// 1. Strings
// 2. Numbers
// 3. Boolean
// 4. Null
// 5. undefined
// 6. Symbol
// non primitive:
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Error

// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
// Ans: var variableName = "value";
// Variable এর naming convention:
// JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or an underscore character. For example, "123test" is an invalid variable name but "_123test" is a valid one. JavaScript variable names are case-sensitive.

// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
// Ans: var num1 = 9;
// var num2 = 5;
// var result = num1 + num2;
// console.log(result);
// var result1 = num1 - num2;
// console.log(result1);
// var result2 = num1 * num2;
// console.log(result2);
// var result3 = num1 / num2;
// console.log(result3);
// var result4 = num1 % num2;
// console.log(result4);

// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
// Ans: 
// var nam1 = 9;
// nam1 += 5;
// console.log(nam1);

// ১১. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
// Ans: 
// 1/ ++  holo Increment operator 
// 2/ --  holo Decrement operator

// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 
// Ans: parseInt() String ke Intreger Number a convert kore.
// parseFloat() String ke Float Number a convert kore.
// toFixed() Float Number er dosomik er porer songkha guloke nisdisto kore Dey.
// Example: 
// var num = 12.34541255;
// console.log(num.toFixed(3));

// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
// Ans:JavaScript এ array এক ধরণের data type যা একটি single variable এ একাধিক value সংরক্ষণের সুযোগ দেয়।
// // var arr = [1, 2, 3, 4, 5];

// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
// // Ans: length diye ber kora hoy
// var arr = [1, 2, 3, 4, 5];
// console.log(arr.length); 

// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
// Ans:
// indexOf() diye array er index ber kora jay. 
// Example: 
// var arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.indexOf(4));
// "0" দিয়ে শুরু হয়.
// push() diye array er element add kora jay.
// unshift() diye array er first element add kora jay.
// pop() diye array er element delete kora jay.
// shift() diye array er first element delete kora jay.

// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 
// Ans: array er moddhe ai upadan ti nei.

// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
// Ans: Example:
// var arr3 = [1, 2, 3, 4, 5];
// console.log(arr3[0]);

// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
// Ans:
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);
// cars[2] = "Opel";
// console.log(cars);

// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
// Ans: 
// const cars = ["Saab", "Volvo", "BMW"];
// carses = cars.indexOf("BMW");
// console.log(carses);

// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)
// Ans:

// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে?

// Ans:
// let cars = ["Saab", "Volvo", "BMW"];
// let LastAdd = cars.push('Tesla');
// console.log(cars);
// let LastDelete = cars.pop();
// console.log(cars);

// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে

// Ans:
// let cars = ["Saab", "Volvo", "BMW"];
// let LastAdd = cars.unshift('Tesla');
// console.log(cars);
// let LastDelete = cars.shift();
// console.log(cars);

// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।।

// Ans:
// let a = 10;
// let b = 20;

// let c = a > b;
// console.log(c);
// let d = a < b;
// console.log(d);
// let e = a == b;
// console.log(e);
// let f = a != b;
// console.log(f);
// let g = a <= b;
// console.log(g);
// let h = a >= b;
// console.log(h);
// let i = a === b;
// console.log(i, e);
// let j = a !== b;
// console.log(j, f);
// let k = a && b;
// console.log(k);
// let l = a || b;
// console.log(l);

// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

// Ans:
let amrHateAche = 70000;
// switch (amrHateAche) {
//     case 80000:
//         console.log('mac');
//         break;
//     case 60000:
//         console.log('gaming');
//         break;
//     case 40000:
//         console.log('lenovo yoga');
//         break;
//     case 20000:
//         console.log('old laptop');
//         break;
// }
// if (amrHateAche >= 80000) {
//     console.log('mac');
// } else if (amrHateAche >= 60000) {
//     console.log('gaming');
// } else if (amrHateAche >= 40000) {
//     console.log('lenovo yoga');
// } else if (amrHateAche >= 20000) {
//     console.log('old laptop');
// } else {
//     console.log('mobile');
// }

// ---------------------

// ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।

// let i = 0;
// while (i < 39) {
//     console.log('Ajke amar mone balo nei', i);
//     i++;
// }
// console.log('for and while loop');
// for (i = 1; i <= 39; i++) {
//     console.log('Ajke amar mone balo nei', i);
// }

// ২৬. while লুপ কিভাবে কাজ করে

// let i = 0;
// // while (i < 39) {
// //     console.log('Ajke amar mone balo nei', i);
// //     i++;
// // }

// ২৭. for লুপ কিভাবে কাজ করে

// for (i = 1; i <= 39; i++) {
//     console.log('Ajke amar mone balo nei', i);
// }

// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়।

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
/*
let i = 58;
while (i <= 98) {
    console.log(i);
    i++;
}
*/
// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
/*
let i = 412;
while (i <= 456) {
    console.log(i);
    i += 2;
}
*/
// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
/*
let i = 581;
while (i <= 623) {
    console.log(i);
    i += 2;
}
*/
// ৩২.while আর for loop এর মধ্যে পার্থক্য কি



// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

// // ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

// Function------------------------------------------------

// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা(multiplication table) আউটপুট হিসেবে দেখাবে।



// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।



// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।



// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা:



// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],

//     crust: 'deep dish',

//     serves: 2

// }

// এবং pepperoni প্রিন্ট করবা।


//৩ দ্বারা বিভাজ্য সংখ্যা প্যারামিটার হিসেবে নিবে আউটপুট হিসেবে সেটাকে রিটার্ন করবে।
function divisibleBy3() {
    let count = 0;
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            count += 1;
        }
    }
    return count;
}
const result = divisibleBy3();
console.log(result);

function mulaQuntity(quntity) {
    let price = 0
    if (quntity <= 2) {
        price = quntity * 30;
    }
    else {
        price = quntity * 25;
    }
    return price;
}
console.log(mulaQuntity(3));