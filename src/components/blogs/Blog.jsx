import React from "react";
import "./Blog.scss";
import Estate1 from "../../assets/estate1.png";
import Estate2 from "../../assets/estate2.png";
import Estate3 from "../../assets/estate3.png";
import Date from "../../assets/date.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
  return (
    <div className="blog-bg">
      <div className="blog">
        <div className="h2-wrapper">
          <h2>Blogs</h2>
          <hr />
        </div>
        <div className="blog-container">
          <div className="blog-item">
            <div className="blog-wrapper">
              <img src={Estate1} alt="estate" />
              <p>Real Estate, Analysis</p>
              <div className="admin-info">
                <div className="date">
                  <img src={Date} alt="date" />
                  <p>09 jun 2022</p>
                </div>
                <p>By Admin</p>
              </div>
              <p className="blog-header">Guide for personal property Buying </p>
              <p className="blog-info">
                "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                do eiusmod temp incididuut labore dolore magna aliqua do
                eiusmod...
              </p>
              <div className="blog-button">
                <button>View More</button>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-wrapper">
              <img src={Estate2} alt="estate" />
              <p>Real Estate, Analysis</p>
              <div className="admin-info">
                <div className="date">
                  <img src={Date} alt="date" />
                  <p>09 jun 2022</p>
                </div>
                <p>By Admin</p>
              </div>
              <p className="blog-header">Guide for personal property Buying </p>
              <p className="blog-info">
                "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                do eiusmod temp incididuut labore dolore magna aliqua do
                eiusmod...
              </p>
              <div className="blog-button">
                <button>View More</button>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
          <div className="blog-item">
            <div className="blog-wrapper">
              <img src={Estate3} alt="estate" />
              <p>Real Estate, Analysis</p>
              <div className="admin-info">
                <div className="date">
                  <img src={Date} alt="date" />
                  <p>09 jun 2022</p>
                </div>
                <p>By Admin</p>
              </div>
              <p className="blog-header">Guide for personal property Buying </p>
              <p className="blog-info">
                "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed
                do eiusmod temp incididuut labore dolore magna aliqua do
                eiusmod...
              </p>
              <div className="blog-button">
                <button>View More</button>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
