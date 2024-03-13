function openbox(burger){
  display = document.getElementById('burger').style.display;
  if(display == 'none'){
    document.getElementById('burger').style.display = 'flex';
  }
  else{
    document.getElementById('burger').style.display = 'none'
  }
}

function closebox(filtrs){
  display = document.getElementById('filtrs').style.display;
  if(display == 'block'){
    document.getElementById('filtrs').style.display = 'none';
    document.getElementById('filtrsclose').style.display='block';
  }
  else{
    document.getElementById('filtrs').style.display = 'block'
    document.getElementById('filtrsclose').style.display='none';
  }
}