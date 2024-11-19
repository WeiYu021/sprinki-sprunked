'use client'

const VideoBlock = ({ title, discription, url }) => {
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
                    {/* Video Player */}
                    <div className="aspect-video relative bg-black max-w-full">
                        <video
                            className="w-full h-full video-player"
                            x5-video-player-type="h5"
                            x-webkit-airplay="true"
                            webkit-playsinline="true"
                            loop
                            muted
                            controls // 添加控制条
                            onPlay={() => console.log('视频开始播放')} // 添加播放事件监听
                            onPause={() => console.log('视频暂停')} // 添加暂停事件监听
                        >
                            <source src={url} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoBlock;