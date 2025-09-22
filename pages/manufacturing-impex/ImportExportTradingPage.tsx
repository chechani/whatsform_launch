
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { importExportTradingData } from '@/data/pages/manufacturing-impex/import-exportTrading';

const ImportExportTradingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={importExportTradingData}
        />
    );
};

export default ImportExportTradingPage;




export { getStaticProps } from '@/lib/ssr';

