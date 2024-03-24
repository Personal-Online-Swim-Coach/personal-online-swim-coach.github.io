import Link from "next/link";
import zwem1 from "../../public/home-bar-1.jpg";
import zwem2 from "../../public/home-bar-2.jpg";
import zwem3 from "../../public/home-bar-3.jpg";
import zwem4 from "../../public/home-bar-4.jpg";
import home from "../../public/home_graphic.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="flex flex-row bg-gradient-to-b from-white to-blue-light-20">
        <div className="w-1/2 text-center p-24 ">
            <p className="text-blue-darkest text-6xl font-bold">Your personal swim coach.</p>
            <p className="text-orange text-6xl font-bold">Anytime, anywhere.</p>
            <div className="flex flex-row mt-8 gap-8 px-auto justify-center">
              <div className="bg-blue-primary text-xl w-48 py-4 rounded-md cursor-pointer text-white">
                <a href="mailto:info@personalonlineswimcoach.com">Sign up</a>
              </div>
            </div>
        </div>
        <div className="w-1/2 h-full p-24">
          <img className="w-4/5 m-auto align-middle" src={home.src}/>
        </div>
      </div>
      
      <div className="w-full bg-white-bg flex flex-col items-center">
        <p className="text-blue-darkest text-5xl font-bold p-16">Choose your <span className="text-orange">training</span> plan</p>
        <div className="w-full grid grid-cols-2 text-center justify-around px-16 gap-x-16">
          <div className="bg-blue-darkest shadow-lg shadow-blue-darkest rounded-xl p-8">
            <p className="text-4xl text-white mb-8">Online <span className="text-orange font-bold">Technique</span> Coaching</p>
            <div className="w-full flex flex-col text-xl text-left gap-x-4 mb-4">
              <p className="text-orange font-bold text-2xl my-auto text-center">Record</p>
              <p className="text-white">Ask a friend or coach to film your swimming technique</p>
            </div>
            <div className="w-full flex flex-col text-xl text-left gap-x-4 mb-4">
              <p className="text-orange font-bold text-2xl my-auto text-center">Share</p>
              <p className="text-white">Send the videos via WhatsApp to our coaches</p>
            </div>
            <div className="w-full flex flex-col text-xl text-left gap-x-4 mb-4">
              <p className="text-orange font-bold text-2xl my-auto text-center">Analyse</p>
              <p className="text-white">Our expert coaches analyse your videos within 48 hours</p>
            </div>
            <div className="w-full flex flex-col text-xl text-left gap-x-4 mb-4">
              <p className="text-orange font-bold text-2xl my-auto text-center">Feedback</p>
              <p className="text-white">Receive personalized feedback and helpful exercises to improve your technique</p>
            </div>
            <div className="flex flex-row mt-8 gap-x-8">
              <a href="mailto:info@personalonlineswimcoach.com" className="bg-orange min-w-fit rounded p-4 text-white text-xl shadow-xl flex-grow">Sign up</a> 
              <Link href="/plans" className="text-orange text-xl w-fit my-auto ">Learn more</Link> 
            </div>
          </div>
          <div className="bg-blue-darkest shadow-lg shadow-blue-darkest rounded-xl p-8">
            <p className="text-4xl text-white mb-8">Online <span className="text-orange font-bold">Individual</span> Coaching</p>
            <div className="w-full flex flex-col text-xl text-left gap-x-4 mb-4">
              <p className="text-orange font-bold text-2xl my-auto text-center">Meet</p>
              <p className="text-white">Get to know us and share your training goals</p>
            </div>
            <div className="w-full flex flex-col text-xl text-left gap-x-4 mb-4">
              <p className="text-orange font-bold text-2xl my-auto text-center">Program</p>
              <p className="text-white">Choose the type and amount of training programming you need</p>
            </div>
            <div className="w-full flex flex-col text-xl text-left gap-x-4 mb-4">
              <p className="text-orange font-bold text-2xl my-auto text-center">Training</p>
              <p className="text-white">Work with our training programs at your own preferred time and location</p>
            </div>
            <div className="w-full flex flex-col text-xl text-left gap-x-4 mb-4">
              <p className="text-orange font-bold text-2xl my-auto text-center">Feedback</p>
              <p className="text-white">Share your training results and get feedback</p>
            </div>
            <div className="flex flex-row mt-8 gap-x-8">
              <a href="mailto:info@personalonlineswimcoach.com" className="bg-orange min-w-fit rounded p-4 text-white text-xl shadow-xl flex-grow">Sign up</a>
              <Link href="/plans" className="text-orange text-xl w-fit my-auto ">Learn more</Link> 
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-grey m-16 p-8 shadow-md shadow-grey">
        <p className="text-3xl text-blue-darkest text-center">Or <span className="text-orange font-bold">contact</span> us to discuss our possibilities for private in-person training sessions or video analyses.</p>
      </div>

      <div className="flex flex-row">
        <img className="w-1/4" src={zwem2.src}/>
        <img className="w-1/4" src={zwem4.src}/>
        <img className="w-1/4" src={zwem1.src}/>
        <img className="w-1/4" src={zwem3.src}/>
      </div>

      <div className="w-full bg-white-bg flex flex-col items-center bg-white">
        <p className="text-blue-darkest text-5xl font-bold p-16">Why use <span className="text-orange">personal online swim coach?</span></p>
      
        <div className="flex flex-row justify-around gap-x-16 px-16 pb-16">
          <div className="w-1/3">
            <div className="flex flex-row pb-4">
              <svg className="w-12 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="stroke-orange fill-orange w-8" fill-rule="evenodd" clip-rule="evenodd" d="M12.4493 3.07772C12.1667 2.93543 11.8333 2.93535 11.5505 3.07751L0.550856 8.60778C-0.182453 8.97646 -0.18386 10.0228 0.548455 10.3934L5 12.6465V17C5 19.2091 6.79086 21 9 21H15C17.2091 21 19 19.2091 19 17V12.6352L22 11.124V14C22 14.5523 22.4477 15 23 15C23.5523 15 24 14.5523 24 14V9.62991C24 9.20695 23.8394 8.81077 23.4424 8.61095C19.7781 6.76658 16.1137 4.92212 12.4493 3.07772ZM11.9995 5.09035L3.22034 9.5042L11.9742 13.9349L20.7693 9.50453L11.9995 5.09035ZM7 17V13.6588L11.5216 15.9474C11.8049 16.0908 12.1394 16.0911 12.423 15.9482L17 13.6427V17C17 18.1046 16.1046 19 15 19H9C7.89543 19 7 18.1046 7 17Z" fill="#0F0F0F"/>
              </svg>
              <p className="text-4xl font-bold leading-loose align-middle">Scientific</p>
            </div>
            <p className="text-xl">Our coaches combine scientific knowledge with years of experience in coaching.</p>
          </div>
          <div className="w-1/3">
            <div className="flex flex-row pb-4">
              <svg className="w-11 mr-2" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path className="stroke-orange fill-orange" d="M333.187,237.405c32.761-23.893,54.095-62.561,54.095-106.123C387.282,58.893,328.389,0,256,0
                    S124.718,58.893,124.718,131.282c0,43.562,21.333,82.23,54.095,106.123C97.373,268.57,39.385,347.531,39.385,439.795
                    c0,39.814,32.391,72.205,72.205,72.205H400.41c39.814,0,72.205-32.391,72.205-72.205
                    C472.615,347.531,414.627,268.57,333.187,237.405z M164.103,131.282c0-50.672,41.225-91.897,91.897-91.897
                    s91.897,41.225,91.897,91.897S306.672,223.18,256,223.18S164.103,181.954,164.103,131.282z M400.41,472.615H111.59
                    c-18.097,0-32.82-14.723-32.82-32.821c0-97.726,79.504-177.231,177.231-177.231s177.231,79.504,177.231,177.231
                    C433.231,457.892,418.508,472.615,400.41,472.615z"/>
                </g>
              </svg>
              <p className="text-4xl font-bold leading-loose align-middle">Individual</p>
            </div>
            <p className="text-xl">Every swimmer needs a different form of guidance and learns in their own way. Therefore, all our coaching is tailored to your peronal needs.</p>
          </div>
          <div className="w-1/3">
            <div className="flex flex-row pb-4">
              <svg className="w-12 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path className="stroke-orange fill-none" d="M10 18H14M7.20003 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V11.8C20 12.9201 20 13.4802 19.782 13.908C19.5903 14.2843 19.2843 14.5903 18.908 14.782C18.4802 15 17.9201 15 16.8 15H7.20003C6.07992 15 5.51987 15 5.09205 14.782C4.71572 14.5903 4.40976 14.2843 4.21801 13.908C4.00003 13.4802 4.00003 12.9201 4.00003 11.8V6.2C4.00003 5.0799 4.00003 4.51984 4.21801 4.09202C4.40976 3.71569 4.71572 3.40973 5.09205 3.21799C5.51987 3 6.07992 3 7.20003 3ZM4.58888 21H19.4112C20.2684 21 20.697 21 20.9551 20.8195C21.1805 20.6618 21.3311 20.4183 21.3713 20.1462C21.4173 19.8345 21.2256 19.4512 20.8423 18.6845L20.3267 17.6534C19.8451 16.6902 19.6043 16.2086 19.2451 15.8567C18.9274 15.5456 18.5445 15.309 18.1241 15.164C17.6488 15 17.1103 15 16.0335 15H7.96659C6.88972 15 6.35128 15 5.87592 15.164C5.45554 15.309 5.07266 15.5456 4.75497 15.8567C4.39573 16.2086 4.15493 16.6902 3.67334 17.6534L3.1578 18.6845C2.77444 19.4512 2.58276 19.8345 2.6288 20.1462C2.669 20.4183 2.81952 20.6618 3.04492 20.8195C3.30306 21 3.73166 21 4.58888 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className="text-4xl font-bold leading-loose align-middle">Online</p>
            </div>
            <p className="text-xl">All our coaching is done online, so you can train whenever it suits you.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
