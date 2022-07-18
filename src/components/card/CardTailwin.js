import React from "react";

const CardTailwin = (props) => {
  const amountClasses = `text-lg text-transparent bg-clip-text font-bold ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  }`;
  return (
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          className="block w-full h-full object-cover rounded-lg"
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
          alt=""
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)] shadow">
        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
              alt=""
            />
            <span className="text-base text-[#333] font-light">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/icon-heart.svg" alt="heart" />
            <span>256</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className={`text-black ${props.fontSize || 'text-lg'} font-meidum`}>Cosmic Perspective</h3>
          <span className={amountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwin;
