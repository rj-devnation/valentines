import React, { useState, useRef, useEffect } from "react";
import Person from '../components/Person.js'
import HeartFiller from "../components/HeartFiller.js";
import '../App.css'

function Home(){
    const [showContent, setShowContent] = useState(false);
    const [isSlideRight, setIsSlideRight] = useState(false);
    const [isValentine, setIsValentine] = useState(false);
    const [yesSize, setYesSize] = useState(16);
    const [buttonWidth, setButtonWidth] = useState(52); // Initial width of the "Yes" button
    const [buttonHeight, setButtonHeight] = useState(72); // Initial width of the "Yes" button
    const [noSize, setNoSize] = useState(16);
    const [noButtonWidth, setNoButtonWidth] = useState(52); // Initial width of the "Yes" button
    const [noButtonHeight, setNoButtonHeight] = useState(72); // Initial width of the "Yes" button
    const buttonRef = useRef(null);
    const noButtonRef = useRef(null)
    const [noCount, setNoCount] = useState(0)
    const [showYes, setShowYes] = useState(false)

    const handleStartButtonClick = () => {
        setShowContent(true);
    };


    const startAnimation = () => {
        setIsSlideRight(true);
        console.log(`isSlideRight = ${isSlideRight}`)
    }

    const handleValentine = () => {
        setIsValentine(true);
        console.log(`isValentine = ${isValentine}`)
    }

    const handleYes = () => {
        setShowYes(true)
    }

    const handleRejection = () => {
        setNoCount(prevCount => prevCount + 1)
        // No Button
        setNoSize(prevSize => prevSize - 2)
        setNoButtonHeight(prevHeight => prevHeight - 10)
        setNoButtonWidth(prevWidth => prevWidth - 10)

        // Yes Button
        setButtonHeight(prevHeight => prevHeight + 10)
        setButtonWidth(prevWidth => prevWidth + 10)
        setYesSize(prevSize => prevSize + 2)
    }

  return (
    <div className="flex justify-center items-center lg:w-[1500px] mx-auto">
        <div className={`transition-all duration-[2000ms] ease-in-out ${showContent ? 'opacity-100 translate-y-0' : 'm-96'}`}>
        {!showContent && (
            <div className="relative bottom-24 lg:bottom-0">
                <button onClick={handleStartButtonClick} className="bg-[#FF97B7] hover:bg-[#FFCAD4] md:w-72 text-2xl md:text-5xl px-10 py-5 text-white font-bold rounded-xl transform transition-transform duration-500 hover:-translate-y-5">
                    Open
                </button>
            </div>
        )}
        {showContent && (
          <div className="md:mt-4 w-screen">
            <h2 className='md:text-center px-10 sm:text-center text-3xl leading-relaxed md:text-5xl md:leading-[65px] text-pink py-2 pb-5 rounded-full md:mt-10 mx-auto md:mx-20'>
            Love Compatibility
            </h2>
            <div className={`w-full flex flex-col ${isSlideRight ? '' : 'md:flex-row'} justify-between px-10 md:px-4 md:mx-auto lg:px-96`}>
                <Person name='Carmela Lamsen' className={`${showYes ? 'hidden' : ''} px-4 md:mt-32 ${isSlideRight ? 'lg:transform lg:transition-transform lg:duration-1000 md:translate-x-full lg:translate-x-96 md:mt-8' : ''}`}/>
                <div id="chart" className={`${isValentine ? 'hidden' : ''} md:mx-auto md:max-w-[489px] px-5 pt-5 mb-4 pb-4 counter card-bg darker-pink tracking-[0.25em] font-semibold w-full mt-8 md:mt-6 shadow-lg rounded-lg ${isSlideRight ? 'fade-in-animation fade-in slide-up md:mt-12 block' : 'hidden'}`}>
                    <h3 className="md:text-center leading-relaxed text-lg md:text-2xl">Compatibility Chart</h3>
                    <div className="text-[13px] md:text-lg tracking-wide lato">
                        <p className="pt-3 md:pt-8">Compatibility: 10/10</p>
                        <p className="md:pt-3">Lovable: 10/10</p>
                        <p className="md:pt-3">Marriage: High</p>
                        <p className="md:pt-3  leading-normal text-wrap">
                            Reasons to love you: loving, caring, loves unconditionally, weird af, understands you, cute smile, amazing cuddler
                        </p>
                        <p className="md:pt-3">Laugh: Like a seal</p>
                        <button onClick={handleValentine} className={`md:relative md:bottom-[500px] md:left-[530px] py-6 px-8 counter w-full bg-[#FF97B7] text-white hover-darker-pink hover:bg-[#FFCAD4] tracking-[0.25em] font-semibold text-2xl mt-3 shadow-lg rounded-lg md:transform md:transition-transform md:duration-500 md:hover:-translate-y-5 ${isSlideRight ? 'md:fade-in-animation md:fade-in md:slide-up md:block ' : ' hidden '}`}>
                            Next
                        </button>
                    </div>
                </div>
                {isValentine && !showYes && (
                <div className={`${isValentine ? 'flex flex-col justify-center ' : ' hidden '} md:mx-auto md:w-[489px] text-wrap mb-10 p-4 cute card-bg darker-pink tracking-[0.1em] md:text-5xl mt-8 shadow-lg rounded-lg ${isSlideRight ? 'fade-in-animation fade-in slide-up md:mt-12' : ''}`}>
                    <p className="text-center leading-relaxed ">Will you be my Valentine?</p>
                    <div className={`flex flex-col md:flex-row mx-auto gap-2 items-center`}>
                        <button onClick={handleYes} ref={buttonRef} style={{ fontSize: `${yesSize}px`, lineHeight: `${yesSize}px`, padding: `${yesSize + 20}px`}} className={`text-${yesSize} h-max p-10 px-8 counter hover-card card-bg tracking-[0.25em] font-semibold mt-4 shadow-lg rounded-lg`}>
                            Yes
                        </button>
                        <button onClick={handleRejection} ref={noButtonRef} style={{ fontSize: `${noSize}px`, lineHeight: `${noSize}px`, padding: `${noSize + 20}px`}} className={`text-${noSize} h-max p-10 px-8 counter hover-card card-bg tracking-[0.25em] font-semibold mt-4 shadow-lg rounded-lg`}>
                            No
                        </button>
                    </div>
                </div>
                )}
                {showYes && (
                <div className={`lg:max-w-[50%] mx-auto rounded-lg card-bg darker-pink my-4 font-semibold shadow-lg py-4 px-4 ${showYes ? `fade-in-animation fade-in slide-up` : ''}`}>
                    <div className="text-center">
                        <p className="text-lg md:text-3xl">If you're reading this, you've made a good choice!
                        <br/>
                        <span className="text-md md:text-2xl">Here are THREE options on Valentine's Day:</span>
                        </p>
                        <br/>
                        <div className="md:text-xl">
                            Restaurant: Damecca
                            <br/>
                            Time: TBA
                            <br/>
                            Dress: Cute Casual
                            <br/>
                            With: Yours truly
                            <br/>
                            <br/>
                            -- OR --
                            <br/>
                            <br/>
                            Restaurant: The Keg
                            <br/>
                            Time: TBA
                            <br/>
                            Dress: Cute Casual
                            <br/>
                            With: Yours Truly
                            <br/>
                            <br/>
                            -- OR --
                            <br/>
                            <br/>
                            Restaurant: Take-out Dawon / Eat at my place and cuddle / Arts n Craft
                            <br/>
                            <br/>
                            Time: TBA
                            <br/>
                            Dress: Comfy
                            <br/>
                            With: Yours Truly
                            <br/>
                            <br/>
                            Hahaha, I love you baby &lt;3
                        </div>
                    </div>
                </div>
                )}
                {!showYes && (
                <>
                <div className={`flex justify-center items-center md:w-[500px] ${isSlideRight ? 'fade-out-animation fade-out mx-auto' : ''}`}>
                    <HeartFiller id="heartfiller" startAnimation={startAnimation}/>
                </div>
                <div className={`my-4 md:mt-32 ${isSlideRight ? 'fade-out-animation fade-out' : ''}`}>
                    <Person name='R.J. Geli' />
                </div>
                </>
                )}
            </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Home;