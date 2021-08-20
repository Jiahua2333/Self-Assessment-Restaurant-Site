/*
DOM:
Each page element (an HTML tag) corresponds to an object.  
DOM maps HTML's document structure to a tree-like object model, where each element (tag) corresponds to a node object in the tree. 

JavaScript can traverse, add, delete and update this tree via the html tags, id, class.
Css using selectors to styling the website, such as ID Seletor, Attribute Selector, tag Selector and so on.
*/

var form = document.forms["contactForm"]; //Get the whole form object;
var fullname = document.getElementById("name"); //get the name input object

var submitButton = document.getElementById("submitButton"); //get the submit button object

//invoke this function when click submit button(connect to onSubmit attribute)
function validate() {
  form.className = "needs-validation";

  if (!form.checkValidity()) {
    form.className = "was-validated"; //use to show the vilidated message when submit.
    return false;
  }

  var phone = form["phone"]; //get the input phone object
  var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //regular express for the phone format

  if (!phone.value.match(reg)) {
    document.getElementById("PhoneChecked").innerText =
      "Phone Format: xxx-xxx-xxxx or (xxx)xxx-xxxx";
    return false;
  } else {
    document.getElementById("PhoneChecked").innerText = "";
  }

  submitButton.innerText = "Submitted";
  return false;
}

//invoke this function when click reset button(connect to onreset attribute)
function resetView() {
  form.className = "needs-validation";
  submitButton.innerText = "Submit";
  fullname.focus();
}
