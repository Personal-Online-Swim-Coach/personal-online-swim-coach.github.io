import Image from "next/image";
import zwem1 from "../../public/zwem-1.jpg";
import zwem2 from "../../public/zwem-2.jpg";
import zwem3 from "../../public/zwem-3.jpeg";
import home from "../../public/home-image.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="flex flex-row bg-gradient-to-b from-white to-blue-light-20">
        <div className="w-1/2 text-center p-24 ">
            <p className="text-blue-darkest text-6xl font-bold">Your personal swim coach.</p>
            <p className="text-orange text-6xl font-bold">Anytime, anywhere.</p>
            <div className="flex flex-row mt-8 gap-8 px-auto justify-center">
              <div className="bg-blue-primary text-xl w-48 py-4 rounded-md cursor-pointer text-white">
                Sign up
              </div>
              <div className="border-blue-primary border-2 w-48 py-4 rounded-md text-blue-primary cursor-pointer">
                Learn more
              </div>
            </div>
        </div>
        <div className="w-1/2 h-full p-24">
          <img className="w-3/4 m-auto align-middle" src={home.src}/>
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
              <p className="bg-orange min-w-fit rounded p-4 text-white text-xl shadow-xl flex-grow">Sign up</p> 
              <p className="text-orange text-xl w-fit my-auto ">Learn more</p> 
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
              <p className="bg-orange min-w-fit rounded p-4 text-white text-xl shadow-xl flex-grow">Sign up</p> 
              <p className="text-orange text-xl w-fit my-auto ">Learn more</p> 
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-grey m-16 p-8 shadow-md shadow-grey">
        <p className="text-3xl text-blue-darkest text-center">Or <span className="text-orange font-bold">contact</span> us to discuss our possibilities for private in-person training sessions or video analyses.</p>
      </div>

      <div className="flex flex-row">
        <img className="w-1/4" src={zwem1.src}/>
        <img className="w-1/4" src={zwem2.src}/>
        <img className="w-1/4" src={zwem3.src}/>
        <img className="w-1/4" src={zwem1.src}/>
      </div>

      <div className="w-full bg-white-bg flex flex-col items-center bg-grey">
        <p className="text-blue-darkest text-5xl font-bold p-16">Why use <span className="text-orange">personal online swim coach?</span></p>
      
        <div className="flex flex-row justify-around gap-x-16 px-16 pb-16">
          <div className="w-1/3">
            <p className="text-4xl font-bold pb-4">Scientific</p>
            <p>Our coaches combine scientific knowledge with years of experience in coaching.</p>
          </div>
          <div className="w-1/3">
            <p className="text-4xl font-bold pb-4">Individual</p>
            <p>Every swimmer requires different gui and learns in their own way. Therefore, all our coaching is tailored to your peronal needs</p>
          </div>
          <div className="w-1/3">
            <p className="text-4xl font-bold">Online</p>
            <p>All our coaching is done online, so you can train whenever it suits you.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
