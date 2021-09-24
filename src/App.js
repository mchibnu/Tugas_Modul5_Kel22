import { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import handphoneImage from "./images/home.jpg";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BorderAllOutlined } from "@material-ui/icons";
import "./App.css";

const styles = makeStyles((theme) => ({

}));
const themes = {
  light: {
    background: "#00FFFF",
    color: "#808080",
    backgroundSize: "100%",
  },
  dark: {
    background: "#00FFFF",
    color: "#808080",
    backgroundSize: "100%",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();

  const [valueTheme, setValueTheme] = useState(themes.light);
  const theme = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  return (
    <body>
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background, backgroundSize: "10%"  }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="#FFFFFF" align ="center" direction ="left" scrollamount="10">  KHUSNU.MART {valueInput.name} PUSAT JUAL BELI BERAS BERKUALITAS, SING PENTING KENYANG, DIRECTED BY KELOMPOK 22, KHUSNUL DAN IBNU</marquee>
 
    
            <button
                className="button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }
              >
              <FontAwesomeIcon icon={faHome} />
              </button>
            
          <center>
          <div className="judul">
             <h2 className="judul" style={{ color:"#808080", fontFamily:"Arial", fontWeight: "bold" }}>KHUSNU.MART</h2>
            <h6 className="ISI" style={{ color:"##0000FF", fontFamily:"Arial", fontWeight: "bold" }}>PUSAT JUAL BELI BERAS BERKUALITAS</h6>
            <h6>BISA DICEK DULU BERASNYA</h6>
            <div className="gambar">
              <center>
             
                <img src={handphoneImage} style={{ height: "600px"  }} />
             
              </center>
            </div>
          </div>
          </center>
          <marquee style={{ fontWeight: "bold" }} bgcolor="#FFFFFF" align ="center" direction ="left" scrollamount="10"> PUSAT BERAS BERKUALITAS HARGA PAS DAN RASA PUAS</marquee>
          </div>
          <h2>
          </h2>
    </ThemeContext.Provider>
    </body>
  );
}
