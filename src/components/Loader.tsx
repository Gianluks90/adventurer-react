import { Hourglass } from "iconoir-react";

export default function Loader() {
    return (
        <div className="loader">
            <Hourglass />
            <style>
                {`
                .loader {
                    animation: spin 1s linear infinite;
                    transform-origin: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                `}
            </style>
        </div>
    )
}