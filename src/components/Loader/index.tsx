const Loader = ({loading}:any) => {
    let circleCommonClasses = 'h-5 w-5 bg-primary rounded-full';

    return (
        loading?<div className='flex fixed justify-center items-center z-50 w-screen h-screen bg-orange-100 opacity-60 '>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>:<></>
    );
};

export default Loader;