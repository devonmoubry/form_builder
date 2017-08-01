// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let formHTML = document.getElementById('fields');

for (let i = 0; i < formData.length; i++) {

  if (formData[i].type === 'select') {
    let selectTag = document.createElement('select');
    formHTML.appendChild(selectTag);
    selectTag.setAttribute('type', formData[i].type);
    selectTag.setAttribute('id', formData[i].id);
    selectTag.setAttribute('placeholder', formData[i].label);
    selectTag.setAttribute('value', formData[i].label);

    let options = formData[4].options;

    for (let i = 0; i < options.length; i++) {
      let optionTag = document.createElement('option');
      selectTag.appendChild(optionTag);
      let optionLabel = options[i].label;
      let optionValue = options[i].value;
      optionTag.setAttribute('label', optionLabel);
      optionTag.setAttribute('value', optionValue);
    }

  }

  else if (formData[i].type === 'textarea') {
    let textAreaTag = document.createElement('textarea');
    formHTML.appendChild(textAreaTag);
    textAreaTag.setAttribute('type', formData[i].type);
    textAreaTag.setAttribute('id', formData[i].id);
    textAreaTag.setAttribute('placeholder', formData[i].label);
  }

  else {
    let input = document.createElement('input');
    formHTML.appendChild(input);
    input.setAttribute('type', formData[i].type);
    input.setAttribute('id', formData[i].id);
    input.setAttribute('placeholder', formData[i].label);
  }
}

let selectTag = document.getElementById('user-language');
let optionTag = document.createElement('option');
selectTag.appendChild(optionTag);
optionTag.setAttribute('label', formData[4].label);
optionTag.setAttribute('selected', 'selected');
