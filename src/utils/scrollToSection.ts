/**
 * Utility function to scroll to a specific section based on URL query parameters
 * This can be used in the useEffect hook of page components or called directly
 * @param section Optional section parameter - if not provided, will be taken from URL
 */
export const scrollToSection = (section?: string) => {
  // Only run on client side
  if (typeof window !== "undefined") {
    // If section is not provided, get it from URL query params
    if (!section) {
      const params = new URLSearchParams(window.location.search);
      section = params.get("section") || "";
    }

    if (section) {
      // Find the element with the matching ID
      const element = document.getElementById(section);

      if (element) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          // Scroll to the element with smooth behavior
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }
};
