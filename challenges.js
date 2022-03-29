const Stack = require("./stack");
const Queue = require("./queue");


/** reverse(str): return string with chars reversed */

function reverse(str) {
    let reversed = new Stack();
    let result = '';
    for (let char of str) {
        reversed.push(char);
    }
    while (!reversed.isEmpty()) {
        result += reversed.pop();
    }
    return result;
}

/** isBalanced(str): string may include any kind of brackets.
 *  Function returns boolean of whether brackets are balanced.
 *  Balanced = no unclosed brackets, no brackets out of order, 
 *  no closed bracket for unopened bracket.
 */
function isBalanced(str) {
    let firstQueue = new Queue;
    let openBrackets = [];

    // populate firstQueue with string chars
    for (let char of str) {
        if (char === '(' || char === '[' || char === '{'
            || char === '}' || char === ']' || char === ')' ) {
                firstQueue.enqueue(char);
            }
    }

    // no brackets automatically returns true
    if (!firstQueue.size) return true;
    // odd number of brackets disqualifies
    if (firstQueue.size % 2 !== 0) return false;
    // closing bracket as first item disqualifies 
    if (firstQueue.peek() === ']' || firstQueue.peek() === ')' || firstQueue.peek() === '}') {
        return false;
    }

    function isMatch(lchar, rchar) {
        if (lchar === '(') return rchar === ')';
        if (lchar === '[') return rchar === ']';
        if (lchar === '{') return rchar === '}';
    }

    while (firstQueue.size) {
        // first item is closing bracket
        if ((firstQueue.peek() === ']' || firstQueue.peek() === ')' || firstQueue.peek() === '}')) {
            // closing bracket matches last item of openBrackets array
            if ((openBrackets.length > 0) && 
                (isMatch(openBrackets[openBrackets.length - 1], firstQueue.peek()))) {
                firstQueue.dequeue();
                openBrackets.pop();
            } else {
            // closing bracket does not match last item of openBrackets array
                return false;
            }
        // first item is opening bracket
        } else {
            // first two items match 
            if (firstQueue.size && isMatch(firstQueue.peek(), firstQueue.first.next.val)) {
                firstQueue.dequeue();
                firstQueue.dequeue();
            } else {
                // first item doesn't match next, so remove it and put it in the openBrackets array
                openBrackets.push(firstQueue.dequeue());
            }
        }
    }
    return true;
}

function josephus(length, skipNum) {
    let currQueue = new Queue;
    let discardQueue = new Queue;
    let counter = 1;
    let survivor = null;

    for (let i = 1; i <= length; i++) {
        currQueue.enqueue(i);
    }

    function switchQueues() {
        let temp = discardQueue;
        discardQueue = currQueue;
        currQueue = temp;
        if (currQueue.size === 1) {
            survivor = currQueue.dequeue();
        }
    }

    while (currQueue.size) {
        if (counter === skipNum) {
            currQueue.dequeue();
            counter = 1;
            if (currQueue.size === 0) { 
                switchQueues();
            }
        } else {
            discardQueue.enqueue(currQueue.dequeue());
            counter ++;
            if (currQueue.size === 0) switchQueues();
        }
    }
    if (survivor) return survivor;

}

module.exports = {reverse, isBalanced, josephus};

