import React from "react";

const hashnode = "https://instagram.com/hardik_deswal?igshid=OGQ5ZDc2ODk2ZA==";

function Footer() {
  return (
    <div className="footer">
      <p>App by Hardik & Bhupesh</p>
      <p>
        Follow On{" "}
        <strong>
          <a href={hashnode} rel="noreferrer" target="_blank">
            Instagram
          </a>
        </strong>
      </p>
    </div>
  );
}

export default Footer;
