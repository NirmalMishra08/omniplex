// app/success/page.tsx
export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#161616] text-white">
      <div className="text-center p-6 bg-muted shadow-lg rounded-xl">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-3xl font-bold mb-2">Payment Successful</h1>
        <p className="text-lg mb-4">Thank you for purchasing the Pro Plan!</p>
        <a
          href="/"
          className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
