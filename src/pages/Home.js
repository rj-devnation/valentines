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
    const buttonRef = useRef(null);
    const [noCount, setNoCount] = useState(0)
    const [showYes, setShowYes] = useState(false)

    const handleStartButtonClick = () => {
        setShowContent(true);
    };


    const startAnimation = () => {
        setIsSlideRight(true);
    }

    const handleValentine = () => {
        setIsValentine(true);
    }

    const handleYes = () => {
        setShowYes(true)
    }

    const handleRejection = () => {
        setNoCount(prevCount => prevCount + 1)
        setButtonHeight(prevHeight => prevHeight + 10)
        setButtonWidth(prevWidth => prevWidth + 10)
        setYesSize(prevSize => prevSize + 2)
    }

  return (
    <div className="flex justify-center items-center w-[1500px] mx-auto">
      <div className={`transition-all duration-[2000ms] ease-in-out ${showContent ? 'opacity-100 translate-y-0' : 'm-96'}`}>
        {!showContent && (
          <button onClick={handleStartButtonClick} className="bg-[#FF97B7] hover:bg-[#FFCAD4] w-72 text-5xl px-10 py-5 text-center align-middle  text-white font-bold rounded-xl transform transition-transform duration-500 hover:-translate-y-5">
            Open
          </button>
        )}
        {showContent && (
          <div className="mt-4">
            <div>
                <h2 className='text-center text-pink py-8 rounded-full mt-10 mx-auto mb-20'>
                Love Compatibility
                </h2>
            </div>
            <div className={`w-full flex justify-between mt-7`}>
                <div className={`w-1/2 text-nowrap pr-18 ${isSlideRight ? 'slide-right-animation slide-in' : ''}`}>
                    <Person name='Carmela Lamsen' />
                    <div id="chart" className={`${isValentine ? 'hidden' : ''} mb-10 p-10 px-8 max-h-[375px] counter card-bg darker-pink tracking-[0.25em] font-semibold text-2xl w-full mt-8 shadow-lg rounded-lg relative right-[80px] ${isSlideRight ? 'fade-in-animation fade-in slide-up block' : 'hidden'}`}>
                        <h3 className="text-center">Compatibility Chart</h3>
                        <div className="text-[16px] tracking-wide lato">
                            <p className="pt-8">Compatibility: 10/10</p>
                            <p className="pt-3">Lovable: 10/10</p>
                            <p className="pt-3">Marriage: High</p>
                            <p className="pt-3 text-wrap">
                                Reasons to love you: loving, caring, loves unconditionally, weird af, understands you, cute smile, amazing cuddler
                            </p>
                            <p className="pt-3">Laugh: Like a seal</p>
                        </div>
                        <button onClick={handleValentine} className={`mb-10 p-10 px-8 counter card-bg darker-pink tracking-[0.25em] font-semibold text-2xl w-full mt-8 shadow-lg rounded-lg relative left-[600px] bottom-[250px] ${isSlideRight ? 'fade-in-animation fade-in slide-up block' : 'hidden'}`}>
                            Next
                        </button>
                    </div>
                    {!showYes && (
                    <div className={`${isValentine ? 'flex flex-col' : 'hidden '} text-wrap mb-10 p-10 px-8 cute card-bg darker-pink tracking-[0.25em] font-semibold text-2xl mt-8 shadow-lg rounded-lg relative right-[80px] ${isSlideRight ? 'fade-in-animation fade-in slide-up block' : 'hidden'}`}>
                        <p className="text-center leading-relaxed">Will you be my Valentine?</p>
                        <div className={`flex mx-auto`}>
                        <button onClick={handleYes} ref={buttonRef} style={{ fontSize: `${yesSize}px`, lineHeight: `${yesSize}px`, paddingTop: `${yesSize + 28}`}} className={`text-${yesSize} h-max mb-10 p-10 mr-4 px-8 counter hover-card card-bg tracking-[0.25em] font-semibold mt-8 shadow-lg rounded-lg`}>
                            Yes
                        </button>
                        <button onClick={handleRejection} className="w-[110px] h-[96px] mb-10 p-10 px-8 text-base counter hover-card card-bg tracking-[0.25em] font-semibold mt-8 shadow-lg rounded-lg">
                            No
                        </button>
                        </div>
                    </div>
                    )}
                </div>
                {showYes && (
                <>
                    <div className="opacity-pink opacity-70 w-screen h-screen absolute bottom-[204px] right-[-206px]">
                    </div>
                    <div className="z-[1] rounded-lg card-bg darker-pink mx-auto absolute left-[450px] top-[185px] font-semibold shadow-lg p-8">
                        <p>
                            If you're reading this, you've made a good choice!
                            <br/>
                            <br/>
                            Here are THREE options to eat out on Valentine's Day:
                            <br/>
                            <br/>
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
                            Restaurant: Take-out Dawon / Eat at my place and cuddle
                            <br/>
                            Time: TBA
                            <br/>
                            Dress: Comfy
                            <br/>
                            With: Yours Truly
                            <br/>
                            <br/>
                            Hahaha, I love you baby &lt;3
                        </p>
                    </div>
                </>
                )}
                <div className={`flex justify-center items-center w-[500px] ${isSlideRight ? 'fade-out-animation fade-out mx-auto' : ''}`}>
                    <HeartFiller startAnimation={startAnimation}/>
                </div>
                <div className={`w-1/2 pl-24 ${isSlideRight ? 'fade-out-animation fade-out' : ''}`}>
                    <Person name='R.J. Geli' />
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;