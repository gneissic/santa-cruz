
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex h-screen bg-indigo-100 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700">
          Sorry, the page {`you're`} looking for {`doesn't`} exist, or check your internet connection.
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;
3