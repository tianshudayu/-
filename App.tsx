import React, { useState, useEffect } from 'react';
import { AppState, UserData } from './types';
import { ResultCard } from './components/ResultCard';
import { Confetti } from './components/Confetti';
import { Sparkles, ArrowRight } from 'lucide-react';

const TARGET_AMOUNT = "1,000,000,000,000.00";
const TARGET_NAME = "郭秀兰";

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.START);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStart = () => {
    setAppState(AppState.ANIMATING);
    
    // Simulate "Processing" time then show result
    setTimeout(() => {
      setAppState(AppState.RESULT);
      setShowConfetti(true);
    }, 2500);
  };

  const userData: UserData = {
    name: TARGET_NAME,
    amount: TARGET_AMOUNT,
    date: new Date().toISOString().split('T')[0]
  };

  return (
    <div className="w-full max-w-md mx-auto h-[100dvh] bg-white shadow-2xl overflow-hidden relative font-sans">
      {/* Confetti Overlay */}
      {showConfetti && <Confetti />}

      {/* Start Screen */}
      {appState === AppState.START && (
        <div className="h-full w-full bg-pattern flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
          
          <div className="mb-12 animate-float">
             <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.6)] mx-auto mb-6">
                <Sparkles size={48} className="text-red-600" />
             </div>
             <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">圆梦行动</h1>
             <p className="text-yellow-100 text-lg opacity-90">让梦想照进现实</p>
          </div>

          <button 
            onClick={handleStart}
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-red-900 font-black text-xl rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>点击开启梦想</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-50 blur-lg -z-10 animate-pulse"></div>
          </button>
          
          <p className="absolute bottom-8 text-white/50 text-xs">
            官方唯一指定圆梦通道
          </p>
        </div>
      )}

      {/* Loading / Transition Screen */}
      {appState === AppState.ANIMATING && (
        <div className="h-full w-full bg-red-700 flex flex-col items-center justify-center z-20 absolute top-0 left-0">
          <div className="w-32 h-32 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-8"></div>
          <h2 className="text-2xl font-bold text-white animate-pulse">正在审核资质...</h2>
          <p className="text-white/70 mt-2">对接财政部数据中心</p>
          
          <div className="mt-8 w-64 bg-red-900 rounded-full h-2 overflow-hidden">
             <div className="h-full bg-yellow-400 animate-[width_2s_ease-out_forwards]" style={{width: '0%'}}></div>
          </div>
          <style>{`
            @keyframes width {
              to { width: 100%; }
            }
          `}</style>
        </div>
      )}

      {/* Result Screen */}
      {appState === AppState.RESULT && (
        <ResultCard data={userData} />
      )}
    </div>
  );
};

export default App;