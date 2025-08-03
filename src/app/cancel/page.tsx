// app/cancel/page.tsx
export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#161616] text-red-800">
      <div className="text-center p-6 bg-white shadow-lg rounded-xl">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-red-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="text-3xl font-bold mb-2">Payment Failed</h1>
        <p className="text-lg mb-4">Your transaction could not be completed.</p>
        <a
          href="/"
          className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}
