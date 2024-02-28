function HomeVideo({ src, handleVideoLoaded, poster }: { src: string, handleVideoLoaded?: () => void, poster?: string }) {

	const posterOk = !!poster ? poster : src + '/#t=0.1'
	return (
		<video autoPlay muted loop className={'video'} onPlay={handleVideoLoaded} poster={posterOk} >
			<source src={src} type="video/mp4" onLoadedData={handleVideoLoaded} />
		</video>);
}

export default HomeVideo