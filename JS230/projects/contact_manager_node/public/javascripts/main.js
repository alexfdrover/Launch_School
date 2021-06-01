document.addEventListener('DOMContentLoaded', () => {
  let contactTemplate = document.querySelector('#contactTemplate');
  let contactTemplateObj = Handlebars.compile(contactTemplate.innerHTML);
  Handlebars.registerPartial('contact', contactTemplate.innerHTML);
  let contactsTemplate = document.querySelector('#contactsTemplate');
  let contactsTemplateObj = Handlebars.compile(contactsTemplate.innerHTML);

  let allContacts;

  function clearContacts() {
    let contactsContainer = document.querySelector('#contacts-container');
    if (contactsContainer) contactsContainer.remove();
  }

  function renderContacts(json) {
    clearContacts();
    json.length > 0 ? hideContainer('noContacts') : showContainer('noContacts');
    let utilityContainer = document.querySelector('#utility-container');
    utilityContainer.insertAdjacentHTML('beforeend', contactsTemplateObj({contacts: json}));
  }

  function getAllContacts() {
    fetch('/api/contacts')
      .then(response => response.json())
      .then(json => {
        allContacts = json;
        renderContacts(json);
      });
  }

  function addListenersToAddBtns() {
    let primaryContainer = document.querySelector('#primary-container');
    primaryContainer.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.classList.contains('addBtn')) {
        hideContainer('primary');
        showContainer('form');
      }
    });
  }
  
  function hideContainer(container) {
    let target;
    switch (container) {
      case 'form':
        target = document.querySelector('#form-container');
        break;
      case 'primary':
        target = document.querySelector('#primary-container');
        break;
      case 'noContacts':
        target = document.querySelector('#no-contacts-container');
        break;
      default:
        break;
    }
    
    target.style.display = 'none';
  }

  function showContainer(container) {
    let target;
    switch (container) {
      case 'form':
        target = document.querySelector('#form-container');
        break;
      case 'primary':
        target = document.querySelector('#primary-container');
        break;
      case 'noContacts':
        target = document.querySelector('#no-contacts-container');
        break;
      default:
        break;
    }
    
    target.style.display = 'block';
  }

  function resetForm(form) {
    form.setAttribute('action', '/api/contacts/');
    form.setAttribute('method', 'POST');
  }

  function saveContact(form) {
    let formData = new FormData(form);
    let data = formDataToJson(formData);
    let json = JSON.stringify(data);

    let url = form.getAttribute('action');
    let method = form.getAttribute('method');

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })
      .then(response => response.json())
      .then(json => {
        hideContainer('form');
        showContainer('primary');
        document.querySelector('#contacts-container').insertAdjacentHTML('beforeend', contactTemplateObj(json));
        resetForm(form);
      })
      .catch(error => console.error(error));
  }

  function formDataToJson(formData) {
    let obj = {};
    for (let entry of formData.entries()) {
      obj[entry[0]] = entry[1];
    }
    
    return obj;
  }

  function addListenersToFormBtns() {
    let form = document.querySelector('form');
    
    let cancelBtn = document.querySelector('.cancelBtn');
    let submitBtn = document.querySelector('.submitBtn');

    form.addEventListener('click', event => {
      event.preventDefault();
      if (event.target === cancelBtn) {
        hideContainer('form');
        showContainer('primary');
      } else if (event.target === submitBtn) {
        saveContact(form);
      }
    });    
  }

  function deleteContact(id, event) {
    fetch(`/api/contacts/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          event.target.closest('div').remove();
        }
        console.log(response);
      })
      .catch(error => console.error(error));
  }

  function loadForm(json) {
    let form = document.querySelector('form');
    hideContainer('primary');
    showContainer('form');
    for (let prop in json) {
      if (prop !== 'id') {
        form.elements[`${prop}`].value = json[prop];
      }
    }
  }

  function editContact(id) {
    fetch(`/api/contacts/${id}`)
      .then(response => response.json())
      .then(json => {
        let form = document.querySelector('form');
        form.setAttribute('action', `/api/contacts/${id}`);
        form.setAttribute('method', 'PUT');
        loadForm(json);
        document.querySelector(`[data-id="${id}"]`).closest('div').remove();
      });
  }

  function addListenersForEditAndDelete() {
    let primaryContainer = document.querySelector('#primary-container');
    primaryContainer.addEventListener('click', event => {
      if (event.target.classList.contains('deleteBtn')) {
        let id = event.target.getAttribute('data-id');
        deleteContact(id, event);
      } else if (event.target.classList.contains('editBtn')) {
        let id = event.target.getAttribute('data-id');
        editContact(id);
      }
    });
  }

  function filterAllContacts(string) {
    let re = new RegExp(string, 'i');
    return allContacts.filter(({full_name}) => {
      return full_name.match(re);
    });
  }

  function addListenersToSearch() {
    let search = document.querySelector('#search');
    search.addEventListener('keydown', event => {
      if (event.key === 'Backspace' || event.key.length === 1) {
        let text;

        if (event.key.length === 1) {
          text = search.value + event.key;
        } else if (event.key === 'Backspace') {
          text = search.value.slice(0, search.value.length - 1);
        }

        let matchingContacts = filterAllContacts(text);
        renderContacts(matchingContacts);
      }
    })
  }

  function initialize() {
    addListenersToAddBtns();
    addListenersToFormBtns();
    addListenersForEditAndDelete();
    addListenersToSearch();
    getAllContacts();
  }

  initialize();
  //TODO tagging, refactor into object creation pattern
});