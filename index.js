import { greet, yo } from "./greet.js"
import { yoo } from "./yo.js"
import chalk from "chalk"
import cowsay from "cowsay"
import figlet from "figlet"

console.log(chalk.bgGreen.whiteBright(cowsay.say({
    text: "Hello CowSay"
})));

console.log("");
console.log(chalk.bgRed.whiteBright("======== Breaking LIne ==========="))
console.log("")

const cowMessage = (chalk.bgGreen.whiteBright(cowsay.say({
    text: "Hello Khanyi"
})))

console.log(cowMessage);
console.log("")


const greetMessage = chalk.bgRed.whiteBright(greet("Khanyi"))
console.log(greetMessage);

const yoMessage = chalk.bgGray.whiteBright(yo("Basil my nigga!"))
console.log(yoMessage);

const yooMessage = chalk.bgGreen.whiteBright(yoo("again man!"))
console.log(yooMessage);

console.log("")

console.log(chalk.bgGreenBright.whiteBright("============= figlet with chalk ================"))

console.log("");

figlet("Hello, developers", function(err, data)
{
    if(err) {
        console.log('Something went wrong...')
        console.dir(err);
        return;
    }
    console.log(chalk.bgBlue.whiteBright(data))
})

figlet("Hello, Khanyie", function(err, data)
{
    if(err) {
        console.log('Something went wrong...')
        console.dir(err);
        return;
    }
    console.log(chalk.red(data))
})