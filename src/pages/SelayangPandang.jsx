export default function SelayangPandang() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-5">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Selayang Pandang
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div>
          <h1 className="font-bold text-3xl text-gray-800 dark:text-gray-100 mb-3">
            Halaman Selayang Pandang
          </h1>
        </div>
      </div>
    </>
  );
}