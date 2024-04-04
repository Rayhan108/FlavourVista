
const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="md:w-4/12 w-7/12 my-8 mx-auto text-center" >
            <p className="text-yellow-400 mb-3 text-xl "> --- {subHeading} ---</p>
            <p className="text-4xl font-bold font-mono border-y-4 border-amber-500 uppercase">{heading}</p>
        </div>
    );
};

export default SectionTitle;