console.log('Hello world!');

function scrollleft() {
    document.getElementById("titol_euphoria").style.left = '100%';
    setTimeout(scrollleft, 25);
  }
   scrollleft();
