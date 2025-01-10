import PropTypes from "prop-types";

function ProjectProgress({ progress, lastUpdate }) {
    return (
        <div className="flex flex-col items-start">
            <h4 className="text-sm">Project Progress:</h4>
            <div className="relative w-full h-2 bg-gray-300 rounded-full mt-2">
                <div
                    className="absolute top-0 left-0 h-full bg-green-600 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-gray-500 text-xs mt-2">Last update: {lastUpdate}</p>
        </div>
    );
}
ProjectProgress.propTypes = {
    progress:PropTypes.string,
    lastUpdate:PropTypes.string
}

export default ProjectProgress;
