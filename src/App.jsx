// App.jsx
const App = () => {
  return (
    <div className="min-h-screen bg-primary-50 font-sans">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-primary-700 mb-8">
          Portfolio Title
        </h1>

        <div className="space-x-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg">
            Primary Button
          </button>

          <button className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
