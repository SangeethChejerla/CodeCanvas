
//This function can be used to download an HTML file with the specified content.

export const download = ({ src }: { src: string }) => {
    // Create a new Blob object containing the HTML source code
    const blob = new Blob([src], { type: 'text/html' });
  
    // Create a URL for the Blob object
    const url = URL.createObjectURL(blob);
  
    // Create a new anchor (<a>) element
    const link = document.createElement('a');
  
    // Set the href attribute of the anchor element to the Blob URL
    link.href = url;
  
    // Set the download attribute of the anchor element to the desired file name
    link.download = 'i-de_index.html';
  
    // Append the anchor element to the document body
    document.body.appendChild(link);
  
    // Simulate a click on the anchor element to trigger the download
    link.click();
  
    // Remove the anchor element from the document body
    document.body.removeChild(link);
  
    // Revoke the Blob URL to release system resources
    URL.revokeObjectURL(url);
  };
