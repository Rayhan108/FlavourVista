

const Button = ({text}) => {
    return (
        <div className="text-center mb-5">
            <button className=" border-amber-500 p-2 border-b-4 rounded-lg btn-outline  text-amber-500 max-w-fit">{text}</button>
        </div>
    );
};

export default Button;