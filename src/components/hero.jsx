import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-6/12 flex flex-col justify-center m-auto items-center mt-32">
        <p className="w-4/5 flex flex-col gap-2">
          <span className="light text-6xl ">We Design & Develop </span>

          <span className="medium text-6xl">Remarkable Websites.</span>
        </p>
        <p className="w-4/5 text-center text-base -ml-6 mt-3 book">
          Focuses on building long-term relationships with clients based on trust,
          mutual respect, and shared goals rather than transactional engagements.
        </p>
        <button className="px-7 p-3 rounded-lg medium mt-12" style={{backgroundColor: '#FEF3DD'}}>
          Let's discuss your idea 💡
        </button>

        {/* YouTube Video Embed */}
        <div className="mt-12 w-10/12">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/6_q_LHq85Cs?si=om8lVP3DctC4SreU"
            // title="YouTube video player"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Hero;
