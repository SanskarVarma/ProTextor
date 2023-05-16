import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{background:'grey'}} >
      <p style={{textAlign:'center'}}>SANSKAR VARMA(CSE UNDERGRAD @BITP) ⓒ {year}<br></br>
      <a style={{textAlign:'center'}} class="btn" href="mailto:s.varma2804@gmail.com" >Give Suggestions</a>
      </p>
    </footer>
  );
}

export default Footer;