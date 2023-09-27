import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { getDataFromLocalStore } from '../../hooks/localStoreHook';
import './Statistics.css';

const Statistics = () => {
    const donationAllData = useLoaderData();
    const [donationData, setDonationData] = useState(() => []);
    const [responsiveSize, setResponsiveSize] = useState(() => window.innerWidth);

    const loadDataFromLocalStore = async () => {
        const data = await getDataFromLocalStore();
        setDonationData(() => {
            const newData = donationAllData.filter(donateData => data.includes(donateData?.ID));
            return newData;
        })
    }

    const windowSize = () => {
        const size = window.innerWidth;
        setResponsiveSize(() => size);
    }
    
    useEffect(() => {
        let mount = true;
        loadDataFromLocalStore()
        window.addEventListener("resize", windowSize);
        console.log(responsiveSize);
        return () => mount = false;
    }, []);

    // chart code

    const data = [
        { name: 'Your Donation', value: donationData.length },
        { name: 'Total Donation', value: (donationAllData.length - donationData.length) },
    ];

    const COLORS = ['#0088FE', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    }

    return (
        <div className='flex flex-col justify-center items-center gap-12 my-12'>
            <PieChart width={responsiveSize/3} height={responsiveSize/3}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={responsiveSize/6}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
            <div className='flex flex-wrap justify-center items-center gap-12'>
                <p className=''>Your Donation: <span className='yourDonation'></span></p>
                <p>Total Donation: <span className='totalDonation'></span></p>
            </div>
        </div>
    );
};

export default Statistics;