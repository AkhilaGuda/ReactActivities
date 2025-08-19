# using create react app registration-form is created
* Created component called registration form
* with 3 fields username, password, confirm password
* with useState hook variables initialised to empty strings, to handle errors,success to more states are initialized
* on submit form handling function is used which checks if username is empty, password is present or not and whether password and confirm password are same or not based on these conditions error message is thrown
* if every field is according to concerns then success is updated to true and success message is displayed 
* or else the errors are set and displayed
* for strength validation i used npm validator to validate the password
* I used custom password characteristics and based on conditions i classified them to strong,weak,medium password
* after success the form is reset using setFormData function