import { useState } from "react";
import { Company } from "./types"; // обязательно тип Company

export const useCompanyForm = (initialCompany: Company) => {
    const [formData, setFormData] = useState({
        contract: {
            no: initialCompany.contract.no || "",
            issue_date: initialCompany.contract.issue_date || "",
        },
        businessEntity: initialCompany.businessEntity || "",
        type: initialCompany.type || "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        field: string,
        value: string,
        nestedField?: string
    ) => {
        if (nestedField) {
            setFormData((prev) => ({
                ...prev,
                [field]: {
                    ...prev[field],
                    [nestedField]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        }

        // Очищаем ошибку при вводе
        const errorKey = nestedField ? `${field}.${nestedField}` : field;
        if (errors[errorKey]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[errorKey];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.contract.no.trim()) {
            newErrors["contract.no"] = "Agreement number is required";
        }

        if (!formData.contract.issue_date.trim()) {
            newErrors["contract.issue_date"] = "Date is required";
        }

        if (!formData.businessEntity.trim()) {
            newErrors["businessEntity"] = "Business entity is required";
        }

        if (!formData.type.trim()) {
            newErrors["type"] = "Company type is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (onSuccess: (data: typeof formData) => void) => {
        setIsSubmitting(true);

        if (validate()) {
            try {
                await onSuccess(formData);
            } catch (err) {
                console.error("Submit error:", err);
            }
        }

        setIsSubmitting(false);
    };

    const resetForm = () => {
        setFormData({
            contract: {
                no: initialCompany.contract.no || "",
                issue_date: initialCompany.contract.issue_date || "",
            },
            businessEntity: initialCompany.businessEntity || "",
            type: initialCompany.type || "",
        });
        setErrors({});
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        resetForm,
        errors,
        isSubmitting,
    };
};
