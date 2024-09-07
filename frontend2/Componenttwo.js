import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 30,
          paddingTop: 30,
          paddingLeft: 45,
          paddingRight: 45,
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex" }}>
          <p
            style={{
              fontWeight: "bold",
              marginTop: 0,
              marginLeft: 0,
              marginBottom: 0,
              marginRight: 10,
            }}
          >
            Lyf_)
          </p>
          <p style={{ margin: 0 }}>isurance@tiropay.au</p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <p
            style={{
              border: "1px solid black",
              backgroundColor: "white",
              borderRadius: "15px",
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              margin: 0,
            }}
          >
            Login
          </p>
          <p
            style={{
              border: "1px solid black",
              backgroundColor: "black",
              color: "white",
              borderRadius: "15px",
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              margin: 0,
            }}
          >
            Get Started
          </p>
          <DragHandleIcon
            style={{
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginBottom: 0,
            marginTop: 10,
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Life Planning, Making
        </p>
        <p style={{ margin: 0, fontSize: 50, fontWeight: "bold" }}>
          Easy to Turn Dreams a Reality.
        </p>
        <p style={{ fontSize: 25 }}>
          Get Exclusive offers on purchase of any plans
        </p>
        <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
          
          <div style={{display:"flex",marginTop: 5,
              marginBottom: 5,}}>
          <SendRoundedIcon style={{marginTop:3,alignItems:"center",position:"fixed",left:625}}/>
            <input style={{
              border: "1px solid black",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",width:350,height:30,paddingLeft:45
            }} placeholder="Your Email"/> 
            </div>
          <button style={{backgroundColor:"black",color:"white",borderRadius:"15px",width:100,height:33,fontSize:15,marginTop:5,marginBottom:5}}>Signup</button>
        </div>
        <div
          style={{
            width: "165vh",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 50,
          }}
        >
          <p style={{ fontSize: 25, fontWeight: "bolder" }}>Feautered Plans</p>
          <p style={{ fontWeight: "bold" }}>Explore All</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",borderBottom:"1px solid black",padding:25,
          gap: 15,
        }}
      >
        <div style={{ backgroundColor: "rgb(85, 176, 130)" ,padding:30,borderRadius:"20px",}}>
          <p style={{fontSize:15,fontWeight:"lighter"}}>STRATEGY</p>
          <p style={{fontSize:25,fontWeight:"bolder"}}>Money Momentum</p>
          <p style={{fontSize:15}}>Tract Premium helps you start saver</p>
          <p style={{fontSize:15,}}>investment insights covering.</p>
          <div style={{borderTop:"1px solid black"}}><p style={{fontSize:15,fontWeight:"lighter"}}>3 yrs CAGR</p></div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <p style={{fontSize:25,fontWeight:"bolder",marginTop:0}}>7.20%</p>
          <ArrowCircleRightOutlinedIcon style={{marginTop:5}}/>
          </div>
        </div>
        <div style={{ backgroundColor: "black",padding:30 ,borderRadius:"20px"}}>
        <p style={{fontSize:15,fontWeight:"lighter",color:"white"}}>PLANS</p>
          <p style={{fontSize:25,fontWeight:"bolder",color:"white"}}>Long-Term</p>
          <p style={{fontSize:15,color:"white"}}>Create a vision.To get started,imagine</p>
          <p style={{fontSize:15,color:"white",marginTop:0}}>your dream life.</p>
          <div style={{borderTop:"1px solid white"}}>
          
          <p style={{fontSize:15,fontWeight:"lighter",color:"white"}}>25 yrs CAGR</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <p style={{fontSize:25,fontWeight:"bolder",color:"white",marginTop:0}}>14.20%</p>
          <ArrowCircleRightOutlinedIcon style={{marginTop:5,color:"white"}}/>
          </div>
        </div>
        <div style={{ backgroundColor: "lavender" ,padding:30,borderRadius:"20px"}}>
        <p style={{fontSize:15,fontWeight:"lighter"}}>STRATEGY</p>
          <p style={{fontSize:25,fontWeight:"bolder"}}>Focussed</p>
          <p style={{fontSize:15}}>Be focussed Life planning, however,can</p>
          <p style={{fontSize:15}}>serve as a roadmap or guide.</p>
          <div style={{borderTop:"1px solid black"}}><p style={{fontSize:15,fontWeight:"lighter"}}>1 yrs returns</p></div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <p style={{fontSize:25,fontWeight:"bolder",marginTop:0}}>11.20%</p>
          <ArrowCircleRightOutlinedIcon style={{marginTop:5}}/> </div>
        </div>
        <div style={{ backgroundColor: "yellow" ,padding:30,borderRadius:"20px"}}>
        <p style={{fontSize:15,fontWeight:"lighter"}}>PLANS</p>
          <p style={{fontSize:25,fontWeight:"bolder"}}>Fixed Income</p>
          <p style={{fontSize:15}}>Get multiple benefits, and lumpsum</p>
          <p style={{fontSize:15}}>option and Guaranteed Returns.</p>
          <div style={{borderTop:"1px solid black"}}><p style={{fontSize:15,fontWeight:"lighter",}}>5 yrs CAGR</p></div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <p style={{fontSize:25,fontWeight:"bolder",marginTop:0}}>8.20%</p> 
          <ArrowCircleRightOutlinedIcon style={{marginTop:5}}/></div>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",paddingLeft:30,paddingRight:30}}>
      <div style={{display:"flex",width:500,justifyContent:"space-between"}}>
        <p style={{fontSize:18,fontWeight:"inherit"}}>Terms Policy</p>
        <p style={{fontSize:20,fontWeight:"bolder",marginTop:10}}>.</p>
        <p style={{fontSize:18,fontWeight:"inherit"}}>Customer Story</p>
      </div>
      <ArrowCircleRightOutlinedIcon style={{marginTop:17}}/>
      </div>
    </div>
  );
};
export default App;
