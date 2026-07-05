export default function Login() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#00ff66",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          border: "1px solid #00ff66",
          padding: "30px",
          minWidth: "320px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Terminal WebOS</h2>

        <div style={{ marginTop: "20px" }}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
              background: "#111",
              color: "#00ff66",
              border: "1px solid #00ff66",
            }}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "20px",
              background: "#111",
              color: "#00ff66",
              border: "1px solid #00ff66",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "10px",
              background: "#00ff66",
              color: "#000",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
