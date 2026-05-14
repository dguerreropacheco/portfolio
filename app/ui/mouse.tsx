export default function Mouse() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
      
      <div className="w-[25px] h-[40px] border border-black rounded-full flex justify-center pt-2">
        
        <div className="w-[4px] h-[8px] bg-black rounded-full animate-bounce"></div>
      </div>

    </div>
  );
}