import { useEffect, useState } from "react";

const useRestaurantData = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reset state on new resId to prevent showing old data/errors
        setResInfo(null);
        setError(null);

        const fetchData = async () => {

            const latitude = "28.57590";
            const longitude = "77.33450";

            // Use template literals to build the full URL with lat, lng, and resId
            const fullApiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resId}`;
            
            try {
                const response = await fetch(fullApiUrl);

                // 1. Check if the HTTP response is okay (status 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                // 2. Get the response body as a plain text string first
                const text = await response.text();

                // 3. Check if the response text is empty
                if (!text) {
                    throw new Error("API returned an empty response.");
                }

                // 4. If we have text, parse it into a JSON object
                const json = JSON.parse(text);

                // 5. Set the state with the data from the parsed JSON
                setResInfo(json.data);

            } catch (err) {
                // This will catch any of the errors thrown above
                setError(err.message);
            }
        };

        fetchData();
    }, [resId]);

    return { resInfo, error };
}

export default useRestaurantData;