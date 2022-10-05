function lejupieladet() {
  let datnesNosaukums = "nosaukums.txt"
  let teksts = "Mans faila saturs!"
  let datne = document.createElement('a');
  datne.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(teksts));
  datne.setAttribute('download', datnesNosaukums);

  datne.style.display = 'none';
  document.body.appendChild(datne);

  datne.click();

  document.body.removeChild(datne);
}
alert(lejupieladet())