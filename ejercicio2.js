function checkSubmit() {
    error = new Array();

    form['name'].value=form['name'].value.trim();
    form['email'].value=form['email'].value.trim();
    form['town'].value=form['town'].value.trim();
    form['state'].value=form['state'].value.trim();
    form['postcode'].value=form['postcode'].value.trim();
    form['dob'].value=form['dob'].value.trim();
    form['height'].value=form['height'].value.trim();

    if(!form['name'].value)
        error.push('Missing Name');
    if(!form['email'].value)
        error.push('Missing Email Address');
    if(!form['password'].value)
        error.push('Missing Password');

    var pattern=/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,4})$/;
    if(!form['email'].value.match(pattern))
        error.push('Email invalido');


    var pattern=/^\d{4}$/;
    if(!form['postcode'].value.match(pattern))
        error.push('Invalid Post Code');

    console.log(form['confirm'].value);
    console.log(form['password'].value);
    if(!form['confirm'].value.match(form['password'].value)){
        error.push('Passwords do not match');
    }

    if(whichButton('gender')===false)
        error.push('Please choose a Gender');

    if (!form['colour'].value ||
        (form['colour'].value=='other' && !form['othercolour'].value))
        error.push('Colour is not selected');

    if(error.length) { 
    alert(error.join("\n"))
    return false;
    }
    else return true;

} 
function checkReset() {
    return confirm("This will clear the form data");
}