"use client";

import { useState, useEffect, useRef } from "react";

// List of features to display:
// - name: name of the feature
// - description: description of the feature (can be any JSX)
// - svg: icon of the feature
const features = [
    {
        name: "Getting Started",
        description: (
            <>
                <ul className="space-y-1">
                    {[
                        "Play online at platforms like sprunki.com，sprunki.org, incrediboxsprunki.com or incrediboxsprunki.org.",
                        "Simply visit the site and click the play button to begin your musical journey!",
                        "The game features a drag-and-drop interface for selecting characters and sound icons.",
                        "Each character represents a different sound or musical element.",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>


                            {item}
                        </li>
                    ))}
                </ul>
            </>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
        ),
    },
    {
        name: "Gameplay Mechanics",
        description: (
            <>
                <ul className="space-y-2">
                    {[
                        "Select from the vibrant Sprunki crew.",
                        "Each character contributes unique sounds to your mix, including beats, melodies, and effects.",
                        "Drag sound icons onto characters to assign them sounds.",
                        "Watch as characters animate and perform their respective sounds.",
                        "Experiment with different combinations to create your desired musical piece.",
                        "Discover bonus animations through certain sound combinations.",
                        "Add an extra layer of fun and discovery to your music-making process!",
                        "Save your tracks and share them with friends or the online community.",
                        "Get feedback and inspire others with your creativity!",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>


                            {item}
                        </li>
                    ))}
                </ul>
            </>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
            </svg>

        ),
    },
    {
        name: "Tips for Success",
        description: (
            <>
                <ul className="space-y-2">
                    {[
                        "Experiment Freely: Try out different combinations of sounds without hesitation.",
                        "Follow Tutorials: Watch tutorials on platforms like YouTube for insights into effective mixing strategies.",
                        "Engage with the Community: Join forums or social media groups dedicated to Sprunki  Incredibox to share your mixes and collaborate.",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>


                            {item}
                        </li>
                    ))}
                </ul>
            </>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>

        ),
    },
    {
        name: "Educational Value",
        description: (
            <>
                <ul className="space-y-2">
                    {["Sprunki Incredibox serves as an engaging tool for learning about  music creation.",
                        "Explore musical concepts in a fun environment, regardless of your skill level!"].map(
                            (item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>


                                    {item}
                                </li>
                            )
                        )}
                </ul>
            </>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
        ),
    },
    {
        name: "Conclusion",
        description: (
            <>
                <ul className="space-y-2">
                    {[
                        "Start your musical journey today and unleash your creativity with Sprunki Incredibox! ",
                        "Craft unique beats, share them with fellow music lovers, and enjoy this vibrant platform for music creation.",
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>


                            {item}
                        </li>
                    ))}
                </ul>
            </>
        ),
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
            </svg>
        ),
    },
];

// A list of features with a listicle style.
// - Click on a feature to display its description.
// - Good to use when multiples features are available.
// - Autoscroll the list of features (optional).
const GamePlay = () => {
    const featuresEndRef = useRef(null);
    const [featureSelected, setFeatureSelected] = useState(features[0].name);
    const [hasClicked, setHasClicked] = useState(false);

    // (Optional) Autoscroll the list of features so user know it's interactive.
    // Stop scrolling when user scroll after the featuresEndRef element (end of section)
    // emove useEffect is not needed.
    useEffect(() => {
        const interval = setInterval(() => {
            if (!hasClicked) {
                const index = features.findIndex(
                    (feature) => feature.name === featureSelected
                );
                const nextIndex = (index + 1) % features.length;
                setFeatureSelected(features[nextIndex].name);
            }
        }, 5000);

        try {
            // stop the interval when the user scroll after the featuresRef element
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        console.log("STOP AUTO CHANGE");
                        clearInterval(interval);
                    }
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0.5,
                }
            );
            if (featuresEndRef.current) {
                observer.observe(featuresEndRef.current);
            }
        } catch (e) {
            console.error(e);
        }

        return () => clearInterval(interval);
    }, [featureSelected, hasClicked]);

    return (
        <section className="p-10 border-t border-b border-gray-300" id="gameplay">
            <div className="mx-auto">
                <div className="bg-base-100 max-md:px-8">
                    <h2 className="font-extrabold text-2xl tracking-tight mb-8">
                        {/* 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it? */}
                        How to Play Sprunki Incredibox
                    </h2>
                    <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
                        {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
                        Sprunki Incredibox is an exciting fan-made mod of the original Incredibox game.
                        Create unique music mixes using various characters and sounds!
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-4 md:flex md:flex-row justify-between gap-4 md:gap-12 max-md:px-8 mx-auto mb-8">
                    {features.map((feature) => (
                        <span
                            key={feature.name}
                            onClick={() => {
                                if (!hasClicked) setHasClicked(true);
                                setFeatureSelected(feature.name);
                            }}
                            className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
                        >
                            <span
                                className={`duration-100 ${featureSelected === feature.name
                                    ? "text-primary"
                                    : "text-base-content/30 group-hover:text-base-content/50"
                                    }`}
                            >
                                {feature.svg}
                            </span>
                            <span
                                className={`font-semibold text-sm ${featureSelected === feature.name
                                    ? "text-primary"
                                    : "text-base-content/50"
                                    }`}
                            >
                                {feature.name}
                            </span>
                        </span>
                    ))}
                </div>
                <div className="bg-base-200">
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
                        <div
                            className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 = animate-opacity"
                            key={featureSelected}
                        >
                            <h3 className="font-semibold text-base-content text-lg">
                                {features.find((f) => f.name === featureSelected)["name"]}
                            </h3>

                            {features.find((f) => f.name === featureSelected)["description"]}
                        </div>
                    </div>
                </div>
            </div>
            {/* Just used to know it's the end of the autoscroll feature (optional, see useEffect) */}
            <p className="opacity-0" ref={featuresEndRef}></p>
        </section>
    );
};

export default GamePlay;
