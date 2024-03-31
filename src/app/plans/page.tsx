

export default function Contact() {
    return (
      <main className="flex flex-col items-center mr-4 md:mr-16 ml-4 md:ml-16 pb-16">
        <p className="text-2xl md:text-4xl my-4 md:my-8">Choose the <span className="text-orange font-bold">plan</span> that suits you!</p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center w-full px-2 md:px-8">
          <div className="flex flex-col rounded-md bg-grey text-center p-4 shadow-xl border-2 border-blue-darkest w-full md:w-1/2">
            <p className="text-3xl md:text-4xl font-bold pb-4">Online Technique Coaching</p>
            <p className="text-lg md:text-xl pb-4"><span className="text-orange text-3xl md:text-4xl font-bold">€50</span>/4 weeks</p>
            <p className="text-sm md:text-md">Or get a discount for booking multiple months in advance:</p>
            <p className="text-sm md:text-md">3 x 4 weeks (+ 1 week free): €47.50/4 weeks</p>
            <p className="text-sm md:text-md">6 x 4 weeks (+ 2 weeks free): €42/4 weeks</p>
            <a href="mailto:info@personalonlineswimcoach.com" className="bg-orange min-w-fit rounded p-2 md:p-4 text-white text-lg md:text-xl shadow-md my-4 md:my-8">Sign up</a>
            <p className="text-lg md:text-xl border-b-2 py-2 md:py-4">Weekly in-depth analysis of one video</p>
            <p className="text-lg md:text-xl border-b-2 py-2 md:py-4">Detailed feedback within 48 hours</p>
            <p className="text-lg md:text-xl py-2 md:py-4">Personalised set of drills and exercises to improve</p>
          </div>
          
          <div className="flex flex-col rounded-md bg-grey text-center p-4 shadow-xl w-full md:w-1/2 border-2 border-blue-darkest">
            <p className="text-3xl md:text-4xl font-bold pb-4">Online Individual Coaching</p>
            <p className="text-lg md:text-xl pb-4"><span className="text-orange text-3xl md:text-4xl font-bold">€10 - €400</span>/4 weeks</p>
            <p className="text-sm md:text-md">Online individual coaching is fully tailored to your needs. The price depends on how often you train and how detailed you like your training plans. In the free intake the price is calculated based on your needs.</p>
            <a href="mailto:info@personalonlineswimcoach.com" className="bg-orange min-w-fit rounded p-2 md:p-4 text-white text-lg md:text-xl shadow-md my-4 md:my-8">Sign up</a>
            <p className="text-lg md:text-xl border-b-2 py-2 md:py-4">Free online intake to discuss your goals</p>
            <p className="text-lg md:text-xl border-b-2 py-2 md:py-4">Every week new plans for your training sessions</p>
            <p className="text-lg md:text-xl py-2 md:py-4">Weekly feedback on training results and monthly evaluation of goals</p>
          </div>
        </div>
        
      </main>
    );
  }
  