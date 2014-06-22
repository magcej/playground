function sum(numbers) {
   var total = 0;
    for(i=0; i<numbers.length; i++) {
        var n = numbers[i];
        total = total + n;
    }
    return total;
}
