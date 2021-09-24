import { useContext, createContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  bar: {
    marginTop: "0px",
  },
  line: {
    height: "10px",
    backgroundColor: "#00FFFF",
  },
  link: {
    textDecoration: "none",
  },
}));

const themes = {
  light: {
    background: "#000080",
    color: "#FFFAFA",
  },
  dark: {
    background: "#0000FF",
    color: "#FFFAFA",
  },
};

const ThemeContext = createContext();

export default function Footer() {
  const classes = styles();
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background}}>
        <Toolbar position="sticky" className={classes.bar}>
          <div >
            <Button className={classes.btn}>
              <Link
                to="/"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                | HOME |
              </Link>
            </Button>

            <Button>
              <Link
                to="/beras"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                | BERAS |
              </Link>
            </Button>
            
            <Button>
              <Link
                to="/kasir"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                | PEMBAYARAN |
              </Link>
            </Button>
            <Button 
              style={{ color: valueTheme.color, fontWeight: "light" }}
              className="Button"
              onClick={() =>
                setValueTheme(
                  valueTheme === themes.light ? themes.dark : themes.light
                )
              }
            >
              MODE GELAP/TERANG
            </Button>
          </div>
        </Toolbar>
        <div className={classes.line}></div>
      </div>
    </ThemeContext.Provider>
  );
}
