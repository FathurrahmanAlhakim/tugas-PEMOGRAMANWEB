function validasi() {
  let ce = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
  let cj = /^([1-9]|10)$/;
  let x = document.getElementById("name").value;
  let r = document.getElementById("email").value;
  let t = document.getElementById("jam").value;
  let e = document.getElementById("tujuan").value;
  let y = document.getElementById("jumlah").value;
  if (( x && r && t && e && y ) == null || ( x && r && t && e && y ) == '')
  {
    alert("form tidak boleh kosong");
    return false;
  }
  else if (!ce.test(document.getElementById("email").value)) {
    alert("Format email salah");
    return false;
  }
  else if (!cj.test(document.getElementById("jumlah").value)) {
    alert("Jumlah tiket 1-10");
    return false;
  }
  else {
    document.getElementById("paragraf").innerHTML = ("Nama anda : "+x+"<br>"+"Email anda : "+r+"<br>"+"Jam keberangakatan : "+t+"<br>"+"Tujuan anda : "+e+"<br>"+"Jumlah tiket anda : "+y);
  }
}