// Note the new "async" and "await" keywords.
window.onload = async function() {
    // Fetch is built in, just like window and document.
    // await indicates that we have to wait for the request
    // to finish. 
    let r = await fetch('https://www.reddit.com/r/all/.json');
    
    // Processing this response into a an Object from the
    // JSON response is also asynchronous
    let responseJSON = await r.json();
  
    // Now that we have the data and it's in a format
    // that we can easily use, we'll create links of
    // our own. 
  
    for(post of responseJSON.data.children) {
      let header = document.createElement('h3');
      let anchor = document.createElement('a');
      
      anchor.href = post.data.url;
      anchor.innerText = post.data.title;
  
      header.appendChild(anchor);
      document.body.appendChild(header);
    }
}

// Micro-exercise: add an img tag and extract the thumbnail url from the resonseJSON 
// to use as the src. That is: display the appropriate thumbnail image for each post.