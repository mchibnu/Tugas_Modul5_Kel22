import React, { Fragment } from "react";

class Kasir extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      beras: [
        ["Beras Merah 1kg", 65000],
        ["Beras Merah 2kg", 111000],
        ["Beras Ketan 1kg", 51000],
        ["Beras Ketan 2kg", 100000],
        ["Beras Hitam 1kg", 98000],
        ["Beras Hitam 2kg", 115000],
        ["Beras Putih 1kg", 15000],
        ["Beras Putih 2kg", 108000],
        ["Beras Coklat 1kg", 130000],
        ["Beras Coklat 2kg", 500000],
        
      ],
      
      produk: {
        produk1: 0,
        produk2: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { produk1, produk2} = this.state.produk;
    var total = produk1 + produk2;
    this.setState({
      ...this.state.produk,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { produk } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        produk: {
          ...produk,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const {beras, totalTagihan } = this.state;
    return (
      <div style={{ backgroundColor: "#00FFFF", height: "850px"   }}>
        <marquee style={{ fontWeight: "bold" }} bgcolor="#FFFFFF" align ="center" direction ="left" scrollamount="10">PUSAT JUAL BELI BERAS BERKUALITAS HARGA PAS RASA PUAS, KHUSNUL.MART </marquee>
        <div className="titleWrapper">
          <center>
            <p className="judul" style={{ color:"#808080", fontFamily:"Arial", fontWeight: "bold" }}>BELI BERAS</p>
            </center>
        </div>
          <div className="inputWrapper">
            <center>
            <label >Masukkan Nama Beras:</label>
            </center>
            <div>
              <center>
              <input style={{
                   background: "#0000FF",
                   color: "#FFFFFF",
                   margin: "auto",
                   height: "40px",
                   border: "#9254de",
                   fontSize: "15px"
                }}
                placeholder="BERAS"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
            <center>
            <label >JENIS BERAS:</label>
            </center>
            <div>
              <center>
              <input
              style={{
                background: "#0000FF",
                color: "#FFFFFF",
                margin: "auto",
                height: "40px",
                border: "#9254de",
                fontSize: "15px"
              }}
                placeholder="BERAS KETAN ATAU BERAS PUTIH"
                size="50"
                // value={user}
                // onChange={(event) => setUser(event.target.value)}
              />
              </center>
            </div>
          </div>
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="MAKAN-MAKAN">
                <br />
                <center>
                <label >Pilih Beras:    </label>
                <select
                  onChange={this.handleChangeStuff}
                  name="produk1"
                  style={{ cursor: "pointer", background: "#efdbff",
                  color: "#4B0082",
                  margin: "auto",
                  height: "40px",
                  border: "#9254de",
                  fontSize: "15px" }}
                >
                  <option value="0">beras</option>
                  <Fragment>
                    {beras.map((makanan) => {
                      return <option value={makanan[1]}>{makanan[0]}</option>;
                    })}
                  </Fragment>
                </select>
                </center>
                
                <br />
              </div>
              <h3
                style={{
                  color: "#808080",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "auto",
                  fontFamily:"sans-serif",
                  fontStyle:"italic"
                }}
              >
                Total Harga {totalTagihan} 
              </h3>
            </div>
          </div>
        </div>
        </>
        </div>
    );
  }
}

export default Kasir;
