document.addEventListener('DOMContentLoaded', function() {
  function makeList(schedules) {
    let h1 = document.querySelector('h1');
    let ul = document.createElement('ul');
    
    schedules.forEach(sched => {
      let li = document.createElement('li');
      li.textContent = sched.date;
      li.style.fontSize = '16px';
      li.style.fontWeight = '300';
      li.setAttribute('student_email', sched.student_email);
      li.setAttribute('time', sched.time);
      li.setAttribute('staff_name', sched.staff_name);
      ul.appendChild(li);
    });

    ul.addEventListener('click', ({target}) => {
      if (target.tagName == 'LI') {
        if (target.childElementCount === 0) {
          let email = target.getAttribute('student_email');
          let staff_name = target.getAttribute('staff_name');
          let time = target.getAttribute('time');
          
          let ul2 = document.createElement('ul');
          let li2 = document.createElement('li');
          li2.textContent = `${staff_name} | ${email} | ${time}`;
          ul2.appendChild(li2);
          target.appendChild(ul2);
        }
      }
    });

    h1.appendChild(ul);
  }

  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/schedules');
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('load', event => {
    let allSchedules = xhr.response;
    let bookedSchedules = allSchedules.filter(sched => sched.student_email !== null);
    
    let xhr2 = new XMLHttpRequest();
    xhr2.open('GET', '/api/staff_members');
    xhr2.responseType = 'json';
    xhr2.send();

    xhr2.addEventListener('load', event => {
      let allStaff = xhr2.response;

      bookedSchedules.forEach(sched => {
        let staffId = sched.staff_id;
        let employee = allStaff.filter(staff => {
          return staff.id === staffId;
        })[0];
        sched.staff_name = employee.name;
      });

      makeList(bookedSchedules);
    });    
  });
});