export function SliderDesign () {
    return (
      <div className="min-w-full min-h-screen relative">
        <div className="absolute top-5 left-5 border-t border-l border-white w-5 h-5"></div>
        <div className="absolute top-5 right-5 border-t border-r border-white w-5 h-5"></div>
        <div className="absolute bottom-5 right-5 border-b border-r border-white w-5 h-5"></div>
        <div className="absolute bottom-5 left-5 border-b border-l border-white w-5 h-5"></div>
  
        <div className="w-full h-72 bottom-0 border-t border-white absolute p-5">
        </div>
      </div>
    );
  };
  