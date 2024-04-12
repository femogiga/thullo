const handleDownload = (e, fileUrl: string) => {
    e.stopPropagation();

    window.open(fileUrl,'_blank')
}


export default handleDownload
