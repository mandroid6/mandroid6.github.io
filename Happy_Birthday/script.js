function open_card() {
  document.getElementById('outside').className = 'open-card';
}

function close_card() {
  document.getElementById('outside').className = '';
}

function open_childhood() {
  document.getElementById('inside').className = 'open-card';
  document.getElementById('childhood').className = '';
}

function close_childhood() {
   document.getElementById('childhood').className = 'open-card';
  document.getElementById('outside').className = '';
}

function open_blog() {
  document.getElementById('inside').className = 'open-card';
  document.getElementById('blogs').className = '';
}

function close_blog() {
   document.getElementById('blogs').className = 'open-card';
  document.getElementById('inside').className = '';
}
