import useState from "react";
const QueryPage = () => {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div className="z-60 fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto">
          <div className="bg-slate-800 text-slate-50 flex justify-between p-3 text-sm shadow-lg md:rounded">
            <div className="text-slate-500 inline-flex">
              <a
                className="text-slate-50 font-medium hover:underline"
                href="https://github.com/cruip/tailwind-landing-page-template"
                target="_blank"
                rel="noreferrer"
              >
                Download<span className="hidden sm:inline"> on GitHub</span>
              </a>{" "}
              <span className="px-1.5 italic">or</span>{" "}
              <a
                className="text-emerald-400 font-medium hover:underline"
                href="https://cruip.com/simple/"
                target="_blank"
                rel="noreferrer"
              >
                Check Premium Version
              </a>
            </div>
            <button
              className="text-slate-500 hover:text-slate-400 ml-3 border-l border-gray-700 pl-2"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="fill-current h-4 w-4 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default QueryPage;
