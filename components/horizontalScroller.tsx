import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import React from "react";
import { LeftArrow, RightArrow } from "./arrows";
import { motion } from "framer-motion";
import useDrag from "hooks/useDrag";

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function HorizontalScroller() {
	// NOTE: for drag by mouse
	const { dragStart, dragStop, dragMove, dragging } = useDrag();
	const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (
		ev: React.MouseEvent
	) =>
		dragMove(ev, (posDiff) => {
			if (scrollContainer.current) {
				scrollContainer.current.scrollLeft += posDiff;
			}
		});

	const [selected, setSelected] = React.useState<string>("");
	const handleItemClick = (itemId: string) => () => {
		if (dragging) {
			return false;
		}
		setSelected(selected !== itemId ? itemId : "");
	};

	return (
		<>
			<div onMouseLeave={dragStop}>
				<ScrollMenu
					LeftArrow={LeftArrow}
					RightArrow={RightArrow}
					onWheel={onWheel}
					onMouseDown={() => dragStart}
					onMouseUp={() => dragStop}
					onMouseMove={handleDrag}
				>
					<div style={{
						border: "2px solid",
						display: "flex",
						margin: "0 10px",
						width: "160px",
						userSelect: "none"
					}}>
						<motion.img
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
							exit={{ opacity: 0, x: 20 }}
							className="h-full w-full object-cover"
							src="/chair.jpg"
							alt="Nice chair"
						/>
						<motion.img
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
							exit={{ opacity: 0, x: 20 }}
							className="h-full w-full object-cover"
							src="/chair.jpg"
							alt="Nice chair"
						/>
						<motion.img
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
							exit={{ opacity: 0, x: 20 }}
							className="h-full w-full object-cover"
							src="/chair.jpg"
							alt="Nice chair"
						/>
						<motion.img
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
							exit={{ opacity: 0, x: 20 }}
							className="h-full w-full object-cover"
							src="/chair.jpg"
							alt="Nice chair"
						/>
						<motion.img
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
							exit={{ opacity: 0, x: 20 }}
							className="h-full w-full object-cover"
							src="/chair.jpg"
							alt="Nice chair"
						/>
						<motion.img
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
							exit={{ opacity: 0, x: 20 }}
							className="h-full w-full object-cover"
							src="/chair.jpg"
							alt="Nice chair"
						/>
						<motion.img
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
							exit={{ opacity: 0, x: 20 }}
							className="h-full w-full object-cover"
							src="/chair.jpg"
							alt="Nice chair"
						/>

					</div>
				</ScrollMenu>
			</div>
		</>
	);
}
export default HorizontalScroller;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
	const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

	if (isThouchpad) {
		ev.stopPropagation();
		return;
	}

	if (ev.deltaY < 0) {
		apiObj.scrollNext();
	} else if (ev.deltaY > 0) {
		apiObj.scrollPrev();
	}
}

