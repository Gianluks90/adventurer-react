import { Hourglass } from "iconoir-react";

export default function Loader() {
    return (
        <div className="loader">
            <Hourglass />
            <style>
                {`
                .loader {
                    animation: spin 1s linear infinite;
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