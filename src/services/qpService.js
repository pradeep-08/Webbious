import axios from 'axios';

// API Configuration
// const API_BASE_URL = 'http://localhost:5000/api';
const API_BASE_URL = 'https://qp-backend.vercel.app/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    // Timeout logic could be added here
});

/**
 * Service for University Question Papers (Web Scraping / Proxy)
 */
export const UniversityService = {
    /**
     * Search for papers on the university portal.
     * @param {string} subjectCode 
     * @returns {Promise<string>} HTML string response
     */
    search: async (subjectCode) => {
        const response = await apiClient.get(`/search?subject=${subjectCode}`, {
            responseType: 'text'
        });
        return response.data;
    },

    /**
     * Download a specific paper via the proxy.
     * @param {URLSearchParams} formData 
     * @returns {Promise<Blob>} The PDF blob
     */
    downloadPaper: async (formData) => {
        const response = await apiClient.post('/FrmStudDownloadQP.aspx?IDE_REG=IDE', formData, {
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        return response.data;
    },

    /**
     * Bulk download (ZIP) via the proxy.
     * @param {URLSearchParams} formData 
     * @returns {Promise<{data: Blob, type: string}>} Response data and content-type
     */
    downloadBulk: async (formData) => {
        const response = await apiClient.post('/FrmStudDownloadQP.aspx?IDE_REG=IDE', formData, {
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        return {
            data: response.data,
            type: response.data.type // Helper to check if it's zip or text (error)
        };
    }
};

/**
 * Service for Community Repository (Database)
 */
export const CommunityService = {
    /**
     * Search the community database.
     * @param {string} subjectCode 
     * @returns {Promise<Array>} List of papers
     */
    searchPapers: async (subjectCode) => {
        const response = await apiClient.get(`/papers?subject_code=${subjectCode}`);
        return response.data;
    },

    /**
     * Upload a new paper to the repository.
     * @param {FormData} formData - Contains file and metadata
     * @returns {Promise<Object>} Success message
     */
    uploadPaper: async (formData) => {
        const response = await apiClient.post('/papers/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    /**
     * Download a paper from the repository.
     * @param {string|number} id 
     * @returns {Promise<Blob>} The PDF blob
     */
    /**
     * Download a community paper.
     * @param {string|number} id 
     * @returns {Promise<Blob>}
     */
    downloadPaper: async (id) => {
        const response = await apiClient.get(`/papers/${id}/download`, {
            responseType: 'blob',
        });
        return response.data;
    },

    /**
     * Update an existing paper's PDF.
     * @param {string|number} id 
     * @param {File} file 
     * @returns {Promise<Object>}
     */
    updatePaper: async (id, file) => {
        const formData = new FormData();
        formData.append("pdf", file);

        const response = await apiClient.put(`/papers/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    }
};

/**
 * Service for AI Insights
 */
export const AiService = {
    /**
     * Download AI generated insights for a subject.
     * @param {string} subjectCode 
     * @returns {Promise<Blob>}
     */
    downloadInsight: async (subjectCode) => {
        try {
            // Attempt to get the specific AI insight file
            const response = await apiClient.get(`/ai-insights/download?subject_code=${subjectCode}`, {
                responseType: 'blob',
            });
            return response.data;
        } catch (error) {
            // Propagate error with specific details for the UI to handle
            if (error.response && error.response.status === 404) {
                throw new Error("AI Insight not found for this subject.");
            }
            throw new Error("Failed to download AI Insight.");
        }
    }
};
