function HomeVideo({ src, handleVideoLoaded }: { src: string, handleVideoLoaded: () => void }) {
	return (
		<video autoPlay muted loop className={'video'} onPlay={handleVideoLoaded}>
			<source src={src} type="video/mp4" onLoadedData={handleVideoLoaded} />
		</video>);
}

export default HomeVideo