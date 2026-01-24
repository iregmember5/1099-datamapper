export function InformationPage() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", margin: 0 }}>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 41, 38, 0.7), rgba(30, 41, 38, 0.7)), url(/wp-1099.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "4rem 2rem",
        }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "3px",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
            fontWeight: "400",
            opacity: 0.9,
          }}
        >
          DEMO WEBSITE
        </p>
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: "700",
            margin: 0,
            lineHeight: 1.1,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Information
          <br />
          Page
        </h1>
      </div>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 2rem",
          backgroundColor: "#ffffff",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#1a1a1a",
            marginBottom: "2rem",
            fontWeight: "600",
          }}
        >
          Welcome to the Demo Website Information Page
        </h2>
        <div
          style={{
            color: "#374151",
            fontSize: "1.05rem",
            lineHeight: "1.8",
          }}
        >
          <p>This is the information page for the demo website. Here you can find details about our platform and services.</p>
          <p>Our platform offers comprehensive solutions for your business needs including document management, e-signature capabilities, and much more.</p>
        </div>
      </div>
    </div>
  );
}