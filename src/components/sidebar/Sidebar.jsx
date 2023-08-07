export const Sidebar = () => {
  return (
    <aside className="sidebar relative flex flex-col w-[15%] text-xs h-[100vh] bg-gray-300 p-4 pl-5">
      <div className="company mt-6 font-medium text-[--black2] text-[20px]">
        OncoAI
      </div>

      <div className="search my-7">
        <input
          className="searchbar w-[100%] rounded-3xl py-3 px-3 text-xs"
          type="text"
          placeholder="My Threads"
        />
      </div>

      <div className="wrapper flex flex-col justify-between min-h-[70vh] ">
        <div className="menu">
          <ul className="menu-wrapper flex flex-col gap-5">
            <li className="menu-list font-medium hover:text-[--black3] hover:font-bold">
              <a href="#">Home</a>
            </li>

            <li className="menu-list font-medium hover:text-[--black3] hover:font-bold">
              <a href="#">Popular Now</a>
            </li>
            <li className="menu-list font-medium hover:text-[--black3] hover:font-bold">
              <a href="#">My Threads</a>
            </li>
            <li className="menu-list font-medium hover:text-[--black3] hover:font-bold">
              <a href="#">AI Profile</a>
            </li>
            <li className="menu-list font-medium hover:text-[--black3] hover:font-bold">
              <a href="#">Login</a>
            </li>
          </ul>

          <a
            href="#"
            className="sign-up flex justify-center items-center p-3 rounded-3xl w-[100%] my-7 bg-[--blue] text-white"
          >
            Sign Up
          </a>
        </div>

        <div className="pro">
          <div>Try Pro</div>

          <div className="descr">More Copilot uses and GPT-4 acceses.</div>

          <a className="text-[--blue]" href="#">
            Learn More
          </a>
        </div>

        <div className="footer absolute bottom-0 pt-4 pb-5 pl-4 border-t-[1px] w-[100%] left-0 border-gray-500">
          <div className="download">Download</div>

          <div className="socials">
            <div></div>
          </div>
        </div>
      </div>
    </aside>
  );
};
