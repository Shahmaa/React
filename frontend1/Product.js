import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { BiSolidCircleHalf } from "react-icons/bi";
import img1 from "./img/1.jpg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { useState } from "react";
const Product = () =>
{
    return(<div><div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 30,
            justifyContent: "center",
            marginTop: 0,
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: 60,
              fontWeight: "bold",
              marginBottom: 0,
              marginTop: 25,
            }}
          >
            Razor
          </p>
          <p
            style={{
              color: "grey",
              fontSize: 60,
              fontWeight: "bold",
              marginBottom: 0,
              marginTop: 25,
            }}
          >
            AdWords
          </p>
          <p
            style={{
              color: "white",
              fontSize: 60,
              fontWeight: "bold",
              marginBottom: 0,
              marginTop: 25,
            }}
          >
            Earn
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: 0,
          }}
        >
          <p
            style={{
              color: "gray",
              fontSize: 25,
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            Generating Quality Traffic From Top Sites and Reach 500M+
          </p>
          <p style={{ color: "gray", fontSize: 25, margin: 0 }}>
            Daily Active Users. Reach Target Audiences
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 60,
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: 30,
              borderRadius: "20px",
              padding: 10,
              backgroundImage:
                " linear-gradient(135deg,rgba(0, 192, 148, 1),rgba(207, 172, 15, 1))",
            }}
          >
            <p style={{ color: "white", margin: 0 }}>Get Started</p>
            <ArrowRightAltIcon style={{ color: "white" }} />
          </div>
          <div style={{ display: "flex", marginTop: 30, padding: 10 }}>
            <p style={{ color: "white", margin: 0 }}>See Pricing</p>
            <ArrowRightAltIcon style={{ color: "white" }} />
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        {/* main main */}
        <div style={{ display: "flex", gap: 25, height: 325 }}>
          {/* main */}

          <div>
            <p
              style={{
                color: "gray",
                fontSize: 20,
                marginBottom: 5,
                display: "flex",
                justifyContent: "right",
              }}
            >
              upto
            </p>
            <p
              style={{
                color: "white",
                fontSize: 40,
                margin: 0,
                fontWeight: "bold",
                display: "flex",
                justifyContent: "right",
              }}
            >
              10%
            </p>
            <p
              style={{
                color: "gray",
                fontSize: 20,
                marginTop: 5,
                display: "flex",
                justifyContent: "right",
              }}
            >
              Discount on Crypto
            </p>
            <p
              style={{
                color: "white",
                display: "flex",
                justifyContent: "right",
              }}
            >
              Bank Account-
            </p>
            <p
              style={{
                color: "white",
                display: "flex",
                justifyContent: "right",
              }}
            >
              Credit Cards-
            </p>
            <p
              style={{
                color: "white",
                display: "flex",
                justifyContent: "right",
              }}
            >
              Crypto/Coin-
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#00C094",
              borderRadius: "30px",
              padding: 20,
              width: 160,
              marginBottom: 20,
            }}
          >
            {/* first sub */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img src={img1} style={{ width: 50, height: 50 }}></img>
              <p style={{ fontSize: 20, fontWeight: "bold" }}>05/22</p>
            </div>
            <br />
            <div style={{ marginTop: 15 }}>
              <p style={{ margin: 0, cursor: "pointer" }}>
                Balance
              </p>
              <p style={{ fontSize: 35, fontWeight: "bold", margin: 0 }}>
                23,890
              </p>
            </div>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 18,
              }}
            >
              <p style={{ margin: 0 }}>★★★★</p>
              <p style={{ margin: 0 }}>3667</p>
              <FaSquareLetterboxd style={{ marginTop: 3 }} />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}
        <div style={{ display: "flex", marginTop: 130, gap: 25 }}>
          {/* main */}

          <div
            style={{
              backgroundColor: "#F5D769",
              borderRadius: "30px",
              width: 210,
              height: 325,
            }}
          >
            {/* first sub */}
            <div>
              <BiSolidCircleHalf
                style={{ fontSize: 30, marginLeft: 5, marginTop: 15 }}
              />
            </div>
            <br />
            <br />
            <div>
              <p style={{ marginLeft: 15, marginBottom: 0 }}>TotalViews</p>
              <p
                style={{
                  marginLeft: 15,
                  fontSize: 40,
                  fontWeight: "bold",
                  marginTop: 0,
                }}
              >
                332,456
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 0,
                  marginTop: 15,
                  gap: 0,
                }}
              >
                <p style={{ marginLeft: 15, marginBottom: 7, marginTop: 15 }}>
                  +7%
                </p>
                <ArrowDropUpIcon style={{ marginTop: 15 }} />
              </div>
              <p style={{ marginLeft: 15, marginTop: 0 }}>Growth Last Week</p>
            </div>
          </div>

          <div>
            <p
              style={{
                color: "gray",
                fontSize: 20,
                marginBottom: 5,
                display: "flex",
                justifyContent: "left",
              }}
            >
              upto
            </p>
            <p
              style={{
                color: "white",
                fontSize: 40,
                margin: 0,
                fontWeight: "bold",
                display: "flex",
                justifyContent: "left",
              }}
            >
              30%
            </p>
            <p
              style={{
                color: "gray",
                fontSize: 20,
                marginTop: 5,
                display: "flex",
                justifyContent: "left",
              }}
            >
              Growth on Business
            </p>
            <p
              style={{
                color: "white",
                display: "flex",
                justifyContent: "left",
              }}
            >
              -Easy to Link Account
            </p>
            <p
              style={{
                color: "white",
                display: "flex",
                justifyContent: "left",
              }}
            >
              -Simple Tracking
            </p>
            <p
              style={{
                color: "white",
                display: "flex",
                justifyContent: "left",
              }}
            >
              -24/7 Support
            </p>
          </div>
        </div>
      </div></div>)
}
export default Product;