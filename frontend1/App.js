import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { BiSolidCircleHalf } from "react-icons/bi";
import img1 from "./img/1.jpg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { useState } from "react";
import Resource from "./Resource";
import Support from "./Support";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Product from "./Product";
const App = () => {
  const handleClick = (value) => {
    setPage(value);
  };
  const [page, setPage] = useState("product");
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        borderTop: "50px solid #F5D769",
        borderLeft: "50px solid #F5D769",
        borderRight: "50px solid #F5D769",
        paddingTop: 25,
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p
            style={{
              color: "white",
              marginBottom: 0,
              borderBottom: "1px solid gray",
              marginLeft: 6,
            }}
          >
            Razor
          </p>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 0 }}>
            <p
              style={{
                color: "#00C094",
                marginTop: 0,
                padding: 5,
                marginLeft: 0,
              }}
            >
              Sales@Razor.uk
            </p>
            <ArrowRightAltIcon style={{ color: "white", marginTop: 7 }} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 50,
            marginTop: 35,
          }}
        >
          <p
            style={{
              color: "white",
              cursor: "pointer",
              margin: 0,
              border: page === "product" ? "2px solid white": "2px solid black",
              display: "flex",
              alignItems: "center",
              height: 30,
              padding: 3,
              borderRadius: "15px",
            }}
            onClick={() => handleClick("product")}
          >
            Product
          </p>
          <p
            style={{
              color: "white",
              cursor: "pointer",
              margin: 0,
              border: page === "resource" ? "2px solid white": "2px solid black",
              display: "flex",
              alignItems: "center",
              height: 30,
              padding: 3,
              borderRadius: "15px",
            }}
            onClick={() => handleClick("resource")}
          >
            Resources
          </p>
          <p
            style={{
              color: "white",
              cursor: "pointer",
              margin: 0,
              border: page === "support" ? "2px solid white": "2px solid black",
              display: "flex",
              alignItems: "center",
              height: 30,
              padding: 3,
              borderRadius: "15px",
            }}
            onClick={() => handleClick("support")}
          >
            Support
          </p>
          <p
            style={{
              color: "white",
              cursor: "pointer",
              margin: 0,
              border: page === "pricing" ? "2px solid white": "2px solid black",
              display: "flex",
              alignItems: "center",
              height: 30,
              padding: 3,
              borderRadius: "15px",
            }}
            onClick={() => handleClick("pricing")}
          >
            Pricing
          </p>
          <p
            style={{
              color: "white",
              cursor: "pointer",
              margin: 0,
              border: page === "blog" ? "2px solid white": "2px solid black",
              display: "flex",
              alignItems: "center",
              height: 30,
              padding: 3,
              borderRadius: "15px",
              width: 50,
              justifyContent: "center",
            }}
            onClick={() => handleClick("blog")}
          >
            Blog
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <p style={{ color: "white" }}>Sign in</p>
          <p
            style={{
              color: "#00C094",
              marginBottom: 58,
              borderBottom: "1px solid #00C094",
            }}
          >
            Request Demo
          </p>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------------------------------- */}
      
      {page === "product" ? (
        <Product />
      ) : page === "resource" ? (
        <Resource />
      ) : page === "support" ? (
        <Support />
      ) : page === "pricing" ? (
        <Pricing />
      ) : page === "blog" ? (
        <Blog devi={setPage} />
      ) : null}
    </div>
  );
};
export default App;
