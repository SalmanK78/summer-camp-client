import React from "react";
import { Link } from "react-router-dom";

const Header = ({children,login}) => {
  return (
    <div style={{
            width:'100%',
            height:`${login ? '200px':'300px'}`,
            
            backgroundImage:'url("https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?size=626&ext=jpg&ga=GA1.1.1385022456.1686185341&semt=sph")'
    }}>
      <div style={{
        height:`${login ? '200px':'300px'}`
      }} className='header flex items-center  justify-center flex-col'>
            <h1 className="text-white text-5xl font-bold">{children}</h1>
            <h3 className="font-bold text-lg mt-5"> <Link to={-1} className="text-white hover:text-red-600"> Home </Link> <span className="text-red-600"> //{children}</span></h3>
      </div>
    </div>
  );
};

export default Header;