
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { coachingTutoringData } from '../../../data/pages/industries/education/coachingTutoring';

const CoachingTutoringPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={coachingTutoringData}
            currentIndustry="Education"
            currentCategory="Coaching & Tutoring"
        />
    );
};

export default CoachingTutoringPage;



