import { Mail, Person } from "@mui/icons-material";
import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Bakpu55
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>Tel. 095-165-8365</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>bakpu11@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamberger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
