import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    return (
        <div className='p-4 rounded-lg shadow-md bg-white border border-gray-200 w-full max-w-full sm:max-w-md mx-auto mb-4'>
            {/* Mobile-specific adjustments */}
            <div className='flex items-center justify-between mb-2'>
                <p className='text-xs sm:text-sm text-gray-500'>
                    {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="outline" className="rounded-full sm:block hidden" size="icon">
                    <Bookmark />
                </Button>
            </div>

            <div className='flex items-center gap-3'>
                <Button className="p-2 sm:p-4" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div className='text-left'>
                    <h1 className='font-medium text-sm sm:text-lg'>{job?.company?.name}</h1>
                    <p className='text-xs sm:text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div className='mt-2'>
                <h1 className='font-bold text-base sm:text-lg'>{job?.title}</h1>
                <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-none'>
                    {job?.description}
                </p>
            </div>

            <div className='flex flex-wrap gap-2 mt-3'>
                <Badge className='text-blue-700 text-xs sm:text-sm font-semibold' variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className='text-red-500 text-xs sm:text-sm font-semibold' variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className='text-purple-700 text-xs sm:text-sm font-semibold' variant="ghost">
                    {job?.salary}LPA
                </Badge>
            </div>

            <div className='mt-3'>
                <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline" className="w-full text-sm sm:text-base">
                    Details
                </Button>
            </div>
        </div>
    )
}

export default Job;
