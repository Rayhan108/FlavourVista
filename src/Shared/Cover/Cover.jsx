

const Cover = ({ img, title, details }) => {
  return (
  
    <div className="hero md:h-[500px] h-[300px]" style={{backgroundImage: `url("${img}")`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
        <p className="mb-5 uppercase">{details}</p>
     
      </div>
    </div>
  </div>
   
  );
};

export default Cover;
