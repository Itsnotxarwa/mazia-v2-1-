import { Fade } from "react-awesome-reveal";

export default function Divider() {
    return(
        <Fade triggerOnce direction="left" duration={800} delay={400}>
            <div className="max-w-4xl mx-auto px-4">
                <div className="h-px w-full bg-gray-700"></div>
            </div>
        </Fade>
    )
}