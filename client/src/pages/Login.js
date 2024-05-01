import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sprynt / Login</title>
      </Helmet>
      <section class="bg-bckgrnd-light">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-lg">
          <Link to="/">
            <img class="w-28 mb-4" src={logo} alt="Sprynt logo" />
          </Link>
          <div class="w-full bg-bckgrnd-main rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-text-dark md:text-2xl">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-md font-medium text-text-dark"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-text-dark sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-md font-medium text-text-dark"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-text-dark sm:text-sm rounded-lg block w-full p-2.5 "
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-button-light hover:bg-button-blue focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p class="text-md font-light text-text-dark">
                  Don’t have an account yet?
                  <a
                    href="/register"
                    class="font-medium text-button-light hover:underline ml-1"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
