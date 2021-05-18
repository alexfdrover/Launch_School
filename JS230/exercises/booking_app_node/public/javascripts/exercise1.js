document.addEventListener('DOMContentLoaded', function() {
  function retrieveSchedules() {
    const request = new XMLHttpRequest();

    request.open('GET', 'http://localhost:3000/api/schedules');
    request.timeout = 5000;
    request.responseType = 'json';

    request.addEventListener('load', event => {
      const schedules = request.response;
      let message = '';
      if (schedules.length === 0) {
        alert('There are no schedules available for booking');
      } else {
        let tally = {};
        schedules.forEach(({staff_id}) => {
          let id = `staff ` + staff_id;
          if (tally[id] === undefined) tally[id] = 0;
          tally[id] += 1;
        });
        
        for (prop in tally) {
          message += `${prop}: ${tally[prop]}\n`;
        }
        alert(message);
      }
    });

    request.addEventListener('timeout', event => {
      alert('It is taking longer than usual, please try again later');
    });
    
    request.addEventListener('loadend', event => {
      alert('The request has completed');
    });

    request.send();
  }

  retrieveSchedules();
});