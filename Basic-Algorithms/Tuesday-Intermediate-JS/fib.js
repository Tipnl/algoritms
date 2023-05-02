// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// PsuedoCode:
// Declare a var with an array of [0, 1].
// Loop through numbers 2 to 999,999.

// Code:

function fib(n) {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  }

  var result = [0, 1];

  for (var i = 3; i <= n; i++) {
    result.push(result[result.length - 2] + result[result.length - 1]);
  }

  return result;
}

// Diagram:
// This might be a bit messy, but perhaps you can explain a better way to me?
// I will explain what i have done instead, which i personally think is easier. It's a little different but works the same, if you do not agree with me i will rewrite the code no problem, because i understand the concept.
// User can call the function with a number. n stands for number. in this case 999,999. because 999,999 is below 1,000,000.
// If the number is 1, it will return an array with [0];
// If the number is 2, it will return an array with [0, 1];
// I have then declared a variable with the name result. the value of result is an array with 2 elements that have the value of 0 on pos1 and 1 on pos2.
// So lets start the function.
// User calls function with 1. n === 1. first condition is true. returns [0];
// User calls function with 2. n !== 1, n === 2. second condition is true. returns [0, 1].
// Now this is where my code turns funny. But it works, so its not wrong, right? :D
// User calls function with 3. n !== 1, n !== 2. so we go into the loop. the loop starts at 3, i = 3. n=3, so here we go!
// At this point our array is 2 elements long, since i = 3, we have to somehow get the next sequence into array.
// So we read the right side of the code first. the part that comes after result.push.
// There we have 2 arguments. result[result.length - 2] + result[result.length - 1].
// The first one references the position of 0, as at this point the array has only 2 elements.
// The second one references the position of 1, same reason as above.
// So we have 0 and 1.
// pos 0 + pos 1 = 1.
// We push that number to the result array.
// Array result now becomes [0, 1, 1];
// Now we i++, but lets say for the sake of argument instead of calling 3, the user called 4.
// Now the array has 3 elements. So what happens here?
// Well Essentially the same thing.
// Just because our array now has 3 elements, doesnt make it harder to figure it out.
// The 2 arguments still apply, but because our array has 3 elements they no longer go for pos 0 and 1, but for pos 1 and 2.
// on pos 1 we have a value of 1.
// on pos 2 we have a value of 1.
// pos 1 and pos 2 = 1+1=2.
// 2 gets pushed to the array.
// Array result now becomes [0, 1, 1, 2].
// Now is we go for 5, pos 3 is 1, pos 4 is 2. 1+2=3, 3 gets pushed to array. [0, 1, 1, 2, 3].
// 6 = pos 4= 2, pos 5 = 3, 5. 5 gets pushed to array. [0, 1, 1, 2, 3, 5].
// This cycle continues with whatever number the user types in.

// I hope my explanation was sufficient.
