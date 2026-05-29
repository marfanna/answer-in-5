export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <p className="text-6xl font-black font-heading text-slate-900 mb-2">404</p>
      <p className="text-slate-500 mb-6">Page not found.</p>
      <a href="/" className="text-sm font-bold text-slate-900 underline underline-offset-4">
        Go home
      </a>
    </div>
  );
}
