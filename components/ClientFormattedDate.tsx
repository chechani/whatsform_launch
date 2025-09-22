"use client";

import React, { useState, useEffect } from 'react';

interface ClientFormattedDateProps {
    dateString: string;
    options: Intl.DateTimeFormatOptions;
}

const ClientFormattedDate: React.FC<ClientFormattedDateProps> = ({ dateString, options }) => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        // The 'th' is non-standard and can cause parsing issues.
        // We'll remove it to create a more reliable date string.
        const cleanDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
        const date = new Date(cleanDateString);
        if (!isNaN(date.getTime())) {
            setFormattedDate(date.toLocaleDateString('en-US', options));
        } else {
            setFormattedDate('Invalid Date');
        }
    }, [dateString, options]);

    return <>{formattedDate}</>;
};

export default ClientFormattedDate;
