import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import { Fade } from "react-awesome-reveal";

const Section = () => {
  return (
    <div style={{
        backgroundImage:'url("https://wallpaperaccess.com/full/5826.jpg")'
    }}
     className="featured-item bg-fixed text-white pt-8 my-20">
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 lg:px-36">
                <div className="md:ml-10 text-center">
                    <p className="text-yellow-500 font-serif text-2xl">learn our camping</p>
                    <Fade>
                    <h2 className="text-4xl">VIRTUAL CAMPING TOUR</h2>
                    </Fade>
                    <p>Summer camp is a program for children or teens during summer months in many countries. Children and adolescents are called campers.</p>
                    <img src="https://www.itl.cat/pngfile/big/301-3012208_camping-wallpaper-camping-hd-camping-in-virginia.jpg" alt="" />
                </div>
            </div>
        </div>
  );
};

export default Section;