/**ejercicios 1 */
//console.log("HELLO ES6");


/****ejercicios 2 */
//console.log(`Hello, ${process.argv[2]}!
//Your name lowercased is "${process.argv[2].toLowerCase()}".`);


/****ejercicios 3 */

// const inputs = process.argv.slice(2);
// const result = inputs.map(s => s[0])
//                    .reduce((data, s) => data + s);

// console.log(`[${inputs}] becomes "${result}"`);

/***ejercicios 4 */

// const foot = {
//    kick: function () {
//        this.yelp = "Ouch!";
//        setImmediate(() => console.log(this.yelp));
//    }
// };
// foot.kick();

/***ejericios 5 */
// let args = process.argv.slice(2);
// let result = {};
// [, result.username, result.email] = args;
// console.log(result);

/****ejercicios 6 */

// const numbers = process.argv.slice(2);
// const min = Math.min(...numbers);
// console.log(`The minimum of [${numbers}] is ${min}`);

/**ejercicios 7 ***/
// module.exports = (...args) => {
// const sum = args.reduce((x, p) => x + p, 0);
// return sum / args.length;
// }

/**ejercicios 8 */
//module.exports = (x = 0, y = 1) => (x + y) / 2;
//module.exports =(data, x = data.length) => data + "!".repeat(x);

/**ejercicios 9***/
// console.log(render`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
// function render(pieces, ...substitutions) {
//     let result = pieces[0];
//     for (let i = 0; i < substitutions.length; ++i) {
//         result += escape(substitutions[i]) + pieces[i + 1];
//     }

//     return result;
// }

// function escape(s) {
//     return s.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;")
//             .replace(/'/g, "&apos;")
//             .replace(/"/g, "&quot;");
// }
