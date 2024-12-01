import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateJobForm from '../components/CreateJobForm.jsx';
import AllJobs from "../components/AllJobs.jsx";
import { useFirebase } from '../context/Firebase';
import { CirclePlus, LogOut, ReceiptText } from "lucide-react";

const tabs = [
	{ id: "create", label: "Create New Job", icon: CirclePlus },
	{ id: "products", label: "All jobs", icon: ReceiptText  },
];

const AdminDashboard = () => {
	const [activeTab, setActiveTab] = useState("create");
	const { logoutUser } = useFirebase();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logoutUser();
			navigate("/login");
		} catch (error) {
			console.error("Error during logout:", error);
		}
	};
	

	return (
		<div className='min-h-screen relative overflow-hidden'>

			<div className="flex justify-end mr-5">
				<button onClick={handleLogout} className="flex top-4 right-10 bg-black text-white py-2 px-6 rounded-lg cursor-pointer">Logout <LogOut className="ml-2"/></button>
			</div>

			<div className='relative z-10 container mx-auto px-4 py-16'>
				<h1 className='text-4xl font-bold mb-8 text-black text-center'>Admin Dashboard</h1>

				<div className='flex justify-center mb-8'>
					{tabs.map((tab) => (
						<button 
							key={tab.id} 
							onClick={() => setActiveTab(tab.id)} 
							className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${activeTab === tab.id ? "bg-black text-white" : "bg-white text-black"}`}>
							{tab.label}
							{<tab.icon className='ml-2' />}
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
