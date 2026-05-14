function showTab(tabId, button) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');

  const buttons = document.querySelectorAll('.tabs button');
  buttons.forEach(btn => btn.classList.remove('active'));

  button.classList.add('active');
}





