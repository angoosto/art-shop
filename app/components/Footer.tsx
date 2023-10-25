const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-teal-500 text-center bg-teal-500">
      <div className="container pt-2">
        <div className="mb-2 flex justify-center">
          <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#!" className="text-neutral-800 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.2426 5.75736C11.8995 3.41421 8.10051 3.41421 5.75736 5.75736C3.41421 8.10051 3.41421 11.8995 5.75736 14.2426C7.79395 16.2792 10.9325 16.5464 13.257 15.0408C13.7205 14.7405 14.3397 14.8729 14.6399 15.3364C14.9402 15.8 14.8078 16.4191 14.3443 16.7194C11.2445 18.7273 7.0606 18.3743 4.34315 15.6569C1.21895 12.5327 1.21895 7.46734 4.34315 4.34315C7.46734 1.21895 12.5327 1.21895 15.6569 4.34315C17.2187 5.90503 18 7.9542 18 10C18 11.6569 16.6569 13 15 13C14.3247 13 13.7015 12.7769 13.2001 12.4003C12.4703 13.3717 11.3085 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10C16 8.46294 15.4144 6.9291 14.2426 5.75736ZM12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12C11.1046 12 12 11.1046 12 10Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="w-full bg-neutral-300 p-2 text-center dark:bg-teal-500 dark:text-neutral-200">
        © 2023 Copyright
      </div>
    </footer>
  );
};

export default Footer;
