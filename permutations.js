var permutations = [];

function doPerm(str, arr) {
    if (typeof (str) == 'string') str = str.split('');
    if (str.length == 0) permutations.push(arr.join(''));
    for (var i = 0; i < str.length; i++) {
        var x = str.splice(i, 1);
        arr.push(x);
        doPerm(str, arr);
        arr.pop();
        str.splice(i, 0, x);
    }
}
doPerm('', []);
console.log(permutations);

// Heaps Method of Permutations 

function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}

function getAnagrams(input) {
    var counter = [],
        anagrams = [],
        chars = input.split(''),
        length = chars.length,
        i;

    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
        } else {
            counter[i] = 0;
            i++;
        }
    }

    return anagrams;
}
