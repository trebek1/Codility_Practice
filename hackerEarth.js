function main(input) {
    //Enter your code here
    var stuff = input.split('\n');
    
    //process.stdout.write('zero ', stuff[0]);
    stuff[0] = parseInt(stuff[0]) * 2; 
    process.stdout.write(stuff.join('\n'));
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});
