import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
const SignUpForm = () => {
  const [passwordType, setPasswordType] = useState(false);
  const handlePassword = () => {
    setPasswordType(!passwordType);
  };
  return (
    <div>
      <div>
        <div className="flex items-center ">
          <a
            href="#"
            className="inline-flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white mx-auto">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Typography
              variant="h4"
              color="text-gray-900"
              className="font-bold   dark:text-white">
              Create a New account
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="px-4 mb-7">
                <Input label="Name" maxLength={19} />
              </div>
              <div className="px-4 mb-7">
                <Input label="Email" maxLength={19} />
              </div>
              <div className="px-4 mb-7">
                <Input
                  type={passwordType ? "password" : "text"}
                  label="Password"
                  className="border border-gray rounded w-full p-3"
                  icon={
                    !passwordType ? (
                      <EyeIcon
                        className="h-5 w-5 text-blue-gray-300"
                        onClick={handlePassword}
                      />
                    ) : (
                      <EyeSlashIcon
                        onClick={handlePassword}
                        className="h-5 w-5 text-blue-gray-300"
                      />
                    )
                  }
                />
              </div>
              <div className="px-4 mb-7">
                <Input
                  type={passwordType ? "password" : "text"}
                  label="Confirm Password"
                  className="border border-gray rounded w-full p-3"
                  icon={
                    !passwordType ? (
                      <EyeIcon
                        className="h-5 w-5 text-blue-gray-300"
                        onClick={handlePassword}
                      />
                    ) : (
                      <EyeSlashIcon
                        onClick={handlePassword}
                        className="h-5 w-5 text-blue-gray-300"
                      />
                    )
                  }
                />
              </div>

              <div className="px-4 mb-6">
                <Button className=" font-semibold w-full">Sign in</Button>
              </div>
              <div>
                already have a account?{" "}
                <a href="#" className="font-semibold no-underline text-black">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;