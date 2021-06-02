class AddressBookModel {
  constructor() {
    this.allContacts;
    this.tags = [];
  }

  init() {
    this.readAllContacts();
  }

  createContact(body) {
    return fetch('/api/contacts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
      .then(response => {
        if (response.ok) {
          this.readAllContacts();
          return response.json();
        }
      })
  }

  readContact(id) {
    return fetch(`/api/contacts/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      });
  }

  updateTags() {
    let allTags = this.tags;
    this.allContacts.forEach(({tags}) => {
      if (tags) {
        let tagList = tags.split(',');
        tagList.forEach(tag => {
          tag = tag.trim();
          if (!allTags.includes(tag)) allTags.push(tag);
        });
      }
    });

    this.tags = allTags;
  }

  addTag(tag) {
    tag = tag.trim();
    if (!this.tags.includes(tag)) this.tags.push(tag);
  }

  readAllContacts() {
    fetch('/api/contacts')
    .then(response => response.json())
    .then(json => {
      this.allContacts = json;
      this.updateTags();
    });
  }

  updateContact(id, body) {
    return fetch(`/api/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
      .then(response => {
        if (response.ok) {
          this.readAllContacts();
          return response.json();
        }
      });
  }

  deleteContact(id) {
    fetch(`/api/contacts/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) this.readAllContacts();
      })
  }

  getContacts() {
    return this.allContacts;
  }

  getTags() {
    return this.tags;
  }
}

class AddressBookView {
  constructor() {
    let contactTemplate = document.querySelector('#contactTemplate');
    this.contactTemplateObj = Handlebars.compile(contactTemplate.innerHTML);
    Handlebars.registerPartial('contact', contactTemplate.innerHTML);
    let contactsTemplate = document.querySelector('#contactsTemplate');
    this.contactsTemplateObj = Handlebars.compile(contactsTemplate.innerHTML);
  }

  init(contacts) {
    this.renderContacts(contacts);
  }

  clearContacts() {
    let contactsContainer = document.querySelector('#contacts-container');
    if (contactsContainer) contactsContainer.remove();
  }

  renderContacts(contacts) {
    this.clearContacts();
    contacts.length > 0 ? this.hideContainer('noContacts') : this.showContainer('noContacts');
    let utilityContainer = document.querySelector('#utility-container');
    utilityContainer.insertAdjacentHTML('beforeend', this.contactsTemplateObj({contacts: contacts}));
  }

  addContactToPage(contact) {
    document.querySelector('#contacts-container').insertAdjacentHTML('beforeend', this.contactTemplateObj(contact));
  }

  replaceContactOnPage(contact) {
    let id = contact.id;
    let oldElement = document.querySelector(`[data-id="${id}"]`).closest('div');
    oldElement.insertAdjacentHTML('afterend', this.contactTemplateObj(contact));
    oldElement.remove();
  }

  removeContactFromPage(node) {
    node.closest('div').remove();
  }

  resetForm() {
    let form = document.querySelector('#add-form');
    form.setAttribute('action', '/api/contacts/');
    form.setAttribute('method', 'POST');
    form.setAttribute('data-id', '');
    let elements = form.elements;
        for (let i = 0; i < elements.length; i += 1) {
          if (elements[i].tagName !== 'BUTTON') {
            elements[i].setAttribute('value', '');
          }
        }
  }

  hideContainer(container) {
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
      case 'tag':
        target = document.querySelector('#tag-container');
        break;
      default:
        break;
    }
    
    target.style.display = 'none';
  }

  showContainer(container) {
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
      case 'tag':
        target = document.querySelector('#tag-container');
        break;
      default:
        break;
    }
    
    target.style.display = 'block';
  }

  populateForm(json) {
    let form = document.querySelector('#add-form');
    this.hideContainer('primary');
    this.showContainer('form');
    for (let prop in json) {
      if (prop !== 'id') {
        form.elements[prop].setAttribute('value', json[prop]);
      }
    }
  }
}

class AddressBookCtrl {
  constructor() {
    this.addressBookView = new AddressBookView();
    this.addressBookModel = new AddressBookModel();
  }

  init() {
    this.addressBookModel.init();
    setTimeout(() => {
      let contacts = this.getContacts();
      this.addressBookView.init(contacts);
    }, 50);
    this.addAllListeners();
  }

  addAllListeners() {
    this.addListenersToAddBtns();
    this.addListenersToFormBtns();
    this.addListenerToEditBtn();
    this.addListenerToDeleteBtn();
    this.addListenerToSearch();
    this.addListenerToAddTag();
    this.addListenerToTagForm();
    this.addListenerToTagSelect();
  }

  addListenersToAddBtns() {
    let primaryContainer = document.querySelector('#primary-container');
    primaryContainer.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.classList.contains('addBtn')) {
        this.addressBookView.resetForm();
        this.addressBookView.hideContainer('primary');
        this.addressBookView.showContainer('form');
      }
    });
  }

  addListenersToFormBtns() {
    let form = document.querySelector('#add-form');
    let cancelBtn = document.querySelector('#cancel');
    let submitBtn = document.querySelector('#submit');

    form.addEventListener('click', event => {
      event.preventDefault();
      if (event.target === cancelBtn) {
        this.addressBookView.hideContainer('form');
        this.addressBookView.showContainer('primary');
        form.reset();
      } else if (event.target === submitBtn) {
        this.saveContact(form);
        this.addressBookView.resetForm();
        form.reset();
      }
    });    
  }

  addListenerToEditBtn() {
    let primaryContainer = document.querySelector('#primary-container');
    let form = document.querySelector('#add-form');

    primaryContainer.addEventListener('click', event => {
      if (event.target.classList.contains('editBtn')) {
        let id = event.target.getAttribute('data-id');
        let promise = this.addressBookModel.readContact(id);
        promise.then(json => {
          form.setAttribute('data-id', `${id}`);
          form.setAttribute('method', 'PUT');
          this.addressBookView.populateForm(json);
        });
      }
    });
  }

  addListenerToDeleteBtn() {
    let primaryContainer = document.querySelector('#primary-container');
    primaryContainer.addEventListener('click', event => {
      if (event.target.classList.contains('deleteBtn')) {
        let id = event.target.getAttribute('data-id');
        this.addressBookModel.deleteContact(id);
        this.addressBookView.removeContactFromPage(event.target);
      }
    });
  }

  addListenerToSearch() {
    let search = document.querySelector('#search');
    search.addEventListener('keydown', event => {
      let key = event.key;
      if (key === 'Backspace' || key.length === 1) {
        let text;

        if (key.length === 1) {
          text = search.value + key;
        } else if (key === 'Backspace') {
          text = search.value.slice(0, search.value.length - 1);
        }
        console.log(text);
        let matchingContacts = this.filterAllContacts(text);
        this.addressBookView.renderContacts(matchingContacts);
      }
    });
  }

  addListenerToAddTag() {
    let primaryContainer = document.querySelector('#primary-container');
    primaryContainer.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.classList.contains('addTagBtn')) {
        this.addressBookView.hideContainer('primary');
        this.addressBookView.showContainer('tag');
      }
    });
  }

  addListenerToTagForm() {
    let form = document.querySelector('#tag-form');
    let submitBtn = document.querySelector('#submitTag');
    let cancelBtn = document.querySelector('#cancelTag');

    form.addEventListener('click', event => {
      event.preventDefault();
      if (event.target === submitBtn) {
        this.saveTag(form);
        form.reset();
      } else if (event.target === cancelBtn) {
        this.addressBookView.hideContainer('tag');
        this.addressBookView.showContainer('primary');
        form.reset();
      }
    }); 
  }

  addListenerToTagSelect() {
    let tagSelectContainer = document.querySelector('#tag-select-container');
    let tagInput = document.querySelector('#tags');
    tagSelectContainer.addEventListener('change', event => {
      if (event.target.tagName === 'SELECT') {
        let tag = event.target.value;
        let currentTags = tagInput.getAttribute('value')
                             .split(',')
                             .map(value => {
                               return value.trim();
                             });
        if (!currentTags.includes(tag) && tag) {
          currentTags.push(tag);
        }
        if (currentTags[0] === '') currentTags = currentTags.slice(1);
        tagInput.setAttribute('value', currentTags.join(', '));
      }
    })
  }

  saveTag(form) {
    let tag = form.elements.tag_name.value;
    if (tag) {
      this.addressBookModel.addTag(tag);
    }
  }

  filterAllContacts(string) {
    let re = new RegExp(string, 'i');
    return this.getContacts().filter(({full_name}) => {
      return full_name.match(re);
    });
  }

  formDataToJson(formData) {
    let obj = {};
    for (let entry of formData.entries()) {
      obj[entry[0]] = entry[1];
    }
    return obj;
  }

  saveContact(form) {
    let formData = new FormData(form);
    let data = this.formDataToJson(formData);
    let method = form.getAttribute('method');
    let json;

    if (method === 'POST') {
      json = JSON.stringify(data);
      let promise = this.addressBookModel.createContact(json);
      promise.then(json => {
        this.addressBookView.hideContainer('form');
        this.addressBookView.showContainer('primary');
        this.addressBookView.addContactToPage(json);
      })
    } else if (method === 'PUT') {
      let id = form.getAttribute('data-id');
      data['id'] = id
      json = JSON.stringify(data);
      let promise = this.addressBookModel.updateContact(id, json);
      promise.then(json => {
        this.addressBookView.replaceContactOnPage(json);
        this.addressBookView.hideContainer('form');
        this.addressBookView.showContainer('primary');
      })
    }
  }

  getContacts() {
    return this.addressBookModel.getContacts();
  }
}

document.addEventListener('DOMContentLoaded', event => {
  const addressBookApp = new AddressBookCtrl();
  addressBookApp.init();
});