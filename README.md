This is a Budget App created during the CFG Kickstarter JavaScript 8 week course finishing Aug 2024. There are currently some bugs in the code and some features yet to be added such as the Edit and Delete function which I hope to update soon. 

Introduction
Hello everyone,
Thank you for joining us today. We are excited to present our JavaScript project, a simple yet functional budget app that we’ve named Miss Capital. 

The name highlights the importance of women, especially young women, taking charge of their finances. 

We’ll walk you through our journey of creating this app, the challenges we faced, and what we learned along the way.

Project Overview
When we started building Miss Capital, we focused on the key objectives outlined in the brief:
Accepting user input for income and expenses.
Dynamically updating the HTML and CSS using JavaScript.
Utilising event triggers to make the app interactive.
We also aimed to tackle the bonus goals, which we’ll discuss as we go through the code. 

Collaboration Tools
In any project, collaboration is key. Here’s a quick look at the tools we used:
Slack: For organising meetings and sharing resources.
VS Code: Though we considered using Replit for real-time coding.
GitHub Kanban: While we attempted to use this, it wasn't as effective due to varying familiarity with GitHub.
Stack Overflow, W3 Schools, and ChatGPT: These were invaluable for troubleshooting and learning new concepts.
Though we had varying levels of experience, these tools helped us stay connected and on track.

Needs & Wants
Every project has its essential needs and its "nice-to-haves". For Miss Capital, our needs were:
Accepting and labeling income and expense inputs.
Calculating totals by adding and subtracting these values.
Listing each entry for easy tracking.
On our wish list, we had:
A login feature.
Personalized greetings.
Editing and deleting list items.
Including a date for each entry.
A user-friendly and accessible interface.
We managed to implement quite a few of these, as you’ll see in the demo.
App Demo
Let’s dive into a quick demo of Miss Capital:
Login Section: The app starts with a login page. The rest of the app remains hidden until the correct username and password are entered. This is done using JavaScript to manipulate the DOM and alter the CSS display properties.

Main Interface: Once logged in, users can input their income and expenses. If any fields are left blank, an error message is displayed, though you can still continue. The entries are added to separate lists, with the current date, and the total balance is updated dynamically at the bottom.
The Functions
Now, let’s break down some of the major functions we used:
User Authentication:
Hides the main app interface until the user logs in successfully.
Validates credentials and displays the main content upon success.
Uses an onclick event trigger to show the main app container.
Hides HTML/CSS elements using conditional logic


Income and Expense Management (addIncome, addExpense):
Allows users to add income and expenses, displaying them in separate columns.
Automatically formats the date, name, and amount for each entry.
Shows an error if required fields are left blank.
Targets HTML elements using DOM
Uses conditional logic including boolean to hide and display HTML sections
Uses JS to create new HTML elements.
Uses DOM tree to create new entries into HTML structure with the appendChild method


Total Money:
Calculates and updates the total balance based on user entries.
Updates the total dynamically with correct formatting.
Uses the same methods above 
Includes removal of HTML elements with the replace method
Access to the the class array when getting the class element for a variable
Uses parseFloat method to convert string to float data type
Uses concatenation to display textContent

Challenges & Solutions
As beginners, we faced several challenges:
Understanding key concepts took time and caused delays.
Debugging was a major time sink, but also a learning opportunity.
Communication gaps initially led to some confusion in task delegation and project synchronisation.
We overcame these by improving our communication and dividing tasks more effectively as the project progressed.
What Went Well
Despite the challenges, we succeeded in:
Building a functional budget app.
Applying JavaScript to manipulate the DOM and update HTML/CSS dynamically.
Reinforcing our understanding of core programming concepts.
Future Improvements
Given more time, here’s what we would improve:
Fixing the bugs we mentioned earlier.
Adding an account section for personalised user data.
Incorporating edit and delete functions for list items.
Integrating a pie chart for visual data representation (a bit ambitious for our current skill level!).
Implementing local storage to save user data.
Conclusion
Thank you for your time! We hope you enjoyed our presentation of Miss Capital. It’s been a rewarding experience, and we’ve learned a lot about teamwork, problem-solving, and coding along the way. We’re excited to continue growing our skills in software development!


