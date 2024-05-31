function profile(event) {
    event.preventDefault();
    var isValid = true;

    const ftn = document.getElementById('ftn').value.trim();
    const ltn = document.getElementById('ltn').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pswd').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const supportReason = document.getElementById('spprt').value.trim();

    if (!ftn) {
        isValid = false;
        document.getElementById('ftne').textContent = '* required';
    } 

    else {
        document.getElementById('ftne').textContent = '*';
    }

    if (!ltn) {
        isValid = false;
        document.getElementById('ltne').textContent = '* required';
    } 
    
    else {
        document.getElementById('ltne').textContent = '*';
    }

    if (!email) {
        isValid = false;
        document.getElementById('emle').textContent = '* required';
    } 
    
    else {
        document.getElementById('emle').textContent = '*';
    }

    if (!password) {
        isValid = false;
        document.getElementById('pswde').textContent = '* required';
    } 
    
    else {
        document.getElementById('pswde').textContent = '*';
    }

    if (!gender) {
        isValid = false;
        document.getElementById('gendere').textContent = '* required';
    } 
    
    else {
        document.getElementById('gendere').textContent = '*';
    }

    if (!supportReason) {
        isValid = false;
        document.getElementById('spprte').textContent = '* required';
    } 
    
    else {
        document.getElementById('spprte').textContent = '*';
    }

    if (isValid) {
        localStorage.setItem('ftn', ftn);
        localStorage.setItem('ltn', ltn);
        localStorage.setItem('email', email);
        localStorage.setItem('gender', gender.value);
        localStorage.setItem('spprt', supportReason);
        window.location.href = 'aftersgn.html';
    }
};
