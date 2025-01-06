import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../components/admin/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen">
        <div className="py-20 md:px-2 xl:px-[8rem] sm:px-2 xxl:px-[17rem]">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-black">
              Dashboard
            </h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Card 1 - Articles to Review */}
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      Articles to Review
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      15
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card 2 - Accepted Articles */}
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      Accepted Articles
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      120
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card 3 - Rejected Articles */}
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      Rejected Articles
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      5
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card 4 - User Accounts with Role User */}
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      User Accounts with Role: User
                    </p>
                  </div>

                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      250
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
