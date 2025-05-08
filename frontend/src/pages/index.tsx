import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { LiveKitRoom, RoomAudioRenderer, StartAudio } from "@livekit/components-react";
import Playground from "@/components/playground/Playground";
import { useConnection } from "@/hooks/useConnection";
import Link from "next/link";

// Theme colors with teal as primary for Kno2gether branding
const themeColors = ["teal", "cyan", "blue", "green", "amber", "violet", "rose", "pink"];

function ConnectionWrapper() {
  const { wsUrl, token, connect, disconnect } = useConnection();
  const [showPlayground, setShowPlayground] = useState(false);

  const handleConnect = async (shouldConnect: boolean) => {
    if (shouldConnect) {
      await connect("env");
    } else {
      await disconnect();
    }
  };

  return (
    <>
      <motion.button
        className="px-8 py-4 bg-white text-teal-600 rounded-full font-bold text-xl shadow-lg shadow-teal hover:bg-teal-50 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setShowPlayground(true);
          handleConnect(true);
        }}
      >
        Talk to Your Personal Assistant
      </motion.button>

      <AnimatePresence>
        {showPlayground && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-transparent w-full max-w-5xl h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
            >
              <LiveKitRoom
                serverUrl={wsUrl}
                token={token}
                connect={true}
                className="w-full h-full"
              >
                <Playground
                  themeColors={themeColors}
                  onConnect={handleConnect}
                  onClose={() => {
                    setShowPlayground(false);
                    handleConnect(false);
                  }}
                />
                <RoomAudioRenderer />
                <StartAudio label="Click to enable audio playback" />
              </LiveKitRoom>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const backgroundVariants = {
  animate: {
    background: [
      "linear-gradient(45deg, #0d9488 0%, #0891b2 50%, #1e40af 100%)", // Teal to cyan to blue (Kno2gether colors)
      "linear-gradient(45deg, #0f766e 0%, #0e7490 50%, #1e3a8a 100%)",
      "linear-gradient(45deg, #14b8a6 0%, #06b6d4 50%, #3b82f6 100%)",
      "linear-gradient(45deg, #0d9488 0%, #0891b2 50%, #1e40af 100%)",
    ],
    transition: {
      duration: 100,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Kno2gether Personal Assistant</title>
        <meta name="description" content="Kno2gether - AI-powered personal assistant with Composio integration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main 
        className="flex flex-col items-center justify-center min-h-screen text-white overflow-hidden"
        variants={backgroundVariants}
        animate="animate"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Welcome to Kno2gether</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Your AI-powered personal assistant with calendar management and email capabilities.</p>
          <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="text-lg mb-2">🚀 <span className="font-semibold text-teal-400">Demo Playground App</span> showcasing integration with <span className="font-semibold text-cyan-400">Composio</span> for Google Calendar and Gmail services.</p>
            <p className="text-sm text-gray-300">Experience the power of conversational AI combined with productivity tools.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <ConnectionWrapper />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center"
          >
            <p className="text-lg mb-4">Enjoying this demo? Subscribe to our YouTube channel!</p>
            <Link 
              href="https://www.youtube.com/@Kno2gether" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Subscribe to Kno2gether
            </Link>
          </motion.div>
        </motion.div>
      </motion.main>
    </>
  );
}