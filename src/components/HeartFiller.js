import React, { useState } from 'react';

function HeartFiller({  startAnimation }) {
  const [filledHearts, setFilledHearts] = useState(0);
  const [isFilling, setIsFilling] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  const [showButton, setShowButton] = useState('inline');

  const startFilling = () => {
    setButtonText('Loading...')
    setIsFilling(true);
    const interval = setInterval(() => {
        setFilledHearts(prevFilledHearts => {
            const nextFilledHearts = prevFilledHearts + 1;
            if (nextFilledHearts === 10) {
                setButtonText(`Click Me!`)
                setShowButton('hidden')
                clearInterval(interval);
                setIsFilling(false);
            }
            return nextFilledHearts;
            });
        }, 1000);
    };

    const handleAlternativeButtonClick = () => {
            startAnimation();
    }

  return (
    <div>
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center flex-nowrap items-center">
                {[...Array(10)].map((_, index) => (
                <span key={index} className="">
                    {/* Fill SVG */}
                    <svg className={`w-8 h-8 fill-[#FF97B7] transition-width duration-200 ease-in-out ${index >= filledHearts ? 'scale-0 w-0' : 'scale-100 w-full'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="none"
                    >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </span>
                ))}
            </div>
            <div>
                <p className="text-pink font-bold text-center counter text-2xl">
                    {filledHearts}/10
                </p>
                {filledHearts < 10 ? (
                    <div>
                        <button
                        onClick={startFilling}
                        disabled={isFilling}
                        className={`${showButton} flex-initial mt-4 bg-[#FF97B7] hover:bg-[#FFCAD4] w-52 text-4xl py-5 text-center align-middle text-white font-bold rounded-xl transform transition-transform duration-500 hover:-translate-y-2 cursor-pointer`}
                        >
                        {buttonText}
                        </button>
                    </div>
                ) : (
                    <div>
                        <button
                        onClick={handleAlternativeButtonClick}
                        className='flex-initial mt-4 bg-[#FF97B7] hover:bg-[#FFCAD4] w-52 text-4xl py-5 text-center align-middle text-white font-bold rounded-xl transform transition-transform duration-500 hover:-translate-y-2 cursor-pointer'
                        >
                            {buttonText}
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}

export default HeartFiller;
