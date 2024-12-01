import React from 'react'
import { useFirebase } from '../context/Firebase';
import { Trash2 } from 'lucide-react';

function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

function calculateDaysBetweenDates(date1, date2) {
    const diffTime = Math.abs(new Date(date2) - new Date(date1)); // Difference in milliseconds
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return diffDays;
}

function AdminJobCard(props) {
    const { deleteJob } = useFirebase(); // Assuming this function exists in your Firebase context

    const today = getFormattedDate();
    const targetDate = props.postedOn;
    const duration = calculateDaysBetweenDates(today, targetDate);

    const handleDelete = () => {
        if (props.id) {
            deleteJob(props.id);
        } else {
            console.error("No job ID found for deletion.");
        }
    };

    return (
        <div className='mx-40 mb-4'>
            <div className='flex justify-between items-center px-6 py-4 mt-5 bg-zinc-200 rounded-md border- border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105'>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                    <p>{props.type} &#x2022; Exp: {props.experience} Year &#x2022; {props.location} &#x2022; {props.salary} LPA</p>
                    <div className='flex items-center gap-2'>
                        {
                            props.skills.map((skill, index) => (
                                <p key={index} className='text-white bg-black py-1 px-2 rounded-md'>{skill}</p>
                            ))
                        }
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <p>Posted {duration > 30 ? `${Math.round(duration / 30)} months` : `${Math.round(duration)} days`} ago</p>
                    <button className="top-4 right-4 bg-red-600 text-white py-2 px-6 rounded-lg cursor-pointer inline-flex " onClick={handleDelete} > Delete <Trash2 className="ml-2" /> </button>
                </div>
            </div>
        </div>
    )
}

export default AdminJobCard;