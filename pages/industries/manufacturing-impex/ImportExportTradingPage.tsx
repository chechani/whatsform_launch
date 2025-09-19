
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { importExportTradingData } from '../../../data/pages/industries/manufacturing-impex/import-exportTrading';

const ImportExportTradingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={importExportTradingData}
        />
    );
};

export default ImportExportTradingPage;




export { getStaticProps } from '@/lib/ssr';

