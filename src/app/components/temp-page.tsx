import logo from "../../../public/logo.jpg";

const Temp = () => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white">
      <div className="flex flex-col m-auto w-3/4 md:w-1/2 lg:w-1/3 text-center gap-y-8">
        <img className="w-full" src={logo.src}/>
        <p className="text-3xl md:text-5xl text-blue-darkest font-bold">Under construction</p>
        <p className="text-md md:text-xl text-blue-darkest">We are still working to optimise our website for your screen size, please visit our website on a laptop or computer.</p>
      </div>
    </main>
  );
}

export default Temp;