const Footer = (props) => {
  const styling = {
    textAlign: "center",
    color: "white",
    opacity: "25%",
    fontSize: "12px",
  };
  return (
    <footer className="fixed-bottom">
      <p style={styling}>&copy; 2022 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
