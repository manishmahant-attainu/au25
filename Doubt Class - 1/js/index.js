function showPassword(elementId) {
  var element = document.getElementById(elementId)
  if(element.type === 'password') element.type = 'text';
  else element.type = 'password';
}