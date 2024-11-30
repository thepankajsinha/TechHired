import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateJobForm from '../components/CreateJobForm.jsx';
import AllJobs from "../components/AllJobs.jsx";
import { useFirebase } from '../context/Firebase';

const tabs = [
	{ id: "create", label: "Create New Job", },
	{ id: "products", label: "All jobs" },
];

const AdminDashboard = () => {
	const [activeTab, setActiveTab] = useState("create");
	const { logoutUser } = useFirebase();
	const navigate = useNavigate();

	const handleLogout = () => {
		logoutUser();
		navigate("/login");
	}

	return (
		<div className='min-h-screen relative overflow-hidden'>

			{/* Logout Button Positioned in the Top-Right Corner */}
			<button 
				onClick={handleLogout} 
				className="absolute top-4 right-4 bg-black text-white py-2 px-6 rounded-lg cursor-pointer">
				Logout
			</button>

			<div className='relative z-10 container mx-auto px-4 py-16'>
				<h1 className='text-4xl font-bold mb-8 text-black text-center'>Admin Dashboard</h1>

				<div className='flex justify-center mb-8'>
					{tabs.map((tab) => (
						<button 
							key={tab.id} 
							onClick={() => setActiveTab(tab.id)} 
							className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${activeTab === tab.id ? "bg-black text-white" : "bg-white text-black"}`}>
							{tab.label}
						</button>
					))}
				</div>

				{activeTab === "create" && <CreateJobForm />}
				{activeTab === "products" && <AllJobs />}
			</div>
		</div>
	);
};

export default AdminDashboard;
