When the user calls the index.js file via node they will be presented with a series of prompts
When they finish responding to the prompts an object containing their inputs
will be pased into the generateMarkdown function which was imported/exported
from a file in the assets directory.
This function first destructures the returned input object, it then
tests to see if anything was entered for each optional input.
If something was a section with the appropriate header will be created
and a link to the section will be created for the table of contents.
The functions use conditional logic to test if the variable associated with
each input contain anything or if they return a falsy value.
If it does have a flasy value an empty string will be returned in place of user input
The functions are then called in the template area and will be returned to a 
variable that will then be passed into the writeFile function to generate
the genREADME file.
Proper naming syntax is used so that all links in the genREADME function
and that all sections display properly.

*changed name of generated readme after recording video so main one could be used for explanatory purposes

[Link to Video](https://drive.google.com/file/d/1pxeOVTHy4OpiUSsXGO3nU8AwJSwuQ-bu/view)