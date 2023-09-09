// hooks/useTooltip.js
import { useEffect } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const useTooltip = (selector, contentFunction) => {
    useEffect(() => {
        tippy(selector, {
            placement: "bottom",
            arrow: true,
            theme: "customTooltip",
            maxWidth: 300,
            interactive: true,
            allowHTML: true,
            content: contentFunction,
        });
    }, [selector, contentFunction]);
};

export default useTooltip;

