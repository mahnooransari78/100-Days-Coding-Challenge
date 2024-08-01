// Question 1:
// Famous Quote: find a quote from a famouse person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, "A person who never made a mistake never tride anything new" .
console.log("Albert Einstein once said, 'A person who never made a mistake never tride anything new' ");
// Question : 2 
// Famous Quote 2 : Repeat Exerecise 1, but this time store the famous person's name in a variable called famous_person. then compose your message and store it in a new veriable called message. Print your message
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, 'A person who never made a mistake never tride anything new'");
console.log(message);
// Question : 3 
// stripping Name: store a person's name, and include some whitespace characters at the beginning and end of the name. Use"\t"(tab)and "\n"(new line) at least once. Print the name after stripping the ehite spaces.
var person_name = "\t \n Mahnoor\t\n";
console.log(person_name);
console.log(person_name.trim());
