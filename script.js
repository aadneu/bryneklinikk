let homepage = document.getElementById("homepage");

viewPage();
function viewPage() {
  homepage.innerHTML = /*HTML*/ `


    <div id='page'>
        <div id='header'>BRYNEKLINIKKEN</div>
        <div id='meny'>
            
            <div onclick='hjem()'>Hjem</div>
            <div onclick='omOss()'>Om oss</div>
            <div onclick='behandlinger()'>Behandlinger</div>
            <div onclick='priser()'>Priser</div>
            <div onclick='bedrift()'>Bedrift</div>
            <div onclick='kontakt()'>Kontakt</div>
        </div>
        <div id='left'></div>
        <div id='right'></div>
        <div id='innhold'>
            <div id='avsnitt'>
                
        </div>
        </div>
        <div id='footer'>TAKK FOR BESØKET</div>
        `;
  omOss();
}

function hjem() {
  document.getElementById("avsnitt").innerHTML = "Startsiden for klinikken";
}
function omOss() {
  document.getElementById("avsnitt").innerHTML = /*HTML*/ `
    <div id='omoss'>
    <div id='omoss-innhold'>
        <img id='bildeådne' src="img/adne.jpg">
     </div>
        <div id='omoss-innhold'>
            Masse tekst om ÅDne her enda lengre utasdasasdasddasd <br>
            Masse tekst om ÅDne her <br>
            Masse tekst om ÅDne her <br>
            Masse tekst om ÅDne her <br>
        </div>
        <div id='omoss-innhold'>
            <img id='bildemarthe' src="img/marthe.jpg">
        </div>
        <div id='omoss-innhold'>
            Masse tekst om Marthe her
        </div>
    </div>
     `;
}
function behandlinger() {
  document.getElementById("avsnitt").innerHTML = "Behnaldinger";
}
function priser() {
  document.getElementById("avsnitt").innerHTML = "priser";
}
function bedrift() {
  document.getElementById("avsnitt").innerHTML = "bedrift";
}
function kontakt() {
  document.getElementById("avsnitt").innerHTML = "kontakt";
}
