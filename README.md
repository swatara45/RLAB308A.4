For the purposes of this assignment, you will be working with The Cat API, which is a free public API.
Navigate to the API’s website using the link above, and then create an account as follows:
The first step toward working with any API is exploring its documentation. Every API you work with will be different, so never make any assumptions about how an API works.
Once you have familiarized yourself with the fundamentals of the API, continue to the tasks below.
Part 2: Tasks
Now that you know what you are working with, implement the following. These steps are best accomplished in order, but feel free to approach the problem differently if you see a creative and efficient solution:
Create an async function "initialLoad" that does the following:
Retrieve a list of breeds from the cat API using fetch().
Create new <options> for each of these breeds, and append them to breedSelect.
Each option should have a value attribute equal to the id of the breed.
Each option should display text equal to the name of the breed.
This function should execute immediately. 
Create an event handler for breedSelect that does the following:
Retrieve information on the selected breed from the cat API using fetch().
Make sure your request is receiving multiple array items!
Check the API documentation if you are only getting a single object.
For each object in the response array, create a new element for the carousel.
Append each of these new elements to the carousel.
Use the other data you have been given to create an informational section within the infoDump element.
Be creative with how you create DOM elements and HTML.
Feel free to edit index.html and styles.css to suit your needs.
Remember that functionality comes first, but user experience and design are also important.
Each new selection should clear, re-populate, and restart the carousel.
Add a call to this function to the end of your initialLoad function above to create the initial carousel. 
Create an additional file to handle an alternative approach.
