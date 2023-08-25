document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("Download");

    downloadButton.addEventListener("click", function() {
        const cvPath = "ambatukam.jpg";

        const link = document.createElement("a");
        link.href = cvPath;
        link.download = "ambatukam.jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
