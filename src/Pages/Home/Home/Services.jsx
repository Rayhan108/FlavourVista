import img from '../../../assets/home/chef-service.jpg';

const Services = () => {
  return (
<div className='my-8 md:my-16 mx-auto max-w-screen-lg '>
  <div className='relative'>
    <img src={img} alt="" className='' />
    <div className='absolute md:relative md:-top-64 top-0 left-0 md:w-3/4 md:mx-auto w-full h-full  md:p-8 p-3 bg-white bg-opacity-30 text-center'>
      
        <p className='text-xl md:text-3xl font-mono text-black font-bold '>Flavour Vista</p>
        <p className='text-sm font-mono text-black'>
        Flavour Vista offers a diverse range of restaurant services, catering to various culinary preferences and dining experiences. From casual dining to fine dining, our restaurants aim to provide exceptional food quality, impeccable service, and memorable dining atmospheres.
        </p>
      </div>
    </div>
  </div>


  
  );
};

export default Services;