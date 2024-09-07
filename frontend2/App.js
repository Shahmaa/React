import { PiButterflyFill } from "react-icons/pi";
import { MdOutlineSegment } from "react-icons/md";
import "./App.css";
import { BiFontFamily } from "react-icons/bi";
import img1 from "./images/6.jpg";
import img2 from "./images/7.jpg";
import img4 from "./images/8.png";
import img3 from "./images/9.jpg";
import img5 from "./images/10.jpg";
import CheckIcon from "@mui/icons-material/Check";
const App = () => {
  return (
    <div style={{ height: "100vh", padding: 30 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
          paddingBottom: 15,
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <PiButterflyFill
            style={{
              border: "2px solid black",
              borderRadius: 30,
              fontSize: 17,
              marginTop: 1,
              padding: 2,
            }}
          />
          <p style={{ fontSize: 17, fontWeight: "bold", margin: 0 }}>
            /hello@essential.io
          </p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <p style={{ fontSize: 17, fontWeight: "bold", margin: 0 }}>
            Product{" "}
          </p>
          <p style={{ fontSize: 17, fontWeight: "bold", margin: 0 }}>.</p>
          <p style={{ fontSize: 17, fontWeight: "bold", margin: 0 }}>
            Resources
          </p>
          <p style={{ fontSize: 17, fontWeight: "bold", margin: 0 }}>.</p>
          <p style={{ fontSize: 17, fontWeight: "bold", margin: 0 }}>
            Our Work
          </p>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <p style={{ fontSize: 17, fontWeight: "bold", margin: 5 }}>FAQ</p>
          <button
            style={{
              border: "2px solid black",
              borderRadius: "20px",
              backgroundColor: "white",
              padding: 5,
              marginBottom: 5,
              fontWeight: "bold",
              fontSize: 15,
              width: 150,
            }}
          >
            Download API
          </button>
          <MdOutlineSegment style={{ padding: 5, fontSize: 25 }} />
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ border: "0.5px solid black", width: 20 }}></p>
        <p style={{ fontWeight: "bold" }}>API INTEGRATION</p>
        <p style={{ border: "0.5px solid black", width: 20 }}></p>
      </div>
      {/* --------------------------------------------------------------------------------------------------------------------------- */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display',serif",
            fontOpticalSizing: "auto",
            fontWeight: "weight",
            fontStyle: "bold",
            fontSize: 60,
            margin: 0,
          }}
        >
          The Essential Api That Help
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display',serif",
            fontOpticalSizing: "auto",
            fontWeight: "weight",
            fontStyle: "bold",
            fontSize: 60,
            margin: 0,
          }}
        >
          Connecting Team
        </p>
        <p style={{ fontSize: 25 }}>
          A platform delivering ultra-fast dynamic & personalised project
          experiences.
        </p>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------ */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 40,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            height: 200,
            boxShadow: "0 3px 10px rgb(148,136,136)",
            padding: 10,
            borderRadius: "30px",
          }}
        >
          <img src={img1} style={{ width: 200, height: 180 }}></img>
          <p style={{ fontWeight: "bolder", marginTop: 0, marginLeft: 50 }}>
            Group Chat
          </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            height: 200,
            padding: 10,
            borderRadius: "30px",
            boxShadow: "0 3px 10px rgb(148,136,136)",
          }}
        >
          <img src={img2} style={{ width: 200, height: 180 }}></img>
          <p style={{ fontWeight: "bolder", marginTop: 0, marginLeft: 50 }}>
            Instant Mail
          </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            height: 200,
            boxShadow: "0 3px 10px rgb(148,136,136)",
            padding: 10,
            borderRadius: "30px",
          }}
        >
          <img src={img3} style={{ width: 200, height: 180 }}></img>
          <p style={{ fontWeight: "bolder", marginTop: 0, marginLeft: 60 }}>
            File Boat
          </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            height: 200,
            boxShadow: "0 3px 10px rgb(148,136,136)",
            padding: 10,
            borderRadius: "30px",
          }}
        >
          <img src={img4} style={{ width: 200, height: 180 }}></img>
          <p style={{ fontWeight: "bolder", marginTop: 0, marginLeft: 50 }}>
            Call Manage
          </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            height: 200,
            boxShadow: "0 3px 10px rgb(148,136,136)",
            padding: 10,
            borderRadius: "30px",
          }}
        >
          <img src={img5} style={{ width: 200, height: 180 }}></img>
          <p style={{ fontWeight: "bolder", marginTop: 0, marginLeft: 60 }}>
            Teamwork
          </p>
        </div>
      </div>
      <br />
      <br />
      {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            borderRadius: "20px",
            padding: 10,
            backgroundColor: "black",
            color: "white",
          }}
        >
          Get started — It's free
        </button>
      </div>
      <br />
      <br />
      {/*-------------------------------------------------------------------------------------------------------------------------------- */}
      <div style={{ display: "flex", justifyContent: "center", gap: 50 }}>
        <div style={{ display: "flex" }}>
          <CheckIcon />
          <p style={{ marginTop: 0, fontWeight: "lighter" }}>Free Signup</p>
        </div>
        <div style={{ display: "flex" }}>
          <CheckIcon />
          <p style={{ marginTop: 0, fontWeight: "lighter" }}>
            NO Credit Card Requird
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <CheckIcon />
          <p style={{ marginTop: 0, fontWeight: "lighter" }}>Cancel Anytime</p>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------------- */}
      <div
        style={{
          height: 0.5,
          marginTop: 50,
          width: "100%",
          backgroundColor: "black",
        }}
      ></div>
      {/* ------------------------------------------------------------------------------------------------------------------------ */}
      <div>
        <div style={{ backgroundColor: "beige",height:100,width:100 }}></div>
        <div style={{ backgroundColor: "beige",height:100,width:100  }}></div>
        <div style={{ backgroundColor: "beige" }}></div>
        <div style={{ backgroundColor: "beige" }}></div>
        <div style={{ backgroundColor: "beige" }}></div>
      </div>
    </div>
  );
};
export default App;
