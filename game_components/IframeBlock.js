'use client'

const IframeBlock = ({title, discription, url}) => {
  return (
    <section className="relative flex flex-row justify-center items-start min-h-screen mx-auto border-t border-b border-gray-300">
      <div className="text-justify p-8 mt-4"> {/* 增加 mt-16 来设置顶部间距 */}
        <div className="flex flex-col justify-start items-center p-8 lg:p-0">
          <h2 className="font-bold text-2xl md:text-4xl tracking-wide mb-4 md:mb-8">
            {title}
          </h2>
          <p className="text-lg opacity-80 mb-6 md:mb-10">
            {discription}
          </p>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 宽高比 */}
            <iframe
              id="game-frame"
              src = {url}
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <button 
            onClick={() => document.getElementById('game-frame').requestFullscreen()}
            className="mt-4 px-6 py-2 btn-gradient"
          >
            FullScreen
          </button>
        </div>
      </div>
    </section>
  );
};

export default IframeBlock;
