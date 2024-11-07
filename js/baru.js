let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let date = document.getElementById("date");

let course = document.getElementById("course");
let form = document.getElementById("form");
let container = document.querySelector(".container");

let generate = document.getElementById("Generate");
generate.addEventListener("click", (e) => {
  let first_name = fname.value;
  let last_name = lname.value;
  let Date = date.value;
  
  let course_name = course.value;
  e.preventDefault();
  fname.value = "";
  lname.value = "";
  course.value = "";
  date.value = "";
 

  form.style.display = "none";
  container.style.backgroundColor = "white";

  //Random Digits
  a = 1; //Min value
  b = 9; //Max Value
  let rand = a + (b - 1) * Math.random(); //Main Formula
  let rand2 = Math.round(rand);
  c = 1; //Min value
  d = 9; //Max Value
  let rand3 = c + (d - 1) * Math.random(); //Main Formula
  let rand4 = Math.round(rand3);

  let certificate = document.getElementById("certificate");
  certificate.style.display = "block";
  certificate.innerHTML = `<div class="outer">
  <div class="light-br">
      <div class="dark-br">
          <div class="main-content">
              <div class="left-side">
                  <img src="img/LinkedIn left-2.png" alt="">
              </div>
              <div class="right-content">
                  <div class="logo">
                      <img id="logo" src="img/Learning.png" alt="">
                  </div>
                  <div class="congrats">
                      <h2>SERTIFIKAT</h2>
                      <h4>Nomor : ${rand2}/PEL/KOMBEL/2024</h4>
                      <h3>Diberikan kepada :</h3>
                      <br/><br/>
                      <h1> ${first_name} ${last_name}</h1>
                  </div>
                  <div class="course-name">
                      <div class="completion">
                          <h3>Sebagai Peserta <bold>${course_name}</bold> yang diselenggarakan pada tanggal ${Date}</h3>
                          
                  
                      </div>
                  </div>
                  
                  <div class="authority">
                      <div class="part-1">
                          <h3>Kepala Sekolah</h3>
                          <img id="sign" src="img/Sign2.JPG" alt="">
                          <h3>Hj. Eni Haerini, M.Pd</h3>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div
                          class="vl"></div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div
                          class="part-2">
                          <h3>Trainer</h3>
                          <img id="sign" src="img/Sign2.JPG" alt="">
                          <h3>Teguh Wiryanto</h3>
                      </div>
                  </div>
                  <div class="certificate-id">Certificate Id: SMP${rand4}IZ${rand2}a${rand2}rPeUmO_IE${rand4}R${rand4}0L${rand4}ac${rand2}sN</div>
              </div>
          </div>
      </div>
  </div>
  </div>`;
  document.getElementById("download").style.display = "block";
});

//Download PDF

let download = document.getElementById("download");
download.addEventListener("click", () => {
  var opt = {
    margin: 1,
    filename: "Sertifikat-pelatihan.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "px", format: "a2", orientation: "landscape" },
  };

  html2pdf().set(opt).from(certificate).save();
});
