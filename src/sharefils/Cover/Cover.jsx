import React from 'react';

const Cover = ({img,title}) => {
    return (
        <div>
            <div className="hero h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content  h-[350px] w-[1080px] bg-black bg-opacity-30">
                    <div className="max-w-md text-white ]">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;