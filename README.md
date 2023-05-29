# Week 9 HW
## Written
### Homework Assignment: Peer Code Review

-For this homework assignment, you are tasked with performing a peer code review. You will select one of your classmate's code repositories to evaluate, offering constructive feedback and suggestions for improvements. Here's how to proceed:

-Code Selection: Choose a piece of code written by one of your classmates. This will be the unit 1 project. If you are not sure where to find this, refer to the shared project spreadsheet or reach out to your classmate directly.
-Review the Code: Spend some time understanding what the code is intended to do. Run it if possible, and inspect each part of the code. Consider factors like clarity, efficiency, functionality, and adherence to coding standards and best practices.(to the best of your knowledge)
-Write Feedback: Write a detailed review of the code. Your feedback should include:

-What the code does well.
-Suggestions for improvement. Be specific and explain why you believe your suggestion would improve the code.
-Any parts of the code that were unclear to you, and suggestions for how they could be made more understandable.
-Notable strengths of the coder's style or approach.
-Share Your Review: Share your feedback directly with the classmate whose code you reviewed. This can be done through a document, an email, or through comments on the code itself.
-Follow Up: Be prepared to engage in a discussion about your feedback. Remember, the goal is to help each other grow as developers, so be open and receptive to any questions or discussions that arise from your review.
-Additional Instructions: If there are any additional steps required by the instructional team, be sure to complete these as well. (you know if we gave you additional steps)
-Remember, the goal of a code review isn't to criticize, but to provide constructive feedback that helps all of us improve as programmers. Always be respectful and supportive in your feedback. Happy reviewing!

## Practical
-First Express Homework

-Practice the Basics of Express

-Learning Objectives
-Set up some express servers for practice
-make some get routes
-use url/query parameters
-Technical Requirements
-Must be able run without syntax errors (ok if it breaks after the user tries to do something, though do try to comment on the code that isn't working)
-Must get functionality required for each section working
Learning Objectives
Practice setting up express applications.
Practice creating custom routes.
Practice using parameters from a request.
-Getting Started
-In your homeworkdirectory for today, create a Javascript file server.js. Write your answers inside this one js file.

-npm init -y. You should receive a package.json.
-Install express. npm i express. Check your files.

-:elephant: Hint: You can check to make sure your installation was successful in one of the following places:

-Your package.jsonfile should have expresslisted in the dependencies.
-You could also check in your node_modulesfolder to see anexpressfolder.
-Require expressand set the app. (look back to the markdown from today if you need more help on how to do this).
-Tell the server where to listen for requests (the port).
### Greetings
-Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
-Give the greetingroute a param /:name
-When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).
-🔴 Commit

-"Greeting express application created."
-Tip Calculator
-Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tipPercentage.
-When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20'should display 20on the page).
-🔴 Commit

-"Tip Calculator express application created."
### Magic 8 Ball
-Create a route of '/magic'that should expect a phrase in the URL that ask the Magic 8 ball a question.
-So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.
-We can't use spaces in the url, so we use %20to express a space in the url.
-So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.
-Send the magic 8 ball response back between html <h1>tags
-Use this array of Magic 8 ball responses.....
-["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
-🔴 Commit

-"Magic 8 Ball express application created."
### Fibonacci
-Back in your main app:

-Add Fibonnacias a comment in your application.
-Create a route 'fibonacci'
-This route will take one param, the number we will operate on.
-If the number param is not a fibonacci number, print out "I can tell this is not a fibonacci number."
-If the number is a Fibonacci number print out "Very good. It is Fibonacci."
-🔴 Commit

-"Fibonacci."
### Hungry for more?
-HackerRank
-Sign up for HackerRank. Solve a few of the problems (this will help get you prepared for interviews! A lot of companies use this site for pre-screening interviews.). Some companies use hackarrank as part of an interview process, so getting familiar with the interface can be a good move

-Submission:

-Submit your code using GitHub. Include a README that explains how to run your application

## Theoretical
-Watch myGA module: Big O Notation
-
-hat is the worst-case time complexity for the -ollowing algorithms?
-
-1
-unction wordOccurrence(word, phrase){
- let result = 0
- const array  = phrase.split(' ')
- for(let i = 0; i < array.length; i++){
-   if(word.toLowerCase() === array[i].toLowerCase()){
-     result++;
-   }
- }
- return result
-
-2
-unction bubble_sort(list){
- for(let i = 0; i < list.length - 1; i++){
-   for(let j  = 0; j < list.length - 2; j++){
-     if(list[j+1] < list[j]){
-       const temp = list[j];
-       list[j] = list[j+1];
-       list[j+1] = temp;
-     }
-   }
- }
- return list;
-
-#3
-function factorial(n){
-  if(n === 0){
-    return 1;
-  }else{
-    return n * factorial(n-1);
-  }
-}
-#4
-function bobIsFirst(people){
-  return people[0] == 'bob'
-}
-#5
-function isPalindrome(input){
-  const stack = [];
-  let output = "";
-  for(let i = 0; i < input.length; i++){
-    stack.push(input[i]);
-  }
-  while(stack.length){
-    output += stack.pop();
-  }
-  return output == input
-}
-#6
-function sumOfDivisors(n){
-  let result = 0;
-  let i = 1;
-  while(i < n){
-    if( n % i == 0){
-      result += i;
-    }
-    i++;
-  }
-  return result
-}
-#7
-function printAllNumbersThenSumPairs(numArray){
-  numArray.forEach((num)=>{
-    console.log(num);
-  });
-  numArray.forEach((num, index)=>{
-    if(index < numArray.length - 1){
-      console.log(num + numArray[index+1])
-    }
-  });
-}
-#8
-function isPrime(num){
-  if(num == 1 || num == 2){
-    return false
-  }
-  for(let i = 2; i < num - 1; i++){
-    if(num % i == 0){
-      return false
-    }
-  }
-  return true
-}# SEI-Week-9
