import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './stranice/home/home'
import Error from './stranice/Error/error'
import Onama from './stranice/onama/onama'
import Proizvodi from './stranice/proizvodi/proizvodi'
import Heder from './stranice/komponente/heder'
import { Switch } from 'react-router/esm/react-router';
import './stranice/proizvodi/proizvodi.css'
import Futer from './stranice/komponente/futer'
import Omiljeno from './stranice/komponente/omiljeno'
import Fav from './stranice/fav/fav'
import Product from './stranice/komponente/product'
import Kupovina from './stranice/komponente/kupovina';

class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    products: [
      {
        name: "klime",
        index: 0,
        data: [
          {
            id: "kl1",
            title: "GREE Klima uređaj Lomo",
            content:
              "Best Buy Wi Fi Inverter 12000 BTU, R410A, A++/A+/A+++(hlađenje/grejanje (srednja zona)/grejanje (srednja zona)/grejanje (topla zona)",
            cena: "52.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5aaa3671929e4.png",
            best:true
          },
          {
            id: "kl2",
            title: "BOSCH Klima uređaj",
            content:
              "Climate 5000 RAC Inverter 12000 BTU, R410A, A++/A+ (hlađenje/grejanje)",
            cena: "49.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5aba15e9daa07.png"
          },
          {
            id: "kl3",
            title: "GREE Klima uređaj Amber",
            content:
              "Premium Inverter WiFi - GWH12YD-S6DBA2A 12000 BTU, Eko gas R32, A+++/A+++ (hlađenje/grejanje)",
            cena: "99.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5aaa3de0e3841.png"
          },
          {
            id: "kl4",
            title: "VIVAX Klima uređaj",
            content: "ACP-24DTIFM70GEEI R410A",
            cena: "37.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5b0bf4f63c6f9.png",
              best:true
          },
          {
            id: "kl5",
            title: "GREE Klima uređaj Viola",
            content:
              "Profi Inverter WiFi GWH12RB-K3DNA3G 12000 BTU, R410A, A++/A+/A++ (hlađenje/grejanje (srednja zona)/grejanje (topla zona)",
            cena: "59.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5922d9917eed1.png"
          },
          {
            id: "kl6",
            title: "VOX klima uređaj",
            content:
              "IVA1-12IR 12000 BTU, Eko gas R32, A++/A+ (hlađenje/grejanje)",
            cena: "34.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5ce5410c4de51.png"
          },
          {
            id: "kl7",
            title: "LG Klima uređaj",
            content:
              "Artcool Inverter A09RK 9000 BTU, R410A, A++/A+ (hlađenje/grejanje)",
            cena: "115.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5afc2645ce08b.png",
              best:true
          },
          {
            id: "kl8",
            title: "LG klima uređaj",
            content:
              "Artcool - AC18BQ 18000 BTU, Eko gas R32, A++/A+ (hlađenje/grejanje)",
            cena: "182.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d1b19bcb7f29.png"
          },
          {
            id: "kl9",
            title: "PANASONIC klima uređaj",
            content: "KIT-Z35-VKE 12000 BTU, Eko gas R32",
            cena: "115.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5cecea95caeef.png"
          },
          {
            id: "kl10",
            title: "SAMSUNG Klima uređaj",
            content:
              "AR18RXFPEWQNEU 18000 BTU, Eko gas R32, A++/A (hlađenje/grejanje)",
            cena: "80.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5cac85531db3b.png"
          }
        ]
      },
      {
        name: "monitori",
        index: 1,
        data: [
          {
            id: "m1",
            title: "AOC LED",
            content: 'C24G1 24 ", VA, 1920 x 1080 Full HD, 1ms',
            cena: "24.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c248e45d9d14.png"
          },
          {
            id: "m2",
            title: "SAMSUNG QLED",
            content:
              'C49HG90 - LC49HG90DMU 48.9", VA, 3840 x 1080 Dual HD, 1ms',
            cena: "109.999",
            img:
              "https://www.gigatron.rs/img/products/large/image59c23c177655c.png"
          },
          {
            id: "m3",
            title: 'LG LED 29"',
            content:
              'UltraWide 29UM69G-B IPS FullHD 29", IPS, 2560 x 1080 UWHD, 5ms',
            cena: "27.999",
            img:
              "https://www.gigatron.rs/img/products/large/image595b99119545b.png"
          },
          {
            id: "m4",
            title: "HP monitor",
            content: '22m 3WL44AA 21.5", IPS, 1920 x 1080 Full HD, 5ms',
            cena: "13.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d9330ba3e18c.png"
          },
          {
            id: "m5",
            title: "HP Z27n G2",
            content: '1JS10A4 27", IPS, 2560 x 1440 WQHD, 5ms',
            cena: "49.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5ad5f58fc791e.png"
          },
          {
            id: "m6",
            title: "PHILIPS LED",
            content: '276E8FJAB/00 27", IPS, 2560 x 1440 WQHD, 4ms',
            cena: "36.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5b928c9a734f3.png"
          },
          {
            id: "m7",
            title: "BENQ LED",
            content:
              "Business Monitor BL2480T 23.8, IPS, 1920 x 1080 Full HD, 5ms",
            cena: "22.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c827954ee514.png"
          },
          {
            id: "m8",
            title: "IIYAMA monitor",
            content:
              'GOLD PHOENIX G-MASTER GB2888UHSU-B1 28", TN, 3840 x 2160 4K UHD, 1ms',
            cena: "59.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5cf4d0f9c5676.png"
          },
          {
            id: "m9",
            title: "SAMSUNG LED CFG70 Zakrivljen",
            content: 'LC27FG73FQUXEN 27", VA, 1920 x 1080 Full HD, 1ms',
            cena: "53.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5ba8b4652554e.png"
          },
          {
            id: "m10",
            title: "LENOVO Legion WLED",
            content:
              "Y44w-10 - 65EARAC1EU 43.4, WVA, 3840 x 1200 DWUXGA, 4ms",
            cena: "153.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d2875b135baa.png",
              best:true
          }
        ]
      },
      {
        name: "misevi",
        index: 2,
        data: [
          {
            id: "mi1",
            title: "REDRAGON gejmerski miš",
            content:
              "Emperor M909-RGB - B07F532TCN Optički, 12400dpi, Ergonomski dizajniran, Crna",
            cena: "3.799",
            img:
              "https://www.gigatron.rs/img/products/large/image5bffccd06e619.png"
          },
          {
            id: "mi2",
            title: "RAZER gejmerski miš",
            content:
              "DeathAdder Elite - RZ01-02010100-R3G1 Optički, 16000dpi, Dizajniran za desnu ruku, Crna",
            cena: "9.999",
            img:
              "https://www.gigatron.rs/img/products/large/image584bfa63d44b1.png"
          },
          {
            id: "mi3",
            title: "HP bežični miš",
            content: "Z3700 (Plavi) - V0L81AA Optički, 1200dpi, 2.4GHz",
            cena: "1.499",
            img:
              "https://www.gigatron.rs/img/products/large/image583ecee3df609.png"
          },
          {
            id: "mi4",
            title: "ASUS gejmerski miš",
            content:
              "TUF GAMING M5 OMRON Switch Aura Sync (Siva) Optički, 6200dpi, Ergonomski dizajniran, Siva",
            cena: "4.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c9c8623eb034.png",
              best:true
          },
          {
            id: "mi5",
            title: "DELL MS116 žični optički miš",
            content:
              "Optički, 1000dpi, Simetričan (pogodan za obe ruke), Crna",
            cena: "1.299",
            img:
              "https://www.gigatron.rs/img/products/large/image5b98c3f4318c6.png"
          },
          {
            id: "mi6",
            title: "ESHARK gejmerski miš",
            content:
              "ESL-M3 Aikuchi (Crni) Optički, 7200dpi, Dizajniran za desnu ruku, Crna",
            cena: "5.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d6396c890aa9.png"
          },
          {
            id: "mi7",
            title: "HAVIT gejmerski miš",
            content: "HV-MS790 (Crna/crvena) Optički, 2400dpi, Crna/Crvena",
            cena: "1.699",
            img:
              "https://www.gigatron.rs/img/products/large/image58eb72674fcb8.png"
          },
          {
            id: "mi8",
            title: "RAPOO gejmerski miš",
            content:
              "V210 (Crni) Optički, 3000dpi, Ergonomski dizajniran, Crna",
            cena: "1.999",
            img:
              "https://www.gigatron.rs/img/products/large/image58edf5847e798.png",
              best:true
          },
          {
            id: "mi9",
            title: "LENOVO gejmerski miš",
            content:
              "M600 (Crna/crvena) - GX30J22781 Optički, 3200dpi, Ergonomski dizajniran, Crna/Crvena",
            cena: "3.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5a2a7fb8e73a9.png"
          },
          {
            id: "mi10",
            title: "APPLE bežični miš",
            content: "Magic Mouse 2 (Sivi) - MRME2ZM/A Simetričan",
            cena: "13.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5ad0981090c0e.png"
          }
        ]
      },
      {
        name: "telefoni",
        index: 3,
        data: [
          {
            id: "t1",
            title: "XIAOMI Redmi Note 7",
            content:
              '64/4GB (Plava - Neptun Blue) - 6.3", 4 GB, 48.0 Mpix + 5.0 Mpix, 64 GB ',
            cena: "25.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5ca5f6a2b346d.png"
          },
          {
            id: "t2",
            title: "HUAWEI Y5 (2019)",
            content:
              '16/2GB DS (Crni - Modern Black) - 51093SGT, 5.71", 2 GB, 13.0 Mpix, 16 GB',
            cena: "13.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d10c39f8cad3.png"
          },
          {
            id: "t3",
            title: "SAMSUNG GALAXY A50",
            content:
              '128/4GB DS (Crna) - SM-A505FZKSSEE, 6.4", 4 GB, 25.0 Mpix + 8.0 Mpix + 5.0 Mpix, 128 GB',
            cena: "37.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5ca33e71676b9.png"
          },
          {
            id: "t4",
            title: "XIAOMI Mi 9 Lite",
            content:
              '6/64 GB Grey (sivi), 6.39", 6 GB, 48 Mpix + 8 Mpix + 2 Mpix, 64 GB',
            cena: "39.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d8c8fe1c8067.png"
          },
          {
            id: "t5",
            title: "XIAOMI Redmi Go",
            content:
              '8/1GB (Crna), 5.0", 1 GB, 8.0 Mpix, 8 GB + POKLON KnowRoaming SIM kartica',
            cena: "8.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c94ca0e3fc9f.png",
              best:true
          },
          {
            id: "t6",
            title: "NOKIA 2.1 DS",
            content:
              '(Plava/Zlatna) - 11E2MX01B03 5.5", 1 GB, 8.0 Mpix, 8 GB',
            cena: "11.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5cb97b0125062.png"
          },
          {
            id: "t7",
            title: "XIAOMI Pocophone F1",
            content:
              '6/128GB DS (Plava) 6.18", 6 GB, 12.0 Mpix + 5.0 Mpix, 128 GB',
            cena: "45.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5cfa359e1d6f0.png"
          },
          {
            id: "t8",
            title: "SAMSUNG GALAXY S10E",
            content:
              '6/128GB G970F (Crvena) - SM-G970FZRDSEE, 5.8", 6 GB, 16.0 Mpix + 12.0 Mpix, 128 GB',
            cena: "69.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d5fc9f461e4b.png",
              best:true
          },
          {
            id: "t9",
            title: "XIAOMI 9T",
            content:
              '64/6 Black (crni) 6.39", 6 GB, 48 Mpix + 13 Mpix + 8 Mpix, 64 GB',
            cena: "46.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d3aae283ce89.png"
          },
          {
            id: "t10",
            title: "HISENSE H30 Lite Infinity",
            content:
              '32/3 GB Blue (plavi) 6.1", 3 GB, 16.0 Mpix + 5.0 Mpix, 32 GB',
            cena: "12.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d2724518c71c.png"
          }
        ]
      },
      {
        name: "kamere",
        index: 4,
        data: [
          {
            id: "k1",
            title: "GOPRO HERO7",
            content:
              "Silver + GOPRO Travel Kit + SANDISK Extreme microSDHC 32GB 10 MP",
            cena: "35.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d4d37ff79ea2.png",
              best:true
          },
          {
            id: "k2",
            title: "GOPRO HERO7",
            content: "Black (+ MicroSD 128GB) - CHDHX-701-RW - CMOS, 12 MP",
            cena: "49.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c3c83991fe42.png"
          },
          {
            id: "k3",
            title: "DJI Osmo Pocket",
            content: "CMOS, 3840 x 2160 (4K), 12 MP",
            cena: "44.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c12794973af1.png"
          },
          {
            id: "k4",
            title: "EKEN H9R",
            content: '- 2", 320 x 240, 3840 x 2160 (4K)',
            cena: "9.999",
            img:
              "https://www.gigatron.rs/img/products/large/image59a02e87b1763.png"
          },
          {
            id: "k5",
            title: "GARMIN GPS VIRB",
            content: 'Ultra 30 1.75", 3840 x 2160 (4K), 12 MP',
            cena: "56.999",
            img:
              "https://www.gigatron.rs/img/products/large/image59a0301f809c7.png",
              best:true
          },
          {
            id: "k6",
            title: "YI Lite",
            content: 'vodootporno kućište, CMOS, 2", 3840 x 2160 (4K), 16 MP',
            cena: "17.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c054de8819b0.png"
          },
          {
            id: "k7",
            title: "EKEN A8",
            content: '(Crna) 2", 176 x 220, 1920 x 1080 (Full HD), 5 MP',
            cena: "3.999",
            img:
              "https://www.gigatron.rs/img/products/large/image580b3ddaec8c2.png"
          },
          {
            id: "k8",
            title: "EKEN H5S",
            content: 'Plus 2", 12 MP, Li-Ion',
            cena: "19.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d47da7e51cc7.png"
          },
          {
            id: "k9",
            title: "GOPRO Fusion",
            content: "CHDHZ-103 CMOS, 5228 x 2624 (5K), 18 MP",
            cena: "42.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5ad4b3b4c1497.png",
              best:true
          },
          {
            id: "k10",
            title: "SONY HDR",
            content: "AS50B CMOS",
            cena: "24.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5718c195d5d31.png"
          }
        ]
      },
      {
        name: "tableti",
        index: 5,
        data: [
          {
            id: "tab1",
            title: "HUAWEI Mediapad T3",
            content: '10" (Siva) 9.6", Četiri jezgra, 2GB, WiFi',
            cena: "17.999",
            img:
              "https://www.gigatron.rs/img/products/large/image597097bf7983e.png"
          },
          {
            id: "tab2",
            title: "SAMSUNG Galaxy Tab A (2019)",
            content: '(Crni) - SM-T510NZKDSEE 10.1", Osam jezgara, 2GB, WiFi',
            cena: "25.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5cbd8bbe46f76.png",
              best:true
          },
          {
            id: "tab3",
            title: "MLS Alu Plus 4G (Srebrna)",
            content: '33.ML.540.163 10.1", Osam jezgara, 2GB, 4G/WiFi',
            cena: "15.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5adab3c7df5ff.png"
          },
          {
            id: "tab4",
            title: "APPLE iPad 6",
            content:
              '9.7" Wifi + Cellular 32GB (Srebrni) - MR6P2HC/A 9.7", Četiri jezgra, 2GB, 4G/WiFi',
            cena: "65.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c5ae37571ffc.png"
          },
          {
            id: "tab5",
            title: "SAMSUNG Galaxy Tab S5e (Zlatni)",
            content: 'SM-T720NZDASEE 10.5", Osam jezgara, 4GB, WiFi',
            cena: "54.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d10aeca11b77.png",
              best:true
          },
          {
            id: "tab6",
            title: "APPLE iPad Air",
            content:
              '10.5" WiFi 64GB (Srebrni - Silver) - MUUK2HC/A 10.5", Šest jezgara, 3GB, WiFi',
            cena: "75.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d8e25a0f1d08.png"
          },
          {
            id: "tab7",
            title: "MEDIACOM SmartPad iyo 10",
            content: 'M-SP1BY 10.1", Četiri jezgra, 2GB, 3G/WiFi',
            cena: "12.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c7cf2ec98aa1.png"
          },
          {
            id: "tab8",
            title: "MEDIACOM SmartPad iyo 7",
            content: 'M-SP1BY 7", Četiri jezgra, 1GB, 3G/WiFi',
            cena: "6.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5c7cfbaa1954c.png",
              best:true
          },
          {
            id: "tab9",
            title: "ESTAR themed tablet HERO SPIDERMAN",
            content: '7" (crvena) 7", Četiri jezgra, 1GB, WiFi',
            cena: "7.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5d1b431537586.png"
          },
          {
            id: "tab10",
            title: "APPLE iPad 6",
            content:
              '9.7" WiFi 32 GB Space Grey (sivi) - MR7F2HC/A, 9.7", Četiri jezgra, 2GB, WiFi',
            cena: "47.999",
            img:
              "https://www.gigatron.rs/img/products/large/image5ad76a3b49378.png",
             
          }
        ]
      }
    ],
    broj : localStorage.getItem("brojProizvoda")
  }
}

ubaci=()=>{
  console.log(this.state.products)
  localStorage.setItem("pr",JSON.stringify(this.state.products))
  var niz = [ this.state.products.map(pr=>pr.data.filter(d=>d.best===true))]
  var niz3 = []

  console.log(niz3)
    // console.log(niz2)
    console.log(niz)
    localStorage.setItem("best",JSON.stringify(niz))
  }

promeniState=()=>{
  console.log("promena izvrsena")
  console.log(localStorage.getItem("brojProizvoda"))
  this.setState({
    broj:localStorage.getItem("brojProizvoda")
  })
}


componentDidMount()
{
  this.ubaci()
}





  render(){
    this.ubaci()

    
  
  return (

    <div className="App">
      <Heder brojPr={this.state.broj}/>
      <div className="naziv">
      <Switch>
      <Route exact path="/" component={Home} />
       <Route exact path="/home" component={Home}/>
       <Route exact path="/onama" component={Onama}/>
       <Route exact path="/proizvodi" render={props=><Proizvodi azuriraj = {this.promeniState} />} />
       <Route exact path="/omiljeno" component={Fav}/>
       <Route exact path="/kupovina" render={props=><Kupovina azuriraj={this.promeniState} />}/>
       <Route exact path="/product/:id" component={Product} />
       <Route component={Error}/>
     </Switch>
     </div>
    <Futer />
    </div>
 
  );
}
}

export default App;
