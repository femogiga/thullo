const handleDownload = (e, fileUrl: string) => {
    e.stopPropagation();

    window.open(`${fileUrl}`,'_blank')
}
//https://res.cloudinary.com/dmaakpayw/raw/upload/v1712917606/izrils19h6pkscsjaoyu
//https://res.cloudinary.com/dmaakpayw/image/upload/v1712848782/uwxo7r0zsmpxfxgpnljy.pdf
//https://res.cloudinary.com/dmaakpayw/image/upload/v1712843892/hzl2evbddnbe5zpfk6mf.pdf

export default handleDownload
