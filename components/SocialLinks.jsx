export default function SocialLinks() {
  return (
    <div className="space-y-4 max-w-md mx-auto bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      {/* <!-- Facebook --> */}
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 text-white p-2 rounded-md">
            {/* <!-- Facebook Icon --> */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8.1v-2.89h2.34V9.84c0-2.32 1.38-3.61 3.5-3.61.7 0 1.43.12 1.43.12v1.57h-.81c-1.28 0-1.68.79-1.68 1.6v1.92h2.84l-.45 2.89h-2.39v6.99C18.34 21.13 22 17 22 12z" />
            </svg>
          </div>
          <span className="text-gray-800 font-semibold text-lg">12k</span>
        </div>
        <span className="text-gray-600 text-sm">Facebook Likes</span>
      </div>

      {/* <!-- Twitter --> */}
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-400 text-white p-2 rounded-md">
            {/* <!-- Twitter Icon --> */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1A4.48 4.48 0 0016.11 0c-2.48 0-4.5 2.14-4.5 4.78 0 .37.04.73.12 1.07A12.78 12.78 0 013 1.15a5.03 5.03 0 001.47 6.7A4.41 4.41 0 012 7.14v.06a4.55 4.55 0 003.6 4.48 4.52 4.52 0 01-2.05.08 4.52 4.52 0 004.22 3.2A9.05 9.05 0 012 19.54a12.77 12.77 0 006.29 1.88c7.55 0 11.68-6.51 11.68-12.16 0-.18-.01-.36-.02-.54A8.72 8.72 0 0023 3z" />
            </svg>
          </div>
          <span className="text-gray-800 font-semibold text-lg">4.5k</span>
        </div>
        <span className="text-gray-600 text-sm">Twitter Followers</span>
      </div>

      {/* <!-- Behance --> */}
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 text-white p-2 rounded-md">
            {/* <!-- Behance Icon --> */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 9.5h-6v-1h6v1zm-2.17 1.58c-.69 0-1.28.25-1.75.75s-.71 1.11-.71 1.83.24 1.36.71 1.83.98.75 1.67.75c1.07 0 1.88-.58 2.42-1.75h1.55c-.21.91-.65 1.68-1.31 2.31-.66.63-1.52.94-2.56.94-1.19 0-2.16-.38-2.9-1.14s-1.11-1.73-1.11-2.9.37-2.12 1.11-2.88S18.61 9 19.75 9c1.01 0 1.83.31 2.44.93.61.62.97 1.38 1.07 2.28h-1.52c-.3-.93-.91-1.38-1.91-1.38zM11 7H4v10h7c1.51 0 2.75-.46 3.71-1.37s1.45-2.07 1.45-3.47-.48-2.59-1.45-3.5S12.51 7 11 7zm-.94 7.75c-.24.21-.6.32-1.07.32H6.5V13h2.49c.47 0 .83.11 1.07.33.25.22.37.52.37.89 0 .37-.12.66-.37.88zM9.93 9.68c.23.2.35.47.35.81s-.12.6-.35.8c-.23.2-.56.31-1 .31H6.5v-2.2h2.43c.44 0 .77.1 1 .28z" />
            </svg>
          </div>
          <span className="text-gray-800 font-semibold text-lg">2k</span>
        </div>
        <span className="text-gray-600 text-sm">Behance Projects</span>
      </div>

      {/* <!-- YouTube --> */}
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-red-600 text-white p-2 rounded-md">
            {/* <!-- YouTube Icon --> */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.4-.8-1.8-.9C16.3 5 12 5 12 5s-4.3 0-7.2.1c-.4 0-1.1.1-1.8.9C2.4 6.6 2.2 8 2.2 8S2 9.6 2 11.3v1.3c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.7.8 1.7.8 2.2.9 1.6.1 6.8.1 6.8.1s4.3 0 7.2-.1c.4 0 1.1-.1 1.8-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.3c0-1.7-.2-3.3-.2-3.3zM10 14.6V9.4l5.3 2.6-5.3 2.6z" />
            </svg>
          </div>
          <span className="text-gray-800 font-semibold text-lg">8.7k</span>
        </div>
        <span className="text-gray-600 text-sm">YouTube Subscribers</span>
      </div>
    </div>
  );
}
