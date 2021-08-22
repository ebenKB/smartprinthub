class Reader {
  readFile() {
    console.log("We are reading the file")
  }

  /**
   * 
   * @param {*} url dataURL representing the file
   * @returns Blob containing the file
  */
  async getBlobFromDataURL(url) {
    const base64 = await fetch(url);
    const blob = await base64.blob();
    return blob;
  }

  /**
   * 
   * @param {*} file The file to be read
   * @param {*} callback A function to run when file reading is done
   */
  readFileAsDataURL(file, callback) {
    let fileReader = new FileReader();

    fileReader.onloadend = (e) => {
      callback(fileReader.result)
    }

    fileReader.onerror = (e) => {
      fileReader.abort();
      callback(null);
    }

    fileReader.readAsDataURL(file[0].data);
  }
}

export default Reader;