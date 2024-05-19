var uploads = []; // This array would hold your uploads

function getNumberOfUploads() {
    return uploads.length;
}

window.onload = function() {
    var numberOfUploads = getNumberOfUploads();

    if (numberOfUploads === 0) {
        document.getElementById('no-uploads-message').style.display = 'block';
    }
}

function uploadItem(item) {
    uploads.push(item);
    // After each upload, check if the "no uploads" message should be displayed
    var numberOfUploads = getNumberOfUploads();
    if (numberOfUploads === 0) {
        document.getElementById('no-uploads-message').style.display = 'block';
    } else {
        document.getElementById('no-uploads-message').style.display = 'none';
    }
}