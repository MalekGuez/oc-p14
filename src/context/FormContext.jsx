import { createContext, useState, useMemo } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);

    const value = useMemo(() => ({
        formData,
        setFormData,
    }), [formData]);

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};
