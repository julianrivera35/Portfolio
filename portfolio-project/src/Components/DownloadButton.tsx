import resumePDFEnglish from '../assets/CV - Julián Rivera - 2025 - v4.pdf';

const DownloadButton = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDFEnglish;
        link.download = 'CV - Julián Rivera - 2025 - v4.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button onClick={handleDownload}>
            Download Resume
        </button>
    )
};

export default DownloadButton;