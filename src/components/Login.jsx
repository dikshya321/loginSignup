import React from 'react'
import logo from '../assets/logo.jpg'
import { LockClosedIcon } from '@heroicons/react/solid'
const Login = () => {
  return (
    <div className="bg-red-200 h-[100vh]"  >

      
      
        <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">    
    
          <form className="mt-8 space-y-6 bg-white rounded w-[600px] h-[400px]" action="#" method="POST">
            
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt={logo}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-red-500">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-red-400">
            
              </a>
            </p>
          </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="flex justify-center">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" m-2  appearance-none rounded-none relative block w-[400px] px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-400 focus:border-red-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="flex justify-center">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-[400px] px-3 py-2 border border-red-400 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-400 focus:border-red-400 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-400 focus:ring-red-400 border-red-400 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-red-400">
                  Remember me
                  
                </label>
                
                <div className="text-sm">
                <a href="#" className="font-medium text-red-400 hover:text-red-400">
                  Forgot your password?
                </a>
              </div>
              </div>
              
              

             
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative w-[200px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-red-400 group-hover:text-red-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      </>
</div>

  
  

  )
  
  
}

export default Login;