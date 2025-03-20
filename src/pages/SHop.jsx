import logo1 from "../assets/Mask Group (2).png";
import logo2 from "../assets/Mask Group (3).png";
import "./SHop.css";
function SHop() {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <p>LETEST NEWS</p>
        <h2>From Our Blog</h2>
      </div>

      <div className="blog-container">
        <div className="blog-card">
          <div className="image-box">
            <img src={logo1} alt="Interior Design" />
          </div>
          <div className="blog-content">
            <h3>2020 Interior Design Trends</h3>
            <p>Lorem ipsum dolor sit amet...</p>
            <button className="read-more">CONTINUE READING....</button>
          </div>
        </div>

        <div className="blog-card">
          <div className="image-box">
            <img src={logo2} alt="ARC Interior Design" />
          </div>
          <div className="blog-content">
            <h3>28 Notable Product at ARC Interior Design</h3>
            <p>Lorem ipsum dolor sit amet...</p>
            <button className="read-more">CONTINUE READING....</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SHop;
