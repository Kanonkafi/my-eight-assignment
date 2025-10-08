import React from "react";
import downloadi from "../assets/icon-downloads.png";
import rattingi from "../assets/icon-ratings.png";
import reviewi from "../assets/icon-review.png";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  if (loading) return <p>Loading.......</p>;

  const app = apps.find((a) => a.id === Number(id));

  if (!app) return <p>App not found</p>;

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = app;

  return (
    <div className="max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-5 space-y-10">
      {/* === Top Card Section === */}
      <div className="w-full bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-20 items-center md:items-start hover:shadow-lg transition">
        {/* App Logo */}
        <div className="w-28 h-28 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between w-full">
          {/* Title and Company */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              Developed by{" "}
              <span className="text-indigo-500 font-medium">{companyName}</span>
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-10 mt-4 text-gray-800">
            <div className="flex flex-col items-center text-center">
              <img src={downloadi} alt="Downloads" className="w-5 h-5 mb-1" />
              <span className="text-lg font-bold">{downloads}</span>
              <span className="text-xs text-gray-500">Downloads</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={rattingi} alt="Ratings" className="w-5 h-5 mb-1" />
              <span className="text-lg font-bold">{ratingAvg}</span>
              <span className="text-xs text-gray-500">Average Ratings</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={reviewi} alt="Reviews" className="w-5 h-5 mb-1" />
              <span className="text-lg font-bold">{reviews}</span>
              <span className="text-xs text-gray-500">Total Reviews</span>
            </div>
          </div>

          {/* Smaller Button */}
          <button className="mt-5 bg-green-500 text-white font-semibold px-4 py-1.5 rounded-md hover:bg-green-600 transition w-fit">
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      {/* === Ratings Chart === */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ratings</h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings} layout="vertical" margin={{ left: 50 }}>
              <XAxis type="number" domain={[0, "dataMax + 500"]} />
              <YAxis
                type="category"
                dataKey="name"
                width={60}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#ff9900" barSize={25} radius={[4, 4, 4, 4]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* === Description Section === */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
