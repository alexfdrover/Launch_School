document.addEventListener('DOMContentLoaded', function() {
  function displaySchedulesFor(schedList) {
    let select = document.getElementById('id');
    schedList.forEach(sched => {
      let option = document.createElement('option');
      let staff_name = sched.staff_name;
      let date = sched.date;
      let time = sched.time;
      let message = staff_name + ' | ' + date + ' | ' + time;
      option.textContent = message;
      option.setAttribute('value', sched.id);
      option.setAttribute('staff_id', sched.staff_id);
      option.setAttribute('date', date);
      option.setAttribute('time', time);
      option.setAttribute('staff_name', staff_name);
      select.appendChild(option);
    })
  }

  function formDataToJSON(formObj) {
    let json = {};
    for (let pair of formObj.entries()) {
      json[pair[0]] = pair[1];
    }

    return json;
  }

  function showBookingTemplate(data) {
    const newStudentForm = document.createElement('form');
    newStudentForm.setAttribute('method', 'post');
    newStudentForm.setAttribute('action', '/api/students');
    newStudentForm.setAttribute('id', 'newStudentForm');

    const h1 = document.createElement('h1');
    h1.textContent = 'Please provide new student details';
    newStudentForm.appendChild(h1);

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    emailLabel.setAttribute('for', 'email');
    newStudentForm.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('value', data.email);
    newStudentForm.appendChild(emailInput);
    newStudentForm.appendChild(document.createElement('br'));

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.setAttribute('for', 'name');
    newStudentForm.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('id', 'name');
    newStudentForm.appendChild(nameInput);
    newStudentForm.appendChild(document.createElement('br'));

    const bookingSequenceLabel = document.createElement('label');
    bookingSequenceLabel.textContent = 'Booking Sequence:';
    bookingSequenceLabel.setAttribute('for', 'booking_sequence');
    newStudentForm.appendChild(bookingSequenceLabel);

    const bookingSequenceInput = document.createElement('input');
    bookingSequenceInput.setAttribute('type', 'text');
    bookingSequenceInput.setAttribute('name', 'booking_sequence');
    bookingSequenceInput.setAttribute('id', 'booking_sequence');
    bookingSequenceInput.setAttribute('value', data.bookingSequence);
    newStudentForm.appendChild(bookingSequenceInput);
    newStudentForm.appendChild(document.createElement('br'));

    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    newStudentForm.appendChild(submitInput);
    document.querySelector('body').appendChild(newStudentForm);
  }

  // fetch all schedules
  let request = new XMLHttpRequest();
  request.open('GET', '/api/schedules');
  request.responseType = 'json';
  request.addEventListener('load', event => {
    let schedules = request.response;
    let freeSchedules = [];
    for (let i = 0; i < schedules.length; i += 1) {
      if (schedules[i].student_email === null) freeSchedules.push(schedules[i]);
    }

    // fetch all staff
    let staffRequest = new XMLHttpRequest();
    staffRequest.open('GET', '/api/staff_members');
    staffRequest.responseType = 'json';
    staffRequest.addEventListener('load', event => {
      let staffList = staffRequest.response;

      // add 'staff_name' as a property to each schedule
      freeSchedules.forEach(schedule => {
        let employee = staffList.filter(employee => {
          return employee.id === schedule.staff_id;
        })[0];

        schedule['staff_name'] = employee.name;
      });

      displaySchedulesFor(freeSchedules);

      // create submission form
      let form = document.querySelector('form');
      form.addEventListener('submit', event => {
        event.preventDefault();
        let formData = new FormData(form)
        let json = JSON.stringify(formDataToJSON(formData));

        let formSubmitRequest = new XMLHttpRequest();
        formSubmitRequest.open('POST', form.action);
        formSubmitRequest.setRequestHeader('Content-Type', 'application/json');
        
        formSubmitRequest.addEventListener('load', event => {
          switch (formSubmitRequest.status) {
            case 404:
              alert(formSubmitRequest.responseText);
              let bookingSequence = formSubmitRequest.responseText.split(':')[1].trim();
              showBookingTemplate({email: form['email'].value, bookingSequence});
              break;
          }
        });
        
        
        formSubmitRequest.send(json);
      });
    });

    staffRequest.send();
  });

  request.send();
});