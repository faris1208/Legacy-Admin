"use client"
import Beginners from '@/app/levels/beginners/beginners';
import Elite from '@/app/levels/elite/elite';
import { useParams } from 'next/navigation';

const page = () => {
    const { id } = useParams();

    return (
        <div>
            <Elite id={id} />
        </div>
    );
};

export default page;