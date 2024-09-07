const Blog = ({devi}) => {
  const handleClick = () => {
    devi("product");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",flexDirection:"column"
      }}
    >
      <p style={{ color: "white", fontSize: 100, fontWeight: "bolder" }}>
        Blog
      </p>
      <p
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bolder",
          cursor: "pointer",border: devi === "product"? "1px solid white" : "1px solid black" 
        }}
        onClick={handleClick}
      >
        Go Back
      </p>
    </div>
  );
};
export default Blog;
