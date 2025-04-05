import { ROUTES } from '@project/routing/routes';
import { useNavigate } from 'react-router';

export const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(ROUTES.home.path);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-extrabold text-amber-400">404</h1>
        <div className="w-full flex items-center justify-center">
          <div className="h-1 w-24 bg-amber-400 rounded-full mx-2"></div>
          <p className="text-xl font-medium text-gray-300">Page Not Found</p>
          <div className="h-1 w-24 bg-amber-400 rounded-full mx-2"></div>
        </div>
        <p className="mt-6 text-gray-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={goToHome}
          className="mt-8 px-6 cursor-pointer py-3 bg-amber-600 text-white font-medium rounded-lg shadow-md hover:bg-amber-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};
