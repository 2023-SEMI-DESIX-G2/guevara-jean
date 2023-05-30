const sb = document.querySelector('#typeShear')
sb.onclick = (event) => {
    event.preventDefault();
    function disableTxt() {
    document.getElementById("buscador").disabled = true;
  }
  function undisableTxt() {
    document.getElementById("buscador").disabled = false;
  }
  console.log(sb.selectedIndex)
    if(sb.selectedIndex == 0)
    disableTxt()
    if(sb.selectedIndex == 1)
    undisableTxt()
    if(sb.selectedIndex == 2)
    undisableTxt()
}