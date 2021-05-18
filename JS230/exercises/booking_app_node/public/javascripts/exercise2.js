document.addEventListener('DOMContentLoaded', event => {
  let form = document.querySelector('form');

  function formDataToJson(formData) {
    const json = {};
    for (const pair of formData.entries()) {
        json[pair[0]] = pair[1];
    }

    return json;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    const json = JSON.stringify(formDataToJson(formData));
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);

    xhr.addEventListener('load', event => {
      switch(xhr.status) {
        case 201:
          const data = JSON.parse(xhr.response);
          alert(`Successfully created staff with id: ${data.id}`);
          break;
        case 400:
          alert(xhr.responseText);
          break;
      }
    });
  });
});