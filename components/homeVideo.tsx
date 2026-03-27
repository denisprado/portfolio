'use client'

import { useEffect, useRef } from "react";

function HomeVideo({
	src,
	handleVideoLoaded,
	poster,
	playbackRate = 1,
	className,
}: {
	src: string,
	handleVideoLoaded?: () => void,
	poster?: string,
	playbackRate?: number,
	className?: string,
}) {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const hasAnnouncedReadyRef = useRef(false);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = playbackRate;
		}
	}, [playbackRate]);

	const posterSrc = poster ?? `${src}#t=0.1`;

	const handleReady = () => {
		if (hasAnnouncedReadyRef.current) {
			return;
		}

		hasAnnouncedReadyRef.current = true;
		if (videoRef.current) {
			videoRef.current.playbackRate = playbackRate;
		}
		handleVideoLoaded?.();
	};

	return (
		<video
			ref={videoRef}
			autoPlay
			muted
			loop
			playsInline
			className={className}
			onCanPlay={handleReady}
			onLoadedData={handleReady}
			poster={posterSrc}
		>
			<source src={src} type="video/mp4" />
		</video>
	);
}

export default HomeVideo
