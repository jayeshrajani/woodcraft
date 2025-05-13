// app/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-[#f3f1ed] text-[#4b4b4b] py-10 px-6 sm:px-12 border-t border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {new Date().getFullYear()} Woodcraft. Designed with care in India.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-[#6d4c41] transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#6d4c41] transition">Terms</a>
          </div>
        </div>
      </footer>
    );
  }
  